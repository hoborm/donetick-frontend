import { Box, Container, Typography } from '@mui/joy'
import { useTranslation } from 'react-i18next'

const TITLE_KEY_MAP = {
  'Profile Settings': 'settings:pages.profile.title',
  'Circle Settings': 'settings:pages.circle.title',
  'Account Settings': 'settings:pages.account.title',
  'Managed Accounts': 'settings:pages.managedAccounts.title',
  'Sub Account Management': 'settings:pages.subAccountManagement.title',
  'Notification Settings': 'settings:pages.notifications.title',
  'Multi-Factor Authentication': 'settings:pages.mfa.title',
  'API Tokens': 'settings:pages.apiTokens.title',
  'Storage Settings': 'settings:pages.storage.title',
  'Sidepanel Customization': 'settings:pages.sidepanel.title',
  'Theme Preferences': 'settings:pages.theme.title',
  Language: 'settings:pages.language.title',
  'Advanced Settings': 'settings:pages.advanced.title',
  'Developer Settings': 'settings:pages.developer.title',
}

const SettingsLayout = ({ title, children }) => {
  const { t } = useTranslation()
  const translatedTitle = TITLE_KEY_MAP[title] ? t(TITLE_KEY_MAP[title]) : title

  return (
    <Container>
      <Box sx={{ py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography level='h2' sx={{ flexGrow: 1 }}>
            {translatedTitle}
          </Typography>
        </Box>
        {children}
      </Box>
    </Container>
  )
}

export default SettingsLayout
