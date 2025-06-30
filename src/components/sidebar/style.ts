export const styles = {
  sidebarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.7rem 1rem',
    width: '100%',
    minHeight: '3.5rem',
    boxSizing: 'border-box',
    '@media (max-width: 768px)': {
      padding: '0.5rem 0.7rem',
      minHeight: '3rem',
  },
    '@media (max-width: 480px)': {
      padding: '0.3rem 0.5rem',
      minHeight: '2.5rem',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    minWidth: 0,
  },
  logo: {
    height: '2rem',
    marginRight: '0.5rem',
    '@media (max-width: 600px)': {
      height: '1.5rem',
    },
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: 900,
    letterSpacing: 2,
    fontFamily: 'Montserrat, Arial, sans-serif',
    lineHeight: 1,
    marginLeft: '0.5rem',
    whiteSpace: 'nowrap',
    '@media (max-width: 480px)': {
      fontSize: '1rem',
    },
  },
  languageSelectorContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '0.5rem',
  },
  menuIconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  drawerLink: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--color-text)',
  },
  weatherContainer: {
    margin: 'auto',
    width: '80',
  },
  footerContainer: {
    width: '100%',
    padding: '0.5rem 0 0.5rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};