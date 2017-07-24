import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import LanguageSelectionTrad from './src/components/LanguageSelection/LanguageSelectionTrad.json'

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        LanguageSelection: LanguageSelectionTrad.en,
      },
      fr: {
        LanguageSelection: LanguageSelectionTrad.fr,
      }
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  })

export default i18n