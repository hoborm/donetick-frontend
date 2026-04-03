import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from './utils'
import de from './resources/de'
import en from './resources/en'

const resources = {
  en,
  de,
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    defaultNS: 'common',
    ns: ['common', 'navigation', 'auth', 'settings', 'chores', 'user'],
    interpolation: {
      escapeValue: false,
    },
    returnEmptyString: false,
    returnNull: false,
  })
}

export default i18n
