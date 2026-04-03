import {
  Button,
  FormControl,
  FormLabel,
  ToggleButtonGroup,
  Typography,
} from '@mui/joy'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../../contexts/LocaleContext'
import SettingsLayout from './SettingsLayout'

const LanguageSettings = () => {
  const { t } = useTranslation(['settings'])
  const { language, setLanguage } = useLocale()
  const [isUpdating, setIsUpdating] = useState(false)

  const handleLanguageChange = async (_, nextLanguage) => {
    if (!nextLanguage || nextLanguage === language) {
      return
    }

    setIsUpdating(true)

    try {
      await setLanguage(nextLanguage)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <SettingsLayout title='Language'>
      <div className='grid gap-4'>
        <Typography level='body-md'>{t('language.description')}</Typography>
        <FormControl>
          <FormLabel level='title-md' htmlFor='select-language'>
            {t('language.fieldLabel')}
          </FormLabel>
          <ToggleButtonGroup
            id='select-language'
            variant='outlined'
            value={language}
            onChange={handleLanguageChange}
          >
            <Button loading={isUpdating && language !== 'en'} value='en'>
              {t('language.options.en')}
            </Button>
            <Button loading={isUpdating && language !== 'de'} value='de'>
              {t('language.options.de')}
            </Button>
          </ToggleButtonGroup>
        </FormControl>
      </div>
    </SettingsLayout>
  )
}

export default LanguageSettings
