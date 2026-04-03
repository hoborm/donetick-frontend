import { Security, Smartphone } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Input,
  Link,
  ModalClose,
  Stack,
  Typography,
} from '@mui/joy'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useResponsiveModal } from '../../hooks/useResponsiveModal'
import { VerifyMFA } from '../../utils/Fetcher'

const MFAVerificationModal = ({
  open,
  onClose,
  sessionToken,
  onSuccess,
  onError,
}) => {
  const { t } = useTranslation(['auth', 'common'])
  const [verificationCode, setVerificationCode] = useState('')
  const [isBackupCode, setIsBackupCode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { ResponsiveModal } = useResponsiveModal()
  const handleVerify = async () => {
    if (!verificationCode.trim()) {
      setError(t('auth:mfa.missingCode'))
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await VerifyMFA(sessionToken, verificationCode)

      if (response.ok) {
        const data = await response.json()
        onSuccess(data)
      } else {
        const errorData = await response.json()
        setError(errorData.message || t('auth:mfa.invalidCode'))
      }
    } catch (error) {
      setError(t('auth:mfa.verifyFailed'))
      console.error('MFA verification error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setVerificationCode('')
    setIsBackupCode(false)
    setError('')
    setLoading(false)
    onClose()
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter' && !loading) {
      handleVerify()
    }
  }

  return (
    <ResponsiveModal
      open={open}
      onClose={handleClose}
      size='lg'
      fullWidth={true}
      title={t('auth:mfa.title')}
    >
      <ModalClose />

      <Box className='mb-4 text-center'>
        <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography level='body-md' sx={{ color: 'text.secondary' }}>
          {t('auth:mfa.instruction')}
        </Typography>
      </Box>

      <Stack spacing={3}>
        <Box>
          <Typography level='body-sm' sx={{ mb: 1 }}>
            {isBackupCode
              ? t('common:labels.backupCode')
              : t('common:labels.verificationCode')}
          </Typography>
          <Input
            placeholder={
              isBackupCode
                ? t('auth:placeholders.backupCode')
                : t('auth:placeholders.verificationCode')
            }
            value={verificationCode}
            onChange={e => setVerificationCode(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{
              textAlign: 'center',
              fontSize: '1.1em',
              letterSpacing: isBackupCode ? 'normal' : '0.1em',
            }}
            slotProps={{
              input: {
                maxLength: isBackupCode ? 50 : 6,
                pattern: isBackupCode ? undefined : '[0-9]*',
              },
            }}
            startDecorator={<Smartphone />}
            autoFocus
          />
        </Box>

        {error && (
          <Alert color='danger' size='sm'>
            {error}
          </Alert>
        )}

        <Button
          color='primary'
          loading={loading}
          onClick={handleVerify}
          disabled={!verificationCode.trim()}
          size='lg'
        >
          {t('common:actions.verifyAndSignIn')}
        </Button>

        <Box className='text-center'>
          <Link
            component='button'
            type='button'
            onClick={() => {
              setIsBackupCode(!isBackupCode)
              setVerificationCode('')
              setError('')
            }}
            sx={{ fontSize: 'sm' }}
          >
            {isBackupCode
              ? t('auth:actions.useAuthenticatorApp')
              : t('auth:actions.useBackupCode')}
          </Link>
        </Box>

        <Alert color='neutral' size='sm'>
          <Typography level='body-xs'>
            {t('auth:mfa.helpText')}
          </Typography>
        </Alert>
      </Stack>
    </ResponsiveModal>
  )
}

export default MFAVerificationModal
