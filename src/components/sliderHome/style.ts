import '../../colors.css';

export const styles = {
    swiperContainer: {
      width: '100%',
      height: '60vh',
      marginTop: '-2.3rem',
      '@media (max-width: 768px)': {
        marginTop: '-2rem',
      },
    },
    swiper: {
      height: '100vh',
    },
    swiperSlide: {
      position: 'relative',
      textAlign: 'center',
    },
    swiperSlideImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    slideText: {
      position: 'absolute',
      top: '50%',
      left: '20%',
      transform: 'translateY(-50%)',
      color: 'var(--color-white)',
      fontSize: '3rem',
      fontWeight: 'bold',
      maxWidth: '60%',
      lineHeight: '1.5',
      borderTop: '3px solid var(--color-white)',
      borderBottom: '3px solid var(--color-white)',
      '@media (max-width: 768px)': {
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '80%',
      },
    },
    sidebarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem',
      maxWidth: '100%',
      height: '2rem',

    },
  };
  