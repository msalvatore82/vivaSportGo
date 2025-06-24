import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import valenciaImage2 from '../../assets/valencia_3.jpg';
import { styles } from './style';

export default function HeroParallax() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Usar requestAnimationFrame para mejor performance
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={styles.container}>
      <Box
        sx={{
          ...styles.parallaxContainer,
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform',
        }}
      >
        <Box
          component="img"
          src={valenciaImage2}
          alt="Valencia Sports Tourism"
          sx={styles.parallaxImage}
        />
        <Box sx={styles.overlay} />
      </Box>
      
      <Box sx={styles.contentContainer}>
        <Typography sx={styles.mainTitle}>
          {t('hero_title')}
        </Typography>
        <Typography sx={styles.subtitle}>
          {t('hero_subtitle')}
        </Typography>
        <Typography sx={styles.description}>
          {t('hero_description')}
        </Typography>
      </Box>
    </Box>
  );
} 