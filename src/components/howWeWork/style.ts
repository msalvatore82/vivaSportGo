export const styles = {
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'center',
    gap: { xs: 4, md: 6 },
    py: 6,
    background: 'var(--color-bg-secondary)',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    minWidth: 120,
    maxWidth: 180,
    textAlign: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontWeight: 700,
    marginBottom: 1,
  },
  desc: {
    color: 'var(--color-text)',
  },
  arrow: {
    position: 'absolute',
    right: { xs: '50%', md: '-40px' },
    top: { xs: '100%', md: '40px' },
    width: { xs: 2, md: 40 },
    height: { xs: 40, md: 2 },
    background: 'var(--color-primary)',
    borderRadius: 2,
    mx: 'auto',
    my: { xs: 2, md: 0 },
    transform: { xs: 'translateX(50%)', md: 'none' },
  },
};
