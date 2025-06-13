export const styles = {
    section: {
        padding: '4rem 2rem 2rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    title: {
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: 700,
        fontSize: '2.2rem',
        letterSpacing: '1px',
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        width: '100%',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        background: '#fff',
        '&:hover': {
            transform: 'translateY(-8px) scale(1.03)',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12)',
        },
    },
    icon: {
        fontSize: '3rem',
        marginBottom: '1rem',
    },
    cardTitle: {
        fontWeight: 600,
        fontSize: '1.2rem',
        textAlign: 'center',
    },
}