import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/Tranlation.json';
import hi from './locales/hi/Translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});

export default i18n;
