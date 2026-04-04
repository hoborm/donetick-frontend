import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from './utils'
import de from './resources/de'
import en from './resources/en'
import es from './resources/es'
import pt from './resources/pt'

const resources = {
  en,
  de,
  es,
  pt,
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    defaultNS: 'common',
    ns: [
      'common',
      'navigation',
      'auth',
      'settings',
      'chores',
      'user',
      'settingsExtras',
      'filters',
      'things',
    ],
    interpolation: {
      escapeValue: false,
    },
    returnEmptyString: false,
    returnNull: false,
  })
}

export default i18n
