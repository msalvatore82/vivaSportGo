export const styles = {
    container: {
      width: '100%',
      minHeight: '300px',
    },
    card: {
      maxWidth: '450px',
      padding: '20px 5px',
      margin: '0 auto',
    },
    button: {
      height: '50px',
      color: 'var(--color-white)',
      backgroundColor: 'var(--color-primary)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-hover)',
      },
    },
    title: {
      fontWeight: 900,
      marginTop: { xs: '10rem', md: '0' },
      color: 'var(--color-primary)',
      textAlign: 'center',
      fontSize: { xs: '2rem', md: '2.5rem' },
        }
  };