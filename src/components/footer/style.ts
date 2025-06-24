import '../../colors.css';

export const styles = {
  container: {
    backgroundColor: 'var(--color-bg-tertiary)',
    color: 'var(--color-white)',
    padding: '3rem 0 1rem 0',
    marginTop: '4rem',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  logoSection: {
    marginBottom: '1rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 900,
    letterSpacing: 2,
    fontFamily: "Montserrat, Arial, sans-serif",
    marginBottom: '1rem',
  },
  description: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
    opacity: 0.9,
  },
  section: {
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: 'var(--color-orange)',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  link: {
    color: 'var(--color-white)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'var(--color-orange)',
    },
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  contactItem: {
    fontSize: '0.9rem',
    opacity: 0.9,
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: '2rem 0 1rem 0',
  },
  copyright: {
    textAlign: 'center',
    padding: '0 2rem',
  },
  copyrightText: {
    fontSize: '0.8rem',
    opacity: 0.7,
  },
}; 