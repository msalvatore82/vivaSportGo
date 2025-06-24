import '../../colors.css';

export const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    marginTop: '-2.3rem',
    '@media (max-width: 768px)': {
      marginTop: '-2rem',
    },
  },
  parallaxContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '120%', // Más alto para el efecto parallax
    zIndex: 1,
  },
  parallaxImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(11, 31, 64, 0.7) 0%, rgba(255, 107, 53, 0.3) 100%)',
    zIndex: 2,
  },
  contentContainer: {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    padding: '0 10%',
    '@media (max-width: 768px)': {
      padding: '0 5%',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  mainTitle: {
    color: 'var(--color-white)',
    fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: '2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    borderTop: '4px solid var(--color-white)',
    borderBottom: '4px solid var(--color-white)',
    padding: '1rem 0',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
      borderTop: '2px solid var(--color-white)',
      borderBottom: '2px solid var(--color-white)',
      padding: '0.5rem 0',
    },
  },
  subtitle: {
    color: 'var(--color-orange)',
    fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.8rem' },
    fontWeight: 600,
    marginBottom: '1rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  description: {
    color: 'var(--color-white)',
    fontSize: { xs: '1rem', md: '1.2rem', lg: '1.4rem' },
    fontWeight: 400,
    maxWidth: '600px',
    lineHeight: 1.6,
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem',
      maxWidth: '100%',
    },
  },
}; 