export const LANGUAGE_STORAGE_KEY = 'language'
export const DEFAULT_LANGUAGE = 'en'
export const SUPPORTED_LANGUAGES = ['en', 'de', 'es', 'pt']
export const LANGUAGE_OPTIONS = [
  { code: 'en', locale: 'en-US' },
  { code: 'de', locale: 'de-DE' },
  { code: 'es', locale: 'es-ES' },
  { code: 'pt', locale: 'pt-PT' },
]

export const normalizeLanguage = value => {
  if (!value) return null

  const normalized = value.toString().trim().toLowerCase()

  if (!normalized) return null

  const [languageCode] = normalized.split(/[-_]/)

  return SUPPORTED_LANGUAGES.includes(languageCode)
    ? languageCode
    : DEFAULT_LANGUAGE
}

export const detectPreferredLanguage = () => {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LANGUAGE
  }

  return normalizeLanguage(navigator.language) || DEFAULT_LANGUAGE
}

export const getLocaleTag = language => {
  const normalized = normalizeLanguage(language) || DEFAULT_LANGUAGE
  return (
    LANGUAGE_OPTIONS.find(option => option.code === normalized)?.locale ||
    'en-US'
  )
}

export const getDateKey = value => {
  const date = new Date(value)
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')

  return `${year}-${month}-${day}`
}

export const formatDate = (value, language, options = {}) => {
  return new Intl.DateTimeFormat(getLocaleTag(language), options).format(
    new Date(value),
  )
}

export const formatTime = (value, language, options = {}) => {
  return new Intl.DateTimeFormat(getLocaleTag(language), {
    hour: '2-digit',
    minute: '2-digit',
    ...options,
  }).format(new Date(value))
}

export const formatDateTime = (value, language, options = {}) => {
  return new Intl.DateTimeFormat(getLocaleTag(language), options).format(
    new Date(value),
  )
}

export const formatWeekdayShort = (value, language) => {
  return formatDate(value, language, { weekday: 'narrow' })
}

export const formatMonthShort = (value, language) => {
  return formatDate(value, language, { month: 'short' })
}
