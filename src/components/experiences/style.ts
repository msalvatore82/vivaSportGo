export const styles = {
  section: {
    width: '100%',
    padding: '4rem 0',
    '@media (max-width: 600px)': {
      padding: '2rem 0',
    },
  },
  title: {
    marginBottom: '3rem',
    fontWeight: 900,
    color: 'var(--color-primary)',
    textAlign: 'center',
    fontSize: { xs: '2rem', md: '2.5rem' },
  },
  cardWrapper: {
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',
    marginBottom: '2.5rem',
    '@media (max-width: 600px)': {
      marginBottom: '1.5rem',
    },
  },
  card: (reverse: boolean) => ({
    display: 'flex',
    flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' },
    overflow: 'hidden',
    minHeight: { md: 280 },
    boxShadow: 'none',
    borderRadius: 0,
    border: 'none',
    background: 'var(--color-white)',
     '@media (max-width: 600px)': {
      width: '90%',
      margin: '0 auto',
     },
  }),
  cardMedia: {
    width: { xs: '100%', md: 400 },
    height: { xs: 180, md: '100%' },
    objectFit: 'cover',
    '@media (max-width: 600px)': {
      height: 160,
    },
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: { xs: '1.2rem', md: '2.5rem' },
    '@media (max-width: 600px)': {
      padding: '1rem',
    },
  },
  team: {
    fontWeight: 700,
    marginBottom: '0.5rem',
    fontSize: { xs: '1.1rem', md: '1.5rem' },
  },
  sport: {
    color: 'var(--color-orange)',
    marginBottom: '1rem',
    fontSize: { xs: '0.95rem', md: '1.1rem' },
    fontWeight: 600,
  },
  story: {
    color: 'var(--color-text)',
    fontSize: { xs: '0.95rem', md: '1.1rem' },
    lineHeight: 1.6,
  },
};
