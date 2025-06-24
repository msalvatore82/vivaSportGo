import '../../colors.css';

export const styles = {
  container: {
    width: '100%',
    maxWidth: '300px',
    minHeight: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
    padding: '0.2rem',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid #e0e0e0',
  },
  timeSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    paddingRight: '0.5rem',
  },
  time: {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--color-primary)',
    lineHeight: 1,
  },
  location: {
    fontSize: '1.2rem',
    color: 'var(--color-text)',
    fontWeight: 500,
    lineHeight: 1,
  },
  weatherSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    paddingLeft: '0.5rem',
  },
  weatherIcon: {
    fontSize: '3rem',
    lineHeight: 1,
  },
  temperature: {
    fontSize: '2.5rem',
    fontWeight: 600,
    color: 'var(--color-primary)',
    lineHeight: 1,
  },
  loader: {
    color: 'var(--color-primary)',
  },
  error: {
    fontSize: '0.8rem',
    color: 'var(--color-text)',
    opacity: 0.6,
  },
  weatherContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '1.5rem 0 0 0',
  },
}; 