import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './style';

interface LanguageSelectorProps {
  isSidebar?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isSidebar }) => {
  const { i18n } = useTranslation();
  const languages = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'pt', label: 'PT', flag: '🇵🇹' },
    { code: 'it', label: 'IT', flag: '🇮🇹' },
    { code: 'nl', label: 'NL', flag: '🇳🇱' },
    { code: 'de', label: 'DE', flag: '🇩🇪' }
  ];

  return (
    <Select
      value={i18n.language}
      onChange={e => i18n.changeLanguage(e.target.value as string)}
      style={styles.languageSelector}
      variant="standard"
      size="small"
      renderValue={(selected) => {
        const selectedLang = languages.find(lang => lang.code === selected);
        return isSidebar ? selectedLang?.flag : `${selectedLang?.flag} ${selectedLang?.label}`;
      }}
    >
      {languages.map(lang => (
        <MenuItem key={lang.code} value={lang.code} style={styles.languageOption}>
          <span style={{ marginRight: 4, fontSize: '1.2rem', lineHeight: '1.5rem' }}>{lang.flag}</span> {isSidebar ? '' : lang.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;