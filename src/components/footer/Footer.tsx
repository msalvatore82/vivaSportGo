import { Box, Typography, Link, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './style';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Grid container spacing={4}>
          {/* Logo y descripción */}
          <Grid item xs={12} md={4}>
            <Box sx={styles.logoSection}>
              <Typography sx={styles.logo}>
                VIVASPORTGO<span style={{ color: "#00bfff" }}>+</span>
              </Typography>
              <Typography sx={styles.description}>
                {t('footer_description')}
              </Typography>
            </Box>
          </Grid>

          {/* Enlaces rápidos */}
          <Grid item xs={12} md={4}>
            <Box sx={styles.section}>
              <Typography sx={styles.sectionTitle}>
                {t('footer_quick_links')}
              </Typography>
              <Box sx={styles.links}>
                <Link href="#howwework" sx={styles.link}>
                  {t('how_we_work')}
                </Link>
                <Link href="#experiences" sx={styles.link}>
                  {t('experiences')}
                </Link>
                <Link href="#contact" sx={styles.link}>
                  {t('contact_title')}
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Información de contacto */}
          <Grid item xs={12} md={4}>
            <Box sx={styles.section}>
              <Typography sx={styles.sectionTitle}>
                {t('footer_contact')}
              </Typography>
              <Box sx={styles.contactInfo}>
                <Typography sx={styles.contactItem}>
                  📧 vivasportgo@gmail.com
                </Typography>
                <Typography sx={styles.contactItem}>
                  📱 +34 662 692 496
                </Typography>
                <Typography sx={styles.contactItem}>
                  📍 Valencia, España
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Línea divisoria */}
      <Box sx={styles.divider} />

      {/* Copyright */}
      <Box sx={styles.copyright}>
        <Typography sx={styles.copyrightText}>
          © 2024 VIVASPORTGO+. {t('footer_rights')}
        </Typography>
      </Box>
    </Box>
  );
} 