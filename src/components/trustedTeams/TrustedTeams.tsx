import { Box, Typography } from '@mui/material';
import Cards from '../cards/Cards';
import { styles } from './style.ts';
import equipo1 from '../../assets/hockey_male.jpg';
import equipo2 from '../../assets/hockey_female.jpg';
import equipo3 from '../../assets/rugbyvete.jpg';
import { useTranslation } from 'react-i18next';

const teams = [
  {
    image: equipo1,
    alt: 'Hockey',
    title: 'trusted_teams_title_1',
    description: 'trusted_teams_description_1'
  },
  {
    image: equipo2,
    alt: 'Hockey',
    title: 'trusted_teams_title_2',
    description: 'trusted_teams_description_2'
  },
  {
    image: equipo3,
    alt: 'Rugby',
    title: 'trusted_teams_title_3',
    description: 'trusted_teams_description_3'
  },
];

export default function TrustedTeams() {
  const { t } = useTranslation();
  return (
    <Box sx={styles.section}>
      <Typography variant="h2" sx={styles.title}>{t('trusted_teams_title')}</Typography>
      <Box sx={styles.cardsContainer}>
        {teams.map((team, i) => (
          <Cards key={i} image={team.image} title={t(team.title)} description={t(team.description)} alt={team.alt}  />
        ))}
      </Box>
    </Box>
  );
} 