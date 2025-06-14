export const styles = {
    card: {
      maxWidth: '25rem', 
      boxShadow: 'none',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      cursor: 'pointer',
      borderRadius: '0.625rem',
      '&:hover .card-img-zoom': {
        transform: 'scale(1.04)',
      },
    },
    cardImg: {
      borderRadius: '0.625rem', 
      cursor: 'pointer',
      transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)',
      width: '100%',
      height: '194px',
      objectFit: 'cover',
      display: 'block',
    },
    title: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1.4375rem', 
      fontWeight: 700,
      lineHeight: '1.9575rem', 
      textAlign: 'left',
      marginBottom: '1rem',
      color: '#000000'

    },
    description: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1rem', 
      fontWeight: 400,
      lineHeight: '1.361875rem', 
      textAlign: 'left',
      color: '#4F4F4F'

    }
  };
  