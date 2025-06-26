import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import rugby from '../../assets/rugbyvete.jpg';
import hockey_male from '../../assets/hockey_male.jpg';
import hockey_female from '../../assets/hockey_female.jpg';
import { styles } from './style.ts';

const experiences = [
  {
    image: rugby,
    teamKey: 'experience_rugby_team',
    sportKey: 'experience_rugby_sport',
    countryKey: 'experience_rugby_country',
    storyKey: 'experience_rugby_story',
    nameKey: 'experience_rugby_name',
  },
  {
    image: hockey_male,
    teamKey: 'experience_hockey_male_team',
    sportKey: 'experience_hockey_male_sport',
    countryKey: 'experience_hockey_male_country',
    storyKey: 'experience_hockey_male_story',
    nameKey: 'experience_hockey_male_name',
  },
  {
    image: hockey_female,
    teamKey: 'experience_hockey_female_team',
    sportKey: 'experience_hockey_female_sport',
    countryKey: 'experience_hockey_female_country',
    storyKey: 'experience_hockey_female_story',
    nameKey: 'experience_hockey_female_name',
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
          <Grid item key={exp.teamKey} sx={styles.cardWrapper}>
            <Card sx={styles.card(idx % 2 !== 0)}>
              <CardMedia
                component="img"
                image={exp.image}
                alt={exp.teamKey}
                sx={styles.cardMedia}
              />
              <CardContent sx={styles.cardContent}>
                <Typography variant="h5" sx={styles.team}>
                  {t(exp.teamKey)}
                </Typography>
                <Typography variant="subtitle1" sx={styles.sport}>
                  {t(exp.sportKey)}
                </Typography>
                <Typography variant="subtitle1" sx={styles.country}>
                  {t(exp.countryKey)}
                </Typography>
              
                <Typography variant="body1" sx={styles.story}>
                  {t(exp.storyKey)}
                </Typography>
                <Typography variant="subtitle1" sx={styles.name}>
                  {t(exp.nameKey)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 