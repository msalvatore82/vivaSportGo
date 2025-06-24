import { Box, Typography, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { styles } from './style.ts';

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}

export default function WeatherWidget() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Actualizar la hora cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simular datos del clima para Valencia
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setTimeout(() => {
          setWeather({
            temperature: 22,
            description: 'Soleado',
            icon: '☀️'
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

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
            <Typography sx={styles.weatherIcon}>
              {weather.icon}
            </Typography>
            <Typography sx={styles.temperature}>
              {weather.temperature}°
            </Typography>
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