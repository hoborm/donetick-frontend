const de = {
  common: {
    actions: {
      save: 'Speichern',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      clone: 'Duplizieren',
      view: 'Ansehen',
      archive: 'Archivieren',
      unarchive: 'Wiederherstellen',
      login: 'Anmelden',
      logout: 'Abmelden',
      signup: 'Registrieren',
      backToLogin: 'Zurück zur Anmeldung',
      continue: 'Weiter',
      continueAs: 'Weiter als {{name}}',
      verifyAndSignIn: 'Prüfen und anmelden',
      changePhoto: 'Foto ändern',
      navigateBack: 'Zurück',
    },
    labels: {
      username: 'Benutzername',
      email: 'E-Mail',
      emailAddress: 'E-Mail-Adresse',
      password: 'Passwort',
      displayName: 'Anzeigename',
      timezone: 'Zeitzone',
      verificationCode: 'Bestätigungscode',
      backupCode: 'Backup-Code',
      points: 'Punkte',
      tasks: 'Aufgaben',
    },
    placeholders: {
      search: 'Suchen',
      enterDisplayName: 'Anzeigename eingeben',
      selectTimezone: 'Zeitzone auswählen',
    },
    status: {
      loading: 'Lädt...',
      offline: 'Du bist offline',
      offlineDescription:
        'Das ist offline nicht verfügbar. Bitte prüfe deine Internetverbindung und versuche es erneut.',
      delayed:
        'Das dauert länger als üblich. Möglicherweise gibt es ein Problem.',
      noDataAvailable: 'Keine Daten verfügbar',
      anyone: 'Jede Person',
      unknown: 'Unbekannt',
      unknownUser: 'Unbekannter Benutzer',
      assignedToOther: 'Jemand anderem zugewiesen',
      smartFilter: 'Smarter Filter',
    },
    legal: {
      privacyPolicy: 'Datenschutzerklärung',
      termsOfUse: 'Nutzungsbedingungen',
      termsOfService: 'AGB',
    },
    calendar: {
      today: 'Heute',
      tomorrow: 'Morgen',
      yesterday: 'Gestern',
      weekend: 'Wochenende',
      nextWeek: 'Nächste Woche',
      removeDueDate: 'Fälligkeitsdatum entfernen',
      tasksForDate: 'Aufgaben für {{date}}',
    },
    notifications: {
      titles: {
        error: 'Fehler',
        success: 'Erfolg',
        warning: 'Warnung',
        info: 'Information',
        undo: 'Erfolgreich rückgängig gemacht',
        custom: 'Benachrichtigung',
      },
    },
  },
  navigation: {
    allTasks: 'Alle Aufgaben',
    archived: 'Archiviert',
    things: 'Dinge',
    labels: 'Labels',
    projects: 'Projekte',
    filters: 'Filter',
    activities: 'Aktivitäten',
    points: 'Punkte',
    settings: 'Einstellungen',
    back: 'Zurück',
    backToCalendar: 'Zurück zum Kalender',
  },
  auth: {
    subtitle: 'Melde dich an, um fortzufahren',
    signupSubtitle: 'Erstelle ein Konto, um loszulegen!',
    forgotPasswordSubtitle:
      'Gib deine E-Mail-Adresse ein und wir senden dir einen Link, um wieder auf dein Konto zuzugreifen.',
    forgotPasswordConfirmation:
      'Falls zu der eingegebenen E-Mail-Adresse ein Konto existiert, erhältst du eine E-Mail mit Anweisungen zum Zurücksetzen deines Passworts.',
    welcomeBack: 'Willkommen zurück, {{name}}',
    subAccountBadge: '(Unterkonto)',
    tabs: {
      primary: 'Hauptkonto',
      sub: 'Unterkonto',
    },
    fields: {
      primaryAccountUsername: 'Benutzername des Hauptkontos',
      subAccountUsername: 'Benutzername des Unterkontos',
    },
    placeholders: {
      primaryAccountUsername: 'Benutzername des Hauptkontos eingeben',
      subAccountUsername: 'Name des Unterkontos eingeben',
      passwordRange: 'Passwort eingeben (8-64 Zeichen)',
      enterEmailAddress: 'E-Mail-Adresse eingeben',
      verificationCode: '6-stelligen Code eingeben',
      backupCode: 'Backup-Code eingeben',
    },
    actions: {
      signIn: 'Anmelden',
      signInSubAccount: 'Als Unterkonto anmelden',
      forgotPassword: 'Passwort vergessen?',
      createAccount: 'Neues Konto erstellen',
      continueWithGoogle: 'Mit Google fortfahren',
      continueWithApple: 'Mit Apple fortfahren',
      continueWithProvider: 'Mit {{provider}} fortfahren',
      resetPassword: 'Passwort zurücksetzen',
      goToLogin: 'Zur Anmeldung',
      useBackupCode:
        'Kein Zugriff auf die Authenticator-App? Backup-Code verwenden',
      useAuthenticatorApp: 'Stattdessen die Authenticator-App verwenden',
    },
    messages: {
      agreement:
        'Mit der Registrierung stimmst du unseren Nutzungsbedingungen und unserer Datenschutzerklärung zu',
    },
    errors: {
      validationTitle: 'Validierungsfehler',
      loginFailedTitle: 'Anmeldung fehlgeschlagen',
      loginFailedMessage: 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.',
      usernameRequired: 'Benutzername ist erforderlich',
      passwordRequired: 'Passwort ist erforderlich',
      primaryUsernameRequired:
        'Für die Anmeldung des Unterkontos ist der Benutzername des Hauptkontos erforderlich',
      subAccountNameRequired:
        'Für die Anmeldung des Unterkontos ist der Name des Unterkontos erforderlich',
      googleLoginFailedTitle: 'Google-Anmeldung fehlgeschlagen',
      googleLoginFailedMessage:
        'Die Anmeldung mit Google war nicht erfolgreich. Bitte versuche es erneut.',
      appleLoginFailedTitle: 'Apple-Anmeldung fehlgeschlagen',
      appleLoginFailedMessage:
        'Die Anmeldung mit Apple war nicht erfolgreich. Bitte versuche es erneut.',
      oauthErrorTitle: 'OAuth-Fehler',
      oauthBrowserError: 'Der Anmeldebrowser konnte nicht geöffnet werden',
      twoFactorFailedTitle:
        'Zwei-Faktor-Authentifizierung fehlgeschlagen',
      signupFailedTitle: 'Registrierung fehlgeschlagen',
      signupDisabled: 'Registrierung ist deaktiviert. Bitte kontaktiere den Admin.',
      signupGeneric: 'Bei der Registrierung ist ein Fehler aufgetreten',
      usernameMin: 'Der Benutzername muss mindestens 4 Zeichen lang sein',
      invalidEmail: 'Ungültige E-Mail-Adresse',
      passwordLength: 'Das Passwort muss zwischen 8 und 64 Zeichen lang sein',
      displayNameRequired: 'Anzeigename ist erforderlich',
      displayNamePattern:
        'Der Anzeigename darf nur Buchstaben und Zahlen enthalten',
      usernamePattern:
        'Der Benutzername darf nur Kleinbuchstaben, Punkt und Bindestrich enthalten',
      resetEmailSentTitle: 'E-Mail zum Zurücksetzen gesendet',
      resetEmailSentMessage:
        'Prüfe deine E-Mails für Anweisungen zum Zurücksetzen des Passworts',
      resetFailedTitle: 'Zurücksetzen fehlgeschlagen',
      resetFailedMessage:
        'Die E-Mail zum Zurücksetzen konnte nicht gesendet werden. Bitte versuche es später erneut.',
      emailRequired: 'E-Mail ist erforderlich',
      validEmail: 'Bitte gib eine gültige E-Mail-Adresse ein',
    },
    mfa: {
      title: 'Zwei-Faktor-Authentifizierung',
      instruction:
        'Gib den Bestätigungscode aus deiner Authenticator-App ein',
      invalidCode:
        'Ungültiger Bestätigungscode. Bitte versuche es erneut.',
      missingCode: 'Bitte gib einen Bestätigungscode ein',
      verifyFailed:
        'Der Code konnte nicht geprüft werden. Bitte versuche es erneut.',
      helpText:
        'Probleme? Stelle sicher, dass deine Authenticator-App synchronisiert ist, und versuche es erneut. Jeder Backup-Code kann nur einmal verwendet werden.',
    },
  },
  settings: {
    overview: {
      title: 'Einstellungen',
      subtitle:
        'Passe dein Erlebnis an und verwalte deine Kontoeinstellungen',
      cards: {
        profile: {
          title: 'Profileinstellungen',
          description:
            'Aktualisiere dein Profil, Foto, deinen Anzeigenamen und die Zeitzone.',
        },
        circle: {
          title: 'Kreiseinstellungen',
          description:
            'Verwalte deinen Kreis, lade Mitglieder ein und bearbeite Anfragen.',
        },
        account: {
          title: 'Kontoeinstellungen',
          description:
            'Verwalte dein Abo, ändere dein Passwort und lösche dein Konto.',
        },
        subaccounts: {
          title: 'Verwaltete Konten',
          description:
            'Erstelle und verwalte Unterkonten, die sich anmelden und Aufgaben erledigen können.',
        },
        notifications: {
          title: 'Benachrichtigungen',
          description:
            'Konfiguriere Push-Benachrichtigungen, E-Mail-Hinweise und Benachrichtigungsziele.',
        },
        mfa: {
          title: 'Mehr-Faktor-Authentifizierung',
          description:
            'Füge mit MFA über Authenticator-Apps eine zusätzliche Sicherheitsebene hinzu.',
        },
        apitokens: {
          title: 'API-Tokens',
          description:
            'Erstelle und verwalte Zugriffstokens für Integrationen und API-Zugriff.',
        },
        storage: {
          title: 'Speichereinstellungen',
          description:
            'Sichere und stelle Daten wieder her und verwalte lokale Speicheroptionen.',
        },
        sidepanel: {
          title: 'Seitenleiste anpassen',
          description:
            'Passe das Layout und die Sichtbarkeit von Karten in der Seitenleiste an.',
        },
        theme: {
          title: 'Design',
          description:
            'Wähle dein bevorzugtes Design und konfiguriere Hell- und Dunkelmodus.',
        },
        language: {
          title: 'Sprache',
          description:
            'Wähle die Sprache, die auf diesem Gerät in der App verwendet wird.',
        },
        advanced: {
          title: 'Erweiterte Einstellungen',
          description:
            'Konfiguriere Webhooks, Echtzeit-Updates und weitere fortgeschrittene Funktionen.',
        },
        developer: {
          title: 'Entwicklereinstellungen',
          description:
            'Zeige technische Informationen zu Tokens, SSE-Verbindungen und Debug-Daten an.',
        },
      },
    },
    pages: {
      profile: {
        title: 'Profileinstellungen',
      },
      circle: {
        title: 'Kreiseinstellungen',
      },
      account: {
        title: 'Kontoeinstellungen',
      },
      managedAccounts: {
        title: 'Verwaltete Konten',
      },
      subAccountManagement: {
        title: 'Unterkonten verwalten',
      },
      notifications: {
        title: 'Benachrichtigungseinstellungen',
      },
      mfa: {
        title: 'Mehr-Faktor-Authentifizierung',
      },
      apiTokens: {
        title: 'API-Tokens',
      },
      storage: {
        title: 'Speichereinstellungen',
      },
      sidepanel: {
        title: 'Seitenleiste anpassen',
      },
      theme: {
        title: 'Design',
      },
      language: {
        title: 'Sprache',
      },
      advanced: {
        title: 'Erweiterte Einstellungen',
      },
      developer: {
        title: 'Entwicklereinstellungen',
      },
    },
    theme: {
      description:
        'Lege fest, wie die App für dich aussieht. Wähle ein festes Design oder synchronisiere mit deinem System.',
      modeLabel: 'Designmodus',
      light: 'Hell',
      dark: 'Dunkel',
      system: 'System',
    },
    profile: {
      description: 'Aktualisiere deinen Anzeigenamen und dein Profilfoto.',
      photoUpdatedTitle: 'Foto aktualisiert',
      photoUpdatedMessage: 'Dein Profilfoto wurde erfolgreich aktualisiert.',
      uploadFailedTitle: 'Upload fehlgeschlagen',
      uploadFailedMessage:
        'Dein Foto konnte nicht hochgeladen werden. Bitte versuche es erneut.',
      profileUpdatedTitle: 'Profil aktualisiert',
      profileUpdatedMessage:
        'Deine Profilinformationen wurden erfolgreich gespeichert.',
      updateFailedTitle: 'Aktualisierung fehlgeschlagen',
      updateFailedMessage:
        'Dein Profil konnte nicht aktualisiert werden. Bitte prüfe deine Verbindung und versuche es erneut.',
    },
    language: {
      description:
        'Wähle die Sprache der App. Diese Einstellung wird nur auf diesem Gerät gespeichert.',
      fieldLabel: 'App-Sprache',
      options: {
        en: 'Englisch',
        de: 'Deutsch',
      },
    },
  },
  chores: {
    due: {
      noDueDate: 'Kein Fälligkeitsdatum',
      dueRelative: 'Fällig {{when}}',
      overdueRelative: 'Überfällig {{when}}',
      overdueDay: 'Überfällig {{day}}',
    },
    frequency: {
      once: 'Einmal',
      trigger: 'Auslöser',
      daily: 'Täglich',
      adaptive: 'Adaptiv',
      weekly: 'Wöchentlich',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      dailyExcept: 'Täglich außer {{days}}',
      monthlyExcept: '{{label}} außer {{months}}',
      dayOfMonths: '{{day}} von {{months}}',
      everyUnit: 'Alle {{count}} {{unit}}',
      units: {
        day: 'Tag',
        days: 'Tage',
        week: 'Woche',
        weeks: 'Wochen',
        month: 'Monat',
        months: 'Monate',
        year: 'Jahr',
        years: 'Jahre',
      },
    },
    actions: {
      completeWithNote: 'Mit Notiz abschließen',
      completeInPast: 'In der Vergangenheit abschließen',
      skipToNextDueDate: 'Zum nächsten Fälligkeitsdatum überspringen',
      delegate: 'An jemand anderen delegieren',
      sendNudge: 'Erinnerung senden',
      history: 'Verlauf',
      changeDueDate: 'Fälligkeitsdatum ändern',
      writeToNfc: 'Auf NFC schreiben',
    },
    labels: {
      calendarOverview: 'Kalenderübersicht',
      highPriority: 'Hohe Priorität',
      mediumPriority: 'Mittlere Priorität',
      lowPriority: 'Niedrige Priorität',
      lowestPriority: 'Niedrigste Priorität',
      noPriority: 'Keine Priorität',
      noTasksForDate: 'Für dieses Datum sind keine Aufgaben geplant',
    },
    messages: {
      serverUnavailableTitle: 'Keine Verbindung zum Server möglich',
      serverUnavailableDescription:
        'Der Server ist aktuell nicht erreichbar. Bitte prüfe deine Verbindung und versuche es erneut.',
    },
  },
  user: {
    activitiesTimeline: 'Aktivitätsverlauf',
    pointsWithCount: '{{count}} Punkte',
  },
}

export default de
