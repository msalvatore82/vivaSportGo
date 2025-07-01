import { Box, Typography } from '@mui/material';
import Cards from '../cards/Cards';
import { styles } from './style.ts';
import torneo1 from '../../assets/GALERIA_Sports And Travel Europe_1.webp';
import torneo2 from '../../assets/GALERIA_Sports And Travel Europe_2.webp';
import torneo3 from '../../assets/GALERIA_Sports And Travel Europe_3.webp';
import { useTranslation } from 'react-i18next';

const tournaments = [
  {
    image: torneo1,
    title: 'upcoming_tournaments_title_1',
    description: 'upcoming_tournaments_description_1'
  },
  {
    image: torneo2,
    title: 'upcoming_tournaments_title_2',
    description: 'upcoming_tournaments_description_2'
  },
  {
    image: torneo3,
    title: 'upcoming_tournaments_title_3',
    description: 'upcoming_tournaments_description_3'
  },
];

function scrollToContactWithMessage(message: string) {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    // Esperar a que el scroll termine y luego setear el mensaje
    setTimeout(() => {
      const messageInput = document.querySelector(
        'textarea[name="message"]'
      ) as HTMLTextAreaElement;
      if (messageInput) {
        messageInput.value = message;
        messageInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }, 600);
  }
}

export default function UpcomingTournaments() {
  const { t } = useTranslation();
  return (
    <Box sx={styles.section}>
      <Typography variant="h2" sx={styles.title}>{t('upcoming_tournaments_title')}</Typography>
      <Box sx={styles.cardsContainer}>
        {tournaments.map((torneo, i) => (
          <div
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              scrollToContactWithMessage(
                t('contact_tournament_message', { tournament: t(torneo.title)    })
              )
            }
          >
            <Cards image={torneo.image} title={t(torneo.title)} description={t(torneo.description)} />
          </div>
        ))}
      </Box>
    </Box>
  );
} 