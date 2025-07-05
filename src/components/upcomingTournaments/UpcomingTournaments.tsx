import { Box, Typography, Tooltip } from '@mui/material';
import Cards from '../cards/Cards';
import { styles } from './style.ts';
import torneo1 from '../../assets/paella-cup.webp';
import torneo2 from '../../assets/mal-de-altura.webp';
import torneo3 from '../../assets/egorf-2024.webp';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const tournaments = [
  {
    image: torneo1,
    alt: 'Hockey',
    title: 'upcoming_tournaments_title_1',
    description: 'upcoming_tournaments_description_1',
    slug: 'paella-cup-2026-hockey',
  },
  {
    image: torneo2,
    alt: 'Hockey',
    title: 'upcoming_tournaments_title_2',
    description: 'upcoming_tournaments_description_2',
    slug: 'mal-de-altura-2026-rugby',
  },
  {
    image: torneo3,
    alt: 'Rugby',
    title: 'upcoming_tournaments_title_3',
    description: 'upcoming_tournaments_description_3',
    slug: 'EGORF-2026-rugby',
  },
];

export default function UpcomingTournaments() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box sx={styles.section}>
      <Typography variant="h2" sx={styles.title}>{t('upcoming_tournaments_title')}</Typography>
      <Box sx={styles.cardsContainer}>
        {tournaments.map((torneo, i) => (
          <Tooltip key={i} title={t('more_information')} arrow followCursor placement="top">
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/tournament/${torneo.slug}`)}
            >
              <Cards
                image={torneo.image}
                title={t(torneo.title)}
                description={t(torneo.description)}
                alt={torneo.alt}
              />
            </div>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
