import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer style={{ textAlign: 'center', padding: '2rem 1rem 1rem 1rem', borderTop: '1px solid #eee', fontSize: 14, marginTop: 40 }}>
      {t('legal_notice')}
    </footer>
  );
} 