import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Backend from 'i18next-http-backend';

import { enUS } from '../locales';
import { viVN } from '../locales';

// the translations
const resources = {
   en: {
      translation: enUS,
   },
   vi: {
      translation: viVN,
   },
};

i18n
   .use(reactI18nextModule) // passes i18n down to react-i18next
   .init({
      resources,
      lng: 'vi',
      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
         escapeValue: false, // react already safes from xss
      },
   });

export default i18n;
