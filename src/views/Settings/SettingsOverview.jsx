import {
  AccountCircle,
  Api,
  ChevronRight,
  Circle,
  Code,
  FamilyRestroom,
  Translate,
  Notifications,
  Palette,
  Person,
  Security,
  Settings,
  Star,
  Storage,
  ViewSidebar,
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Stack,
  Typography,
} from '@mui/joy'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useUserProfile } from '../../queries/UserQueries'
import { isPlusAccount } from '../../utils/Helpers'
import { isParentUser } from '../../utils/UserHelpers'

const SettingsOverview = () => {
  const { t } = useTranslation(['settings'])
  const navigate = useNavigate()
  const { data: userProfile } = useUserProfile()

  const settingsCards = [
    {
      id: 'profile',
      title: t('overview.cards.profile.title'),
      description: t('overview.cards.profile.description'),
      icon: <Person />,
    },
    {
      id: 'circle',
      title: t('overview.cards.circle.title'),
      description: t('overview.cards.circle.description'),
      icon: <Circle />,
    },
    {
      id: 'account',
      title: t('overview.cards.account.title'),
      description: t('overview.cards.account.description'),
      icon: <AccountCircle />,
    },
    {
      id: 'subaccounts',
      title: t('overview.cards.subaccounts.title'),
      description: t('overview.cards.subaccounts.description'),
      icon: <FamilyRestroom />,
    },
    {
      id: 'notifications',
      title: t('overview.cards.notifications.title'),
      description: t('overview.cards.notifications.description'),
      icon: <Notifications />,
    },
    {
      id: 'mfa',
      title: t('overview.cards.mfa.title'),
      description: t('overview.cards.mfa.description'),
      icon: <Security />,
    },
    {
      id: 'apitokens',
      title: t('overview.cards.apitokens.title'),
      description: t('overview.cards.apitokens.description'),
      icon: <Api />,
    },
    {
      id: 'storage',
      title: t('overview.cards.storage.title'),
      description: t('overview.cards.storage.description'),
      icon: <Storage />,
    },
    {
      id: 'sidepanel',
      title: t('overview.cards.sidepanel.title'),
      description: t('overview.cards.sidepanel.description'),
      icon: <ViewSidebar />,
    },
    {
      id: 'theme',
      title: t('overview.cards.theme.title'),
      description: t('overview.cards.theme.description'),
      icon: <Palette />,
    },
    {
      id: 'language',
      title: t('overview.cards.language.title'),
      description: t('overview.cards.language.description'),
      icon: <Translate />,
    },
    {
      id: 'advanced',
      title: t('overview.cards.advanced.title'),
      description: t('overview.cards.advanced.description'),
      icon: <Settings />,
    },
    {
      id: 'developer',
      title: t('overview.cards.developer.title'),
      description: t('overview.cards.developer.description'),
      icon: <Code />,
    },
  ]

  const handleCardClick = settingId => {
    navigate(`/settings/${settingId}`)
  }

  // Filter settings based on user type
  const getAvailableSettings = () => {
    const parentOnlySettings = [
      'children',
      'mfa',
      'apitokens',
      'circle',
      'account',
    ]

    if (isParentUser(userProfile)) {
      // Parent users can access all settings
      return settingsCards
    } else {
      // Child users can only access basic settings
      return settingsCards.filter(
        setting => !parentOnlySettings.includes(setting.id),
      )
    }
  }

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        {/* <EmojiEvents sx={{ fontSize: '2rem', color: '#FFD700' }} /> */}
        <Stack sx={{ flex: 1 }}>
          <Typography
            level='h3'
            sx={{ fontWeight: 'lg', color: 'text.primary' }}
          >
            {t('overview.title')}
          </Typography>
          <Typography level='body-sm' sx={{ color: 'text.secondary' }}>
            {t('overview.subtitle')}
          </Typography>
        </Stack>
      </Box>

      {/* Upgrade Card - Only show if user is not a Plus member */}
      {userProfile && !isPlusAccount(userProfile) && (
        <Box sx={{ mb: 3 }}>
          <Card
            variant='outlined'
            sx={{
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
              border: 'none',
              color: 'white',
              '&:hover': {
                boxShadow: 'xl',
                transform: 'translateY(-3px)',
              },
            }}
            onClick={() => navigate('/settings/account')}
          >
            <CardContent sx={{ p: { xs: 1.5, md: 3 } }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: { xs: 1.5, md: 2 },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 1, md: 3 },
                    width: { xs: '100%', md: 'auto' },
                  }}
                >
                  <Avatar
                    sx={{
                      '--Avatar-size': { xs: '36px', md: '60px' },
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Star
                      sx={{ fontSize: { xs: 18, md: 30 }, color: 'white' }}
                    />
                  </Avatar>
                  <Box>
                    <Typography
                      level='title-lg'
                      sx={{
                        color: 'white',
                        mb: { xs: 0.25, md: 0.5 },
                        fontWeight: 'bold',
                        fontSize: { xs: '0.95rem', md: '1.25rem' },
                      }}
                    >
                      Upgrade to Plus
                    </Typography>
                    <Typography
                      level='body-md'
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        mb: { xs: 0.5, md: 1 },
                        fontSize: { xs: '0.75rem', md: '1rem' },
                        lineHeight: { xs: 1.3, md: 1.5 },
                      }}
                    >
                      Unlock powerful features to enhance your productivity
                    </Typography>
                    <Box
                      sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexWrap: 'wrap',
                        gap: 1,
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      <span>• Rich text descriptions</span>
                      <span>• Task notifications</span>
                      <span>• API integrations</span>
                      <span>• Advanced automation</span>
                    </Box>
                  </Box>
                </Box>
                <Button
                  variant='solid'
                  size='sm'
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    px: { xs: 1.5, md: 3 },
                    py: { xs: 0.5, md: 1.5 },
                    fontWeight: 'bold',
                    minWidth: { xs: '80px', md: '120px' },
                    width: { xs: '100%', md: 'auto' },
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.05)',
                    },
                  }}
                  onClick={e => {
                    e.stopPropagation()
                    navigate('/settings/account')
                  }}
                >
                  Upgrade Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      <Box sx={{ mx: 'auto' }}>
        <List
          sx={{
            '--List-gap': '0px',
            '--ListItem-paddingY': '16px',
            '--ListItem-paddingX': '20px',
          }}
        >
          {getAvailableSettings().map((setting, index) => (
            <ListItem key={setting.id} sx={{ p: 0 }}>
              <ListItemButton
                onClick={() => handleCardClick(setting.id)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'background.level1',
                  },
                  py: 2.5,
                  px: 3,
                  borderRadius: 'lg',
                  mb: 1,
                }}
              >
                <ListItemDecorator>
                  <Avatar
                    variant='soft'
                    color='neutral'
                    sx={{ '--Avatar-size': '48px' }}
                  >
                    {setting.icon}
                  </Avatar>
                </ListItemDecorator>
                <ListItemContent sx={{ ml: 2 }}>
                  <Typography
                    level='title-md'
                    sx={{ mb: 0.5, fontWeight: 'lg' }}
                  >
                    {setting.title}
                  </Typography>
                  <Typography
                    level='body-sm'
                    color='neutral'
                    sx={{ lineHeight: 1.4 }}
                  >
                    {setting.description}
                  </Typography>
                </ListItemContent>
                <ChevronRight
                  sx={{ color: 'text.tertiary', fontSize: '20px' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default SettingsOverview
