import { Box, Typography, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { styles } from './style.ts';

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  humidity?: number;
  windSpeed?: number;
}

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Datos mock temporales mientras la API key se activa
const MOCK_WEATHER: WeatherData = {
  temperature: 22,
  description: 'parcialmente nublado',
  icon: 'https://openweathermap.org/img/wn/02d@2x.png',
  humidity: 65,
  windSpeed: 12
};

export default function WeatherWidget() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [useMock, setUseMock] = useState(false);

  // Actualizar la hora cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!API_KEY) {
        console.error('API key no encontrada');
        setWeather(MOCK_WEATHER);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        // Usando la API 2.5 gratuita con búsqueda por ciudad
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Valencia,ES&units=metric&appid=${API_KEY}&lang=es`;
        
        const res = await fetch(url);
        
        if (!res.ok) {
          if (res.status === 401) {
            console.warn('API key no activa aún. Usando datos mock temporales.');
            setUseMock(true);
            setWeather(MOCK_WEATHER);
          } else {
            throw new Error(`Error HTTP: ${res.status}`);
          }
        } else {
          const data = await res.json();
          
          if (data.main && data.weather && data.weather[0]) {
            setWeather({
              temperature: Math.round(data.main.temp),
              description: data.weather[0].description,
              icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
              humidity: data.main.humidity,
              windSpeed: data.wind?.speed
            });
            setUseMock(false);
          } else {
            throw new Error('Datos de clima no disponibles');
          }
        }
      } catch (error) {
        console.error('Error al obtener el clima:', error);
        if (!useMock) {
          setWeather(MOCK_WEATHER);
          setUseMock(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Actualizar el clima cada 10 minutos (solo si no estamos usando mock)
    const weatherInterval = setInterval(() => {
      if (!useMock) {
        fetchWeather();
      }
    }, 10 * 60 * 1000);
    
    return () => clearInterval(weatherInterval);
  }, [useMock]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.timeSection}>
        <Typography sx={styles.time}>
          {formatTime(currentTime)}
        </Typography>
        <Typography sx={styles.location}>
          Valencia
        </Typography>
      </Box>
      
      <Box sx={styles.weatherSection}>
        {loading ? (
          <CircularProgress size={16} sx={styles.loader} />
        ) : weather ? (
          <>
            <img src={weather.icon} alt={weather.description} style={{ width: 32, height: 32 }} />
            <Typography sx={styles.temperature}>
              {weather.temperature}°
            </Typography>
            <Typography sx={styles.description}>
              {weather.description}
            </Typography>
            {useMock && (
              <Typography sx={{ fontSize: '10px', color: '#666', fontStyle: 'italic' }}>
                Datos de ejemplo
              </Typography>
            )}
          </>
        ) : (
          <Typography sx={styles.error}>
            --
          </Typography>
        )}
      </Box>
    </Box>
  );
} 