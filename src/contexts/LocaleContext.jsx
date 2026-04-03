import { Preferences } from '@capacitor/preferences'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import 'moment/locale/de'
import i18n from '../i18n'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  detectPreferredLanguage,
  getLocaleTag,
  normalizeLanguage,
} from '../i18n/utils'

const LocaleContext = createContext({
  language: DEFAULT_LANGUAGE,
  locale: getLocaleTag(DEFAULT_LANGUAGE),
  setLanguage: async () => {},
  isReady: false,
})

const applyLanguage = async language => {
  const nextLanguage = normalizeLanguage(language) || DEFAULT_LANGUAGE

  await i18n.changeLanguage(nextLanguage)
  moment.locale(nextLanguage)

  if (typeof document !== 'undefined') {
    document.documentElement.lang = nextLanguage
  }

  return nextLanguage
}

export const LocaleProvider = ({ children }) => {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let active = true

    const initializeLanguage = async () => {
      try {
        const { value } = await Preferences.get({ key: LANGUAGE_STORAGE_KEY })
        const nextLanguage =
          normalizeLanguage(value) || detectPreferredLanguage() || DEFAULT_LANGUAGE
        const resolvedLanguage = await applyLanguage(nextLanguage)

        if (active) {
          setLanguageState(resolvedLanguage)
          setIsReady(true)
        }
      } catch (error) {
        const resolvedLanguage = await applyLanguage(DEFAULT_LANGUAGE)

        if (active) {
          setLanguageState(resolvedLanguage)
          setIsReady(true)
        }
      }
    }

    initializeLanguage()

    return () => {
      active = false
    }
  }, [])

  const setLanguage = async nextLanguage => {
    const resolvedLanguage = await applyLanguage(nextLanguage)
    setLanguageState(resolvedLanguage)
    await Preferences.set({
      key: LANGUAGE_STORAGE_KEY,
      value: resolvedLanguage,
    })
  }

  const value = useMemo(
    () => ({
      language,
      locale: getLocaleTag(language),
      setLanguage,
      isReady,
    }),
    [language, isReady],
  )

  if (!isReady) {
    return null
  }

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
