import { Box, Button, CircularProgress, Container } from '@mui/joy'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../../Logo'
import { networkManager } from '../../hooks/NetworkManager'

const LoadingComponent = () => {
  const { t } = useTranslation(['common'])
  const [message, setMessage] = useState(t('status.loading'))
  const [subMessage, setSubMessage] = useState('')
  const [isOnline, setIsOnline] = useState(networkManager.isOnline)

  useEffect(() => {
    setMessage(t('status.loading'))
  }, [t])

  useEffect(() => {
    if (!isOnline) {
      setMessage(t('status.offline'))
      setSubMessage(t('status.offlineDescription'))
    }
  }, [isOnline, t])
  useEffect(() => {
    networkManager.registerNetworkListener(isOnline => setIsOnline(isOnline))

    // if loading took more than 5 seconds update submessage to mention there might be an error:
    const timeout = setTimeout(() => {
      if (networkManager.isOnline) {
        setSubMessage(t('status.delayed'))
      }
    }, 5000)
    return () => clearTimeout(timeout)
  }, [t])

  return (
    <Container className='flex h-full items-center justify-center'>
      <Box
        className='flex flex-col items-center justify-center'
        sx={{
          minHeight: '80vh',
        }}
      >
        <CircularProgress
          color='success'
          determinate={!isOnline}
          sx={{ '--CircularProgress-size': '200px' }}
        >
          <Logo />
        </CircularProgress>
        <Box
          className='flex items-center gap-2'
          sx={{
            fontWeight: 700,
            fontSize: 24,
            mt: 2,
          }}
        >
          {message}
        </Box>
        <Typography level='h2' fontWeight={500} textAlign={'center'}>
          {subMessage}
        </Typography>
        <Button
          variant='outlined'
          color='primary'
          sx={{ mt: 4 }}
          onClick={() => {
            window.location.href = '/' // navigate back to the home page
          }}
        >
          {t('actions.navigateBack')}
        </Button>
      </Box>
    </Container>
  )
}

export default LoadingComponent
