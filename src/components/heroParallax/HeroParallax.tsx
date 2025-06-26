import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import valenciaImage2 from '../../assets/valencia_3.jpg';
import { styles } from './style';

export default function HeroParallax() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
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
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
        >
          <Typography sx={styles.mainTitle}>
            {t('hero_title')}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
        >
          <Typography sx={styles.subtitle}>
            {t('hero_subtitle')}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
        >
          <Typography sx={styles.description}>
            {t('hero_description')}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
} 