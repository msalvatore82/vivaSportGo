import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';


const steps = [
  {
    icon: '/icons/contact.svg', // o un icono de MUI
    titleKey: 'howwework_contact',
    descKey: 'howwework_contact_desc',
  },
  {
    icon: '/icons/design.svg',
    titleKey: 'howwework_design',
    descKey: 'howwework_design_desc',
  },
  {
    icon: '/icons/arrival.svg',
    titleKey: 'howwework_arrival',
    descKey: 'howwework_arrival_desc',
  },
  {
    icon: '/icons/celebration.svg',
    titleKey: 'howwework_celebration',
    descKey: 'howwework_celebration_desc',
  },
];

export default function HowWeWork() {
  const { t } = useTranslation();

  return (
    <Box
      id="howwework"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 4, md: 6 },
        py: 6,
        background: 'var(--color-bg-secondary)',
      }}
    >
      {steps.map((step, idx) => (
        <Box
          key={step.titleKey}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            minWidth: 120,
            maxWidth: 180,
            textAlign: 'center',
          }}
        >
          <img src={step.icon} alt={t(step.titleKey)} style={{ width: 80, height: 80, marginBottom: 16 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            {t(step.titleKey)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--color-text)' }}>
            {t(step.descKey)}
          </Typography>
          {idx < steps.length - 1 && (
            <Box
              sx={{
                position: 'absolute',
                right: { xs: '50%', md: '-40px' },
                top: { xs: '100%', md: '40px' },
                width: { xs: 2, md: 40 },
                height: { xs: 40, md: 2 },
                background: 'var(--color-primary)',
                borderRadius: 2,
                mx: 'auto',
                my: { xs: 2, md: 0 },
                transform: { xs: 'translateX(50%)', md: 'none' },
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
