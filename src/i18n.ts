import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './locales/es/translation.json';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import pt from './locales/pt/translation.json';
import it from './locales/it/translation.json';
import nl from './locales/nl/translation.json';
import de from './locales/de/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      fr: { translation: fr },
      pt: { translation: pt },
      it: { translation: it },
      nl: { translation: nl },
      de: { translation: de },
    },
    lng: 'es',
    fallbackLng: 'es',
    supportedLngs: ['es', 'en', 'fr', 'pt', 'it', 'nl', 'de'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;