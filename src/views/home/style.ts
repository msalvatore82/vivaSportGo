export const styleHome = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    background: '#fafbfc',
  },
  headerContainer: {
    width: '100%',
    minHeight: '5rem',
    margin: 0,
    padding: 0,
    zIndex: 10,
  },
  sliderContainer: {
    width: '100%',
    margin: 0,
    padding: 0,
    minHeight: '40rem',
    '@media (max-width: 48rem)': { // 768px = 48rem
      minHeight: '20rem',
      height: '18.75rem', // 300px = 18.75rem
    },
  },
  serviciosContainer: {
    width: '100%',
    margin: '0 auto',
    padding: '2rem 0 0 0',
    maxWidth: '75rem', 
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactContainer: {
    width: '100%',
    margin: '0 auto',
    padding: '2rem 0 0 0',
    maxWidth: '75rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
