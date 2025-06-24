import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import rugby from '../../assets/rugbyvete.jpg';
import hockey_male from '../../assets/hockey_male.jpg';
import hockey_female from '../../assets/hockey_female.jpg';
import { styles } from './style.ts';

const experiences = [
  {
    image: rugby,
    team: 'Valencia Veterans RFC',
    sport: 'Rugby',
    country: 'España',
    storyKey: 'experience_rugby_story',
  },
  {
    image: hockey_male,
    team: 'Amsterdam HC',
    sport: 'Hockey Masculino',
    country: 'Países Bajos',
    storyKey: 'experience_hockey_male_story',
  },
  {
    image: hockey_female,
    team: 'London Ladies HC',
    sport: 'Hockey Femenino',
    country: 'Reino Unido',
    storyKey: 'experience_hockey_female_story',
  },
];

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <Box id="experiences" sx={styles.section}>
      <Typography variant="h3" sx={styles.title}>
        {t('experiences')}
      </Typography>
      <Grid container direction="column" spacing={6} alignItems="center">
        {experiences.map((exp, idx) => (
          <Grid item key={exp.team} sx={styles.cardWrapper}>
            <Card sx={styles.card(idx % 2 !== 0)}>
              <CardMedia
                component="img"
                image={exp.image}
                alt={exp.team}
                sx={styles.cardMedia}
              />
              <CardContent sx={styles.cardContent}>
                <Typography variant="h5" sx={styles.team}>
                  {exp.team} ({exp.country})
                </Typography>
                <Typography variant="subtitle1" sx={styles.sport}>
                  {exp.sport}
                </Typography>
                <Typography variant="body1" sx={styles.story}>
                  {t(exp.storyKey)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 