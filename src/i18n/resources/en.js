const en = {
  common: {
    actions: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      clone: 'Clone',
      view: 'View',
      archive: 'Archive',
      unarchive: 'Unarchive',
      login: 'Login',
      logout: 'Logout',
      signup: 'Sign Up',
      backToLogin: 'Back to Login',
      continue: 'Continue',
      continueAs: 'Continue as {{name}}',
      verifyAndSignIn: 'Verify & Sign In',
      changePhoto: 'Change Photo',
      navigateBack: 'Navigate Back',
    },
    labels: {
      username: 'Username',
      email: 'Email',
      emailAddress: 'Email Address',
      password: 'Password',
      displayName: 'Display Name',
      timezone: 'Timezone',
      verificationCode: 'Verification Code',
      backupCode: 'Backup Code',
      points: 'points',
      tasks: 'Tasks',
    },
    placeholders: {
      search: 'Search',
      enterDisplayName: 'Enter your display name',
      selectTimezone: 'Select your timezone',
    },
    status: {
      loading: 'Loading...',
      offline: 'You are offline',
      offlineDescription:
        'This is not available while offline. Please check your internet connection and try again.',
      delayed:
        'This is taking longer than usual. There might be an issue.',
      noDataAvailable: 'No data available',
      anyone: 'Anyone',
      unknown: 'Unknown',
      unknownUser: 'Unknown User',
      assignedToOther: 'Assigned to other',
      smartFilter: 'Smart Filter',
    },
    legal: {
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      termsOfService: 'Terms of Service',
    },
    calendar: {
      today: 'Today',
      tomorrow: 'Tomorrow',
      yesterday: 'Yesterday',
      weekend: 'Weekend',
      nextWeek: 'Next week',
      removeDueDate: 'Remove due date',
      tasksForDate: 'Tasks for {{date}}',
    },
    notifications: {
      titles: {
        error: 'Error',
        success: 'Success',
        warning: 'Warning',
        info: 'Information',
        undo: 'Undone Successfully',
        custom: 'Notification',
      },
    },
  },
  navigation: {
    allTasks: 'All Tasks',
    archived: 'Archived',
    things: 'Things',
    labels: 'Labels',
    projects: 'Projects',
    filters: 'Filters',
    activities: 'Activities',
    points: 'Points',
    settings: 'Settings',
    back: 'Back',
    backToCalendar: 'Back to Calendar',
  },
  auth: {
    subtitle: 'Sign in to your account to continue',
    signupSubtitle: 'Create an account to get started!',
    forgotPasswordSubtitle:
      "Enter your email, and we'll send you a link to get into your account.",
    forgotPasswordConfirmation:
      'If there is an account associated with the email you entered, you will receive an email with instructions on how to reset your password.',
    welcomeBack: 'Welcome back, {{name}}',
    subAccountBadge: '(Sub Account)',
    tabs: {
      primary: 'Primary Account',
      sub: 'Sub Account',
    },
    fields: {
      primaryAccountUsername: 'Primary Account Username',
      subAccountUsername: 'Sub Account Username',
    },
    placeholders: {
      primaryAccountUsername: 'Enter primary account username',
      subAccountUsername: 'Enter sub account name',
      passwordRange: 'Enter password (8-64 characters)',
      enterEmailAddress: 'Enter your email address',
      verificationCode: 'Enter 6-digit code',
      backupCode: 'Enter backup code',
    },
    actions: {
      signIn: 'Sign In',
      signInSubAccount: 'Sign In as Sub Account',
      forgotPassword: 'Forgot password?',
      createAccount: 'Create new account',
      continueWithGoogle: 'Continue with Google',
      continueWithApple: 'Continue with Apple',
      continueWithProvider: 'Continue with {{provider}}',
      resetPassword: 'Reset Password',
      goToLogin: 'Go to Login',
      useBackupCode: "Can't access your authenticator? Use a backup code",
      useAuthenticatorApp: 'Use authenticator app instead',
    },
    messages: {
      agreement:
        'By signing up, you agree to our Terms of Service and Privacy Policy',
    },
    errors: {
      validationTitle: 'Validation Error',
      loginFailedTitle: 'Login Failed',
      loginFailedMessage: 'An error occurred, please try again',
      usernameRequired: 'Username is required',
      passwordRequired: 'Password is required',
      primaryUsernameRequired:
        'Primary username is required for sub account login',
      subAccountNameRequired:
        'Sub account name is required for sub account login',
      googleLoginFailedTitle: 'Google Login Failed',
      googleLoginFailedMessage:
        "Couldn't log in with Google, please try again",
      appleLoginFailedTitle: 'Apple Login Failed',
      appleLoginFailedMessage: "Couldn't log in with Apple, please try again",
      oauthErrorTitle: 'OAuth Error',
      oauthBrowserError: 'Failed to open authentication browser',
      twoFactorFailedTitle: 'Two-Factor Authentication Failed',
      signupFailedTitle: 'Signup Failed',
      signupDisabled: 'Signup disabled, please contact admin',
      signupGeneric: 'An error occurred during signup',
      usernameMin: 'Username must be at least 4 characters',
      invalidEmail: 'Invalid email address',
      passwordLength: 'Password must be between 8 and 64 characters',
      displayNameRequired: 'Display name is required',
      displayNamePattern:
        'Display name can only contain letters and numbers',
      usernamePattern:
        'Username can only contain lowercase letters, dot and dash',
      resetEmailSentTitle: 'Reset Email Sent',
      resetEmailSentMessage:
        'Check your email for password reset instructions',
      resetFailedTitle: 'Reset Failed',
      resetFailedMessage:
        'Failed to send reset email, please try again later',
      emailRequired: 'Email is required',
      validEmail: 'Please enter a valid email address',
    },
    mfa: {
      title: 'Two-Factor Authentication',
      instruction: 'Enter the verification code from your authenticator app',
      invalidCode: 'Invalid verification code. Please try again.',
      missingCode: 'Please enter a verification code',
      verifyFailed: 'Failed to verify code. Please try again.',
      helpText:
        'Having trouble? Make sure your authenticator app is synced and try again. Each backup code can only be used once.',
    },
  },
  settings: {
    overview: {
      title: 'Settings',
      subtitle: 'Customize your experience and manage your account preferences',
      cards: {
        profile: {
          title: 'Profile Settings',
          description:
            'Update your profile information, photo, display name, and timezone preferences.',
        },
        circle: {
          title: 'Circle Settings',
          description:
            'Manage your circle, invite members, and handle join requests.',
        },
        account: {
          title: 'Account Settings',
          description:
            'Manage your subscription, change password, and account deletion options.',
        },
        subaccounts: {
          title: 'Managed Accounts',
          description:
            'Create and manage sub accounts to log in and complete assigned tasks.',
        },
        notifications: {
          title: 'Notifications',
          description:
            'Configure push notifications, email alerts, and notification targets for tasks.',
        },
        mfa: {
          title: 'Multi-Factor Authentication',
          description:
            'Add an extra layer of security with MFA using authenticator apps.',
        },
        apitokens: {
          title: 'API Tokens',
          description:
            'Generate and manage access tokens for third-party integrations and API access.',
        },
        storage: {
          title: 'Storage Settings',
          description:
            'Backup and restore your data, manage local storage and sync preferences.',
        },
        sidepanel: {
          title: 'Sidepanel Customization',
          description:
            'Customize the layout and visibility of cards in the sidepanel interface.',
        },
        theme: {
          title: 'Theme Preferences',
          description:
            'Choose your preferred theme and configure dark/light mode settings.',
        },
        language: {
          title: 'Language',
          description:
            'Choose the language used across the app on this device.',
        },
        advanced: {
          title: 'Advanced Settings',
          description:
            'Configure webhooks, real-time updates, and other advanced features for enhanced productivity.',
        },
        developer: {
          title: 'Developer Settings',
          description:
            'View technical information about authentication tokens, SSE connections, and debug data.',
        },
      },
    },
    pages: {
      profile: {
        title: 'Profile Settings',
      },
      circle: {
        title: 'Circle Settings',
      },
      account: {
        title: 'Account Settings',
      },
      managedAccounts: {
        title: 'Managed Accounts',
      },
      subAccountManagement: {
        title: 'Sub Account Management',
      },
      notifications: {
        title: 'Notification Settings',
      },
      mfa: {
        title: 'Multi-Factor Authentication',
      },
      apiTokens: {
        title: 'API Tokens',
      },
      storage: {
        title: 'Storage Settings',
      },
      sidepanel: {
        title: 'Sidepanel Customization',
      },
      theme: {
        title: 'Theme Preferences',
      },
      language: {
        title: 'Language',
      },
      advanced: {
        title: 'Advanced Settings',
      },
      developer: {
        title: 'Developer Settings',
      },
    },
    theme: {
      description:
        'Choose how the site looks to you. Select a single theme, or sync with your system and automatically switch between day and night themes.',
      modeLabel: 'Theme mode',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    profile: {
      description: 'Update your display name and profile photo.',
      photoUpdatedTitle: 'Photo Updated',
      photoUpdatedMessage: 'Your profile photo has been updated successfully!',
      uploadFailedTitle: 'Upload Failed',
      uploadFailedMessage: 'Failed to upload your photo. Please try again.',
      profileUpdatedTitle: 'Profile Updated',
      profileUpdatedMessage:
        'Your profile information has been saved successfully!',
      updateFailedTitle: 'Update Failed',
      updateFailedMessage:
        'Unable to update your profile. Please check your connection and try again.',
    },
    language: {
      description:
        'Choose the language used throughout the app. This preference is saved on this device.',
      fieldLabel: 'App language',
      options: {
        en: 'English',
        de: 'German',
      },
    },
  },
  chores: {
    due: {
      noDueDate: 'No Due Date',
      dueRelative: 'Due {{when}}',
      overdueRelative: 'Overdue {{when}}',
      overdueDay: 'Overdue {{day}}',
    },
    frequency: {
      once: 'Once',
      trigger: 'Trigger',
      daily: 'Daily',
      adaptive: 'Adaptive',
      weekly: 'Weekly',
      monthly: 'Monthly',
      yearly: 'Yearly',
      dailyExcept: 'Daily except {{days}}',
      monthlyExcept: '{{label}} except {{months}}',
      dayOfMonths: '{{day}} of {{months}}',
      everyUnit: 'Every {{count}} {{unit}}',
      units: {
        day: 'day',
        days: 'days',
        week: 'week',
        weeks: 'weeks',
        month: 'month',
        months: 'months',
        year: 'year',
        years: 'years',
      },
    },
    actions: {
      completeWithNote: 'Complete with note',
      completeInPast: 'Complete in past',
      skipToNextDueDate: 'Skip to next due date',
      delegate: 'Delegate to someone else',
      sendNudge: 'Send nudge',
      history: 'History',
      changeDueDate: 'Change due date',
      writeToNfc: 'Write to NFC',
    },
    labels: {
      calendarOverview: 'Calendar Overview',
      highPriority: 'High Priority',
      mediumPriority: 'Medium Priority',
      lowPriority: 'Low Priority',
      lowestPriority: 'Lowest Priority',
      noPriority: 'No Priority',
      noTasksForDate: 'No tasks scheduled for this date',
    },
    messages: {
      serverUnavailableTitle: 'Unable to communicate with server',
      serverUnavailableDescription:
        'The server is currently unavailable. Please check your connection and try again.',
    },
  },
  user: {
    activitiesTimeline: 'Activities Timeline',
    pointsWithCount: '{{count}} points',
  },
}

export default en
