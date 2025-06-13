import '../../colors.css';

export const styles = {
  appBar: {
    backgroundColor: 'var(--color-white)',
    boxShadow: 'none',
    borderBottom: 'none',
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 2rem',
    color: 'var(--color-text)',
    boxSizing: 'border-box',
  },
  headerLogo: {
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 0',
    minWidth: '180px',
  },
  headerLogoImage: {
    width: '3rem',
    height: '3rem',
    marginRight: '0.5rem',
  },
  headerNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '2 1 0',
    gap: '4rem',
    fontSize: '1.125rem',
    height: '3rem',
  },
  headerLink: {
    color: 'var(--color-text)',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '2rem',
  },
  languageSelector: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: '1 1 0',
    minWidth: '120px',
    height: '3rem',
    background: 'transparent',
  },
};