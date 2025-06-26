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
      color: 'var(--color-primary)',
      textAlign: 'center',
      fontSize: '2rem',
      marginTop: '2.5rem',
      '@media (max-width: 600px)': {
        marginTop: '0rem',
      },
    },
};