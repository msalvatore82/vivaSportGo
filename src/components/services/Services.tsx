import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@mui/material';
import { styles } from './style';    
import Cards from '../cards/Cards';
import bus from '../../assets/bus.jpg';
import hocker2 from '../../assets/hocker2.jpg';
import organiza from '../../assets/organiza.jpg';
import valenc from '../../assets/valenc.jpg';
import servicedAppartment from '../../assets/serviced-apartment.png';
import serviceTurismo from '../../assets/service-turismo.jpg';

export default function Services() {
  const { t } = useTranslation();
  
  const services = [
    {
      key: 'service_accommodation',
      image: servicedAppartment,
      description: t('service_accommodation_desc'),
    },
    {
      key: 'service_transport',
      image: bus,
      description: t('service_transport_desc'),
    },
    {
      key: 'service_matches',
      image: hocker2,
      description: t('service_matches_desc'),
    },
    {
      key: 'service_training',
      image: organiza,
      description: t('service_training_desc'),
    },
    {
      key: 'service_tours',
      image: valenc,
      description: t('service_tours_desc'),
    },
    {
      key: 'service_other',
      image: serviceTurismo,
      description: t('service_other_desc'),
    },
  ];

  return (
    <Box component="section" id="servicios" style={styles.section}>
      <Typography variant="h2" component="h2" sx={styles.title}>{t('services_title')}</Typography>
      <Box style={{ ...styles.cardsContainer, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {services.map((service) => (
          <Box key={service.key} style={{ flex: '1 1 300px', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center' }}>
            <Cards
              title={t(service.key)}
              description={service.description}
              image={service.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
} 