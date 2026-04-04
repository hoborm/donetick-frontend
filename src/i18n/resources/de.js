const de = {
  common: {
    actions: {
      save: 'Speichern',
      cancel: 'Abbrechen',
      create: 'Erstellen',
      close: 'Schließen',
      remove: 'Entfernen',
      restore: 'Wiederherstellen',
      retry: 'Erneut versuchen',
      approve: 'Genehmigen',
      reject: 'Ablehnen',
      skip: 'Überspringen',
      test: 'Testen',
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
      rememberForFutureTasks: 'Für zukünftige Aufgaben merken',
      registerDevice: 'Gerät registrieren',
      navigateBack: 'Zurück',
      or: 'oder',
    },
    modals: {
      selectUser: 'Benutzer wählen',
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
      task: 'Aufgabe',
      overdue: 'überfällig',
      name: 'Name',
      title: 'Titel',
      description: 'Beschreibung',
      priority: 'Priorität',
      project: 'Projekt',
      defaultProject: 'Standardprojekt',
      taskWindow: 'Aufgabenfenster',
      privacySettings: 'Privatsphäre',
      assignmentStrategy: 'Zuweisungsstrategie',
      labelsLabel: 'Labels',
      subtasks: 'Unteraufgaben',
      assignees: 'Zuständige',
      dueDate: 'Fälligkeitsdatum',
      startDate: 'Startdatum',
      time: 'Uhrzeit',
      hours: 'Stunden',
      pointsLabel: 'Punkte',
      public: 'Öffentlich',
      limited: 'Eingeschränkt',
      field: 'Feld',
      condition: 'Bedingung',
      value: 'Wert',
      preview: 'Vorschau',
      color: 'Farbe',
      currentDevice: 'Aktuelles Gerät',
      allAssignees: 'Alle Zuständigen',
      specificGroup: 'Bestimmte Gruppe',
      chatId: 'Chat-ID',
      userKey: 'Benutzerschlüssel',
      telegramGroupId: 'Telegram-Gruppen-ID',
      stateIs: 'Status ist',
      createAdvancedFilter: 'Erweiterten Filter erstellen',
      editFilter: 'Filter bearbeiten',
      plusFeature: 'Plus-Funktion',
    },
    errors: {
      nameCannotBeEmpty: 'Name darf nicht leer sein',
      duplicateLabel: 'Ein Label mit diesem Namen existiert bereits',
      selectColor: 'Bitte wähle eine Farbe aus',
      unableToSaveLabel:
        'Label konnte nicht gespeichert werden. Bitte versuche es erneut.',
    },
    placeholders: {
      search: 'Suchen',
      enterDisplayName: 'Anzeigename eingeben',
      selectTimezone: 'Zeitzone auswählen',
      hours: 'Stunden',
      telegramGroupId: 'Telegram-Gruppen-ID',
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
    editor: {
      placeholder: 'Beschreibung eingeben...',
      plusFeature: 'Plus-Funktion',
      plusFeatureMessage:
        'Bild-Uploads sind im Basic-Tarif nicht verfügbar. Upgrade auf Plus, um Bilder zu deinen Inhalten hinzuzufügen.',
      storageQuotaExceeded: 'Speicherlimit überschritten',
      storageQuotaExceededMessage:
        'Du hast dein Kontingent für Datei-Uploads überschritten.',
      fileTooLarge: 'Datei zu groß',
      fileTooLargeMessage:
        'Die Datei, die du hochladen möchtest, ist zu groß.',
      upgradeRequired: 'Upgrade erforderlich',
      upgradeRequiredMessage:
        'Bild-Uploads sind nur für Plus-Konten verfügbar.',
      permissionDenied: 'Zugriff verweigert',
      permissionDeniedMessage:
        'Du hast keine Berechtigung, Dateien hochzuladen.',
      uploadFailed: 'Upload fehlgeschlagen',
      uploadFailedMessage: 'Bild konnte nicht hochgeladen werden.',
      processingFailedMessage:
        'Beim Verarbeiten des Bildes ist ein Fehler aufgetreten.',
    },
    subtasks: {
      addSubtask: 'Unteraufgabe hinzufügen',
      addNewSubtask: 'Neue Unteraufgabe hinzufügen...',
      addNewTask: 'Neue Aufgabe hinzufügen...',
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
    status: {
      authenticating: 'Authentifizierung läuft',
      pleaseWait: 'Bitte warten',
      unknownProvider: 'Unbekannter Authentifizierungsanbieter',
      contactSupport: 'Bitte kontaktiere den Support',
      failed: 'Authentifizierung fehlgeschlagen',
      stateMismatch: 'Der Status stimmt nicht überein',
      tryAgain: 'Bitte versuche es erneut',
      passwordUpdatedRedirect:
        'Dein Passwort wurde erfolgreich aktualisiert. Weiterleitung zur Anmeldung...',
      passwordUpdateFailed: 'Passwortaktualisierung fehlgeschlagen',
      passwordUpdateFailedMessage:
        'Passwort konnte nicht aktualisiert werden. Bitte versuche es später erneut.',
      enterNewPassword: 'Bitte gib unten dein neues Passwort ein',
      savePassword: 'Passwort speichern',
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
          title: 'Kreis-Einstellungen',
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
        title: 'Kreis-Einstellungen',
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
    sidepanel: {
      heading: 'Karten der Seitenleiste anpassen',
      description:
        'Wähle aus, welche Karten in der Seitenleiste sichtbar sind, und ordne sie passend zu deinem Ablauf neu an.',
      reset: 'Auf Standard zurücksetzen',
      resetHelp:
        'Stellt die empfohlene Kartenreihenfolge und Sichtbarkeit wieder her.',
      cards: {
        welcome: {
          title: 'Benutzerwechsel',
          description:
            'Ermöglicht Admins und Managern, Aufgaben aus Sicht anderer Benutzer anzusehen.',
        },
        smartInsights: {
          title: 'Smarte Hinweise',
          description:
            'Zeigt schnelle Aktionen basierend auf deinen aktuellen Aufgaben.',
        },
        assignees: {
          title: 'Aufgaben nach Zuständigen',
          description:
            'Gruppiert Aufgaben nach der Person, der sie zugewiesen sind.',
        },
        calendar: {
          title: 'Kalenderansicht',
          description: 'Zeigt Aufgaben in einer Kalenderansicht.',
        },
        activities: {
          title: 'Letzte Aktivitäten',
          description:
            'Zeigt kürzliche Abschlüsse und weitere Aktivitäten an.',
        },
        weeklyGoals: {
          title: 'Wochenziele',
          description:
            'Zeigt den Wochenfortschritt und Abschlussstatistiken deines Kreises.',
        },
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
      title: 'Sprache',
      description:
        'Wähle die Sprache der App. Diese Einstellung wird nur auf diesem Gerät gespeichert.',
      fieldLabel: 'App-Sprache',
      options: {
        en: 'Englisch',
        de: 'Deutsch',
        es: 'Spanisch',
        pt: 'Portugiesisch',
      },
    },
    childAccounts: {
      title: 'Verwaltete Konten',
      accessDeniedTitle: 'Unterkonten verwalten',
      parentOnly: 'Nur Hauptkonten können Unterkonten verwalten.',
      description:
        'Verwalte Unterkonten. Unterkonten können sich anmelden und zugewiesene Aufgaben erledigen.',
      planWarning:
        'Unterkonten sind im Free-Tarif auf 1 begrenzt. Mit Plus sind bis zu 5 Unterkonten möglich.',
      sectionTitle: 'Unterkonten ({{count}})',
      add: 'Unterkonto hinzufügen',
      loading: 'Unterkonten werden geladen...',
      emptyTitle: 'Keine Unterkonten',
      emptyDescription:
        'Erstelle Unterkonten, damit Teammitglieder sich anmelden und ihre zugewiesenen Aufgaben erledigen können.',
      addFirst: 'Erstes Unterkonto hinzufügen',
      username: 'Benutzername: {{username}}',
      created: 'Erstellt: {{date}}',
      changePasswordTitle: 'Passwort ändern',
      deleteAccountTitle: 'Konto löschen',
      howItWorksTitle: 'So funktionieren verwaltete Konten',
      bulletOne:
        'Verwaltete Konten werden vom Hauptkonto erstellt und können von dort gelöscht oder im Passwort zurückgesetzt werden.',
      bulletTwo:
        'Unterkonten können sich mit eigenem Benutzernamen und Passwort anmelden.',
      bulletThree:
        'Verwaltete Konten können Aufgaben erledigen, haben aber eingeschränkte Verwaltungsrechte.',
      bulletFour:
        'Verwaltete Konten werden automatisch deinem Kreis hinzugefügt.',
      createSuccess: 'Unterkonto "{{name}}" wurde erfolgreich erstellt!',
      createFailed: 'Unterkonto konnte nicht erstellt werden: {{message}}',
      updatePasswordSuccess: 'Passwort des Unterkontos erfolgreich aktualisiert',
      updatePasswordFailed:
        'Passwort konnte nicht aktualisiert werden: {{message}}',
      deleteConfirmTitle: 'Unterkonto löschen',
      deleteConfirmMessage:
        'Möchtest du das Unterkonto "{{name}}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
      deleteSuccess: 'Unterkonto "{{name}}" wurde erfolgreich gelöscht',
      deleteFailed: 'Unterkonto konnte nicht gelöscht werden: {{message}}',
    },
    advanced: {
      title: 'Erweiterte Einstellungen',
      loading: 'Lädt...',
      description:
        'Konfiguriere erweiterte Funktionen wie Webhooks und Echtzeit-Updates für mehr Produktivität.',
      webhookTitle: 'Webhook',
      webhookDescription:
        'Webhooks senden Echtzeit-Benachrichtigungen an andere Dienste, wenn Ereignisse in deinem Kreis passieren. Konfiguriere eine Webhook-URL, um Updates zu erhalten.',
      webhookPlanWarning:
        'Webhook-Benachrichtigungen sind im Basic-Tarif nicht verfügbar. Upgrade auf Plus, um Echtzeit-Updates per Webhook zu erhalten.',
      enableWebhook: 'Webhook aktivieren',
      enableWebhookHelper:
        'Webhook-Benachrichtigungen für Aufgaben- und Dinge-Updates aktivieren.',
      webhookUrl: 'Webhook-URL',
      webhookSaved: 'Webhook-URL erfolgreich aktualisiert',
      webhookSaveFailed: 'Webhook-URL konnte nicht aktualisiert werden',
      realtimeTitle: 'Echtzeit-Updates',
      realtimeSummary:
        'Erhalte sofortige Benachrichtigungen, wenn Aufgaben aktualisiert werden',
      enableRealtime: 'Echtzeit-Updates aktivieren',
      realtimeUnavailable:
        'Echtzeit-Updates sind im Basic-Tarif nicht verfügbar. Upgrade auf Plus, um sofortige Benachrichtigungen bei Aufgabenänderungen zu erhalten.',
      realtimeDisabled:
        'Echtzeit-Updates sind deaktiviert. Aktiviere sie, um Live-Änderungen zu sehen, wenn du oder andere Mitglieder Aufgaben erledigen, überspringen oder ändern.',
      realtimeConnected:
        'Echtzeit-Updates funktionieren. Du siehst Live-Änderungen, wenn du oder andere Mitglieder Aufgaben erledigen, überspringen oder ändern.',
      realtimeConnecting: 'Verbindung zu Echtzeit-Updates wird hergestellt...',
      realtimeError:
        'Echtzeit-Updates sind aktiviert, funktionieren aber nicht: {{error}}',
      realtimeEnabledNotConnected:
        'Echtzeit-Updates sind aktiviert, aber derzeit nicht verbunden.',
      sseTitle: 'Echtzeit-Updates (SSE)',
      sseSummary:
        'Erhalte sofortige Benachrichtigungen per Server-Sent Events',
      enableSse: 'Echtzeit-Updates (SSE) aktivieren',
      sseUnavailable:
        'Echtzeit-Updates (SSE) sind im Basic-Tarif nicht verfügbar. Upgrade auf Plus, um sofortige Benachrichtigungen bei Aufgabenänderungen zu erhalten.',
      sseDisabled:
        'Echtzeit-Updates (SSE) sind deaktiviert. Aktiviere sie, um Live-Änderungen zu sehen, wenn du oder andere Mitglieder Aufgaben erledigen, überspringen oder ändern.',
      sseConnected:
        'Echtzeit-Updates (SSE) funktionieren. Du siehst Live-Änderungen, wenn du oder andere Mitglieder Aufgaben erledigen, überspringen oder ändern.',
      sseConnecting:
        'Verbindung zu Echtzeit-Updates (SSE) wird hergestellt...',
      sseError:
        'Echtzeit-Updates (SSE) sind aktiviert, funktionieren aber nicht: {{error}}',
      sseEnabledNotConnected:
        'Echtzeit-Updates (SSE) sind aktiviert, aber derzeit nicht verbunden.',
      status: 'Status:',
      connection: {
        connected: 'Verbunden',
        connecting: 'Verbinde...',
        disconnected: 'Getrennt',
        tooltipBase: 'Echtzeit-Updates (SSE): {{status}}',
        tooltipError: 'Echtzeit-Updates (SSE): {{status}} - {{error}}',
        tooltipJoinCircle:
          'Echtzeit-Updates (SSE): {{status}} - Tritt einem Kreis bei, um Echtzeit-Updates zu aktivieren',
      },
      on: 'An',
      off: 'Aus',
      webhookIntegration: 'Webhook-Integration',
      realtimeSectionDescription:
        'Lege fest, wie du Live-Updates erhältst, wenn sich Aufgaben und Aktivitäten in deinem Kreis ändern.',
    },
    account: {
      description:
        'Ändere deine Kontoeinstellungen, deinen Abostatus oder dein Passwort.',
      accountType: 'Kontotyp',
      loading: 'Lädt...',
      plus: 'Plus',
      free: 'Kostenlos',
      activePlan:
        'Du bist derzeit im Plus-Tarif. Dein Abo verlängert sich am {{date}}.',
      cancelledPlan:
        'Du hast dein Abo gekündigt. Dein Konto wird am {{date}} auf den Free-Tarif umgestellt.',
      freePlan:
        'Du nutzt derzeit den Free-Tarif. Upgrade auf Plus, um weitere Funktionen freizuschalten.',
      upgrade: 'Upgrade',
      password: 'Passwort',
      changePassword: 'Passwort ändern',
      dangerZone: 'Gefahrenbereich',
      dangerDescription:
        'Sobald du dein Konto löschst, gibt es kein Zurück mehr. Bitte sei dir sicher.',
      deleteAccount: 'Konto löschen',
      purchaseSuccess:
        'Kauf erfolgreich! Bitte starte die App neu, um Plus-Funktionen zu nutzen.',
      purchaseNetwork:
        'Verbindungsproblem mit dem Store. Bitte prüfe dein Netzwerk und versuche es erneut.',
      purchaseNotAllowed:
        'Käufe sind auf diesem Gerät nicht erlaubt. Bitte prüfe deine Geräteeinschränkungen.',
      purchaseUnavailable:
        'Dieses Abo ist nicht verfügbar. Bitte versuche es später erneut.',
      purchaseProcessed:
        'Dieser Kauf wurde bereits verarbeitet. Wenn du glaubst, dass das ein Fehler ist, kontaktiere bitte den Support.',
      purchaseReceiptMissing:
        'Kaufbeleg fehlt. Bitte versuche den Kauf erneut.',
      purchasePending:
        'Die Zahlung wartet auf Freigabe. Du erhältst Zugriff, sobald sie bestätigt wurde.',
      purchaseFailed:
        'Kauf fehlgeschlagen: {{message}}. Bitte versuche es erneut oder kontaktiere den Support.',
      passwordChanged: 'Passwort erfolgreich geändert',
      passwordChangeFailed: 'Passwortänderung fehlgeschlagen',
      subscriptionCancelled: 'Abo gekündigt',
      subscriptionCancelFailed: 'Abo konnte nicht gekündigt werden',
    },
    backup: {
      title: 'Backup & Wiederherstellung',
      createTab: 'Backup erstellen',
      restoreTab: 'Backup wiederherstellen',
      createDescription:
        'Erstelle ein verschlüsseltes Backup deiner Daten. Es enthält Aufgaben, Verlauf, Einstellungen und optional hochgeladene Dateien.',
      encryptionKeyLabel: 'Verschlüsselungsschlüssel *',
      encryptionKeyPlaceholder:
        'Gib einen starken Verschlüsselungsschlüssel ein',
      encryptionKeyHint:
        'Bewahre diesen Schlüssel sicher auf. Du brauchst ihn, um dein Backup wiederherzustellen.',
      encryptionKeyRequired: 'Verschlüsselungsschlüssel ist erforderlich',
      nameLabel: 'Backup-Name (optional)',
      namePlaceholder: 'z. B. wochen-backup',
      includeAssets: 'Hochgeladene Dateien und Assets einschließen',
      createAction: 'Backup erstellen',
      restoreAction: 'Backup wiederherstellen',
      createFailed: 'Backup konnte nicht erstellt werden',
      created: 'Backup wurde erfolgreich erstellt und heruntergeladen',
      restoreFailed: 'Backup konnte nicht wiederhergestellt werden',
      restored:
        'Backup wurde erfolgreich wiederhergestellt. Bitte aktualisiere die Seite.',
      readFailed: 'Backup-Datei konnte nicht gelesen werden',
      fileLabel: 'Backup-Datei *',
      selectFile: 'Bitte wähle eine Backup-Datei aus',
      selectedFile: 'Ausgewählt: {{name}}',
      restoreWarning:
        'Die Wiederherstellung ersetzt alle aktuellen Daten. Diese Aktion kann nicht rückgängig gemacht werden.',
      restoreKeyPlaceholder:
        'Gib den für dieses Backup verwendeten Verschlüsselungsschlüssel ein',
      creating: 'Backup wird erstellt...',
      restoring: 'Backup wird wiederhergestellt...',
    },
    subscription: {
      title: 'Auf Plus upgraden',
      included: 'Was ist enthalten:',
      subscribe: 'Abonnieren',
      footer:
        'Jederzeit kündbar. Keine versteckten Gebühren. Sichere Zahlung über Stripe.',
      unlockFeatures: 'Premium-Funktionen freischalten',
      errorTitle: 'Abo-Fehler',
      errorMessage:
        'Der Abo-Vorgang konnte nicht gestartet werden. Bitte versuche es erneut.',
      features: {
        notifications: 'Aufgabenbenachrichtigungen und Erinnerungen',
        richText: 'Rich-Text-Beschreibungen mit Bild-Uploads',
        thingTriggers: 'Dinge-basierte Aufgabenauslöser',
        apiTokens: 'API-Tokens für Integrationen',
        imageUploads: 'Bild-Uploads in Beschreibungen',
        automation: 'Erweiterte Aufgabenautomatisierung',
      },
    },
    menu: {
      impersonateUser: 'Benutzer imitieren',
      switchUser: 'Benutzer wechseln',
      actAsAnotherUser: 'Als andere Person handeln',
      stopImpersonating: 'Imitierung beenden',
      returnToYourAccount: 'Zu deinem Konto zurückkehren',
      settings: 'Einstellungen',
      accountAndPreferences: 'Konto & Einstellungen',
      invitePeople: 'Personen einladen',
      addMembersToYourCircle: 'Mitglieder zu deinem Kreis hinzufügen',
      sidePanelSettings: 'Seitenleisten-Einstellungen',
      customizeLayoutAndCards: 'Layout und Karten anpassen',
      switchToLight: 'Zu hell wechseln',
      switchToDark: 'Zu dunkel wechseln',
      toggleThemeAppearance: 'Design umschalten',
      impersonating: 'Imitiert',
    },
    nativeCancel: {
      title: 'Abo kündigen',
      description:
        'Um dein Abo zu kündigen, folge bitte den Anweisungen für deine Plattform. Du solltest über dieselbe Plattform kündigen, über die du abonniert hast.',
      iosTitle: 'Für iOS (iPhone/iPad):',
      iosSteps: {
        1: '1. Öffne die Einstellungen-App auf deinem Gerät',
        2: '2. Tippe oben auf dem Bildschirm auf deinen Namen',
        3: '3. Tippe auf Abonnements',
        4: '4. Suche Donetick und tippe darauf',
        5: '5. Tippe auf Abo kündigen',
      },
      iosNote:
        'Wenn du über iOS abonniert hast und die Web- oder Desktop-Version nutzt, musst du wie oben beschrieben über die iOS-Einstellungen kündigen.',
      androidTitle: 'Für Android:',
      androidSteps: {
        1: '1. Öffne die Google Play Store App',
        2: '2. Tippe oben rechts auf das Profilsymbol',
        3: '3. Tippe auf Zahlungen und Abos',
        4: '4. Tippe auf Abonnements',
        5: '5. Suche Donetick und tippe darauf',
        6: '6. Tippe auf Abo kündigen',
      },
      androidNote:
        'Wenn du über Google Play abonniert hast und die Web- oder Desktop-Version nutzt, musst du wie oben beschrieben über Google Play kündigen.',
      webTitle: 'Für Web-/Desktop-Abos:',
      webDescription:
        'Wenn du ursprünglich über unsere Website oder Desktop-App abonniert hast, kannst du dein Abo im Bereich Kontoeinstellungen auf unserer Website mit einem Webbrowser kündigen.',
      webImportant:
        'Du musst dein Abo über dieselbe Plattform kündigen, über die du es ursprünglich abgeschlossen hast. Wenn du über den iOS App Store oder Google Play abonniert hast, musst du über diese ursprüngliche Plattform kündigen.',
      billingPeriod:
        'Dein Abo bleibt bis zum Ende des aktuellen Abrechnungszeitraums aktiv.',
      cancelFromStore: 'Ich kündige über meinen App Store',
      cancelDesktopNow: 'Ich habe über Desktop abonniert - Jetzt kündigen',
    },
    apiTokensPage: {
      heading: 'Zugriffstoken',
      description:
        'Erstelle Tokens für die API, um Dinge, Aufgaben oder Chores zu aktualisieren.',
      plusFeature: 'Plus-Funktion',
      plusDescription:
        'API-Tokens sind im Basic-Tarif nicht verfügbar. Upgrade auf Plus, um API-Tokens für Integrationen und Automatisierung zu erstellen.',
      hideToken: 'Token ausblenden',
      showToken: 'Token anzeigen',
      removeToken: 'Token entfernen',
      removeTokenConfirm:
        'Möchtest du {{name}} wirklich entfernen?',
      removed: 'Entfernt',
      removedMessage: 'API-Token wurde entfernt',
      copied: 'Token in die Zwischenablage kopiert',
      generateNew: 'Neuen Token erzeugen',
      namePrompt:
        'Gib deinem neuen Token einen Namen, an den du dich erinnerst.',
      generateAction: 'Token erzeugen',
    },
    mfaPage: {
      description:
        'Füge deinem Konto mit Multi-Faktor-Authentifizierung (MFA) eine zusätzliche Sicherheitsebene hinzu. Wenn MFA aktiviert ist, benötigst du zusätzlich zum Passwort einen Bestätigungscode aus deiner Authenticator-App.',
      title: 'Zwei-Faktor-Authentifizierung',
      enabled: 'Dein Konto ist mit 2FA geschützt',
      disabled: 'Sichere dein Konto mit einer Authenticator-App',
      enable: 'Aktivieren',
      disable: 'Deaktivieren',
      setupTitle: 'Multi-Faktor-Authentifizierung einrichten',
      step1:
        'Schritt 1: Scanne den QR-Code unten mit deiner Authenticator-App (Google Authenticator, Authy usw.)',
      manualKey: 'Manueller Schlüssel:',
      addedToApp: 'Ich habe das Konto zu meiner App hinzugefügt',
      step2:
        'Schritt 2: Gib den 6-stelligen Bestätigungscode aus deiner Authenticator-App ein',
      verifyEnable: 'Prüfen und aktivieren',
      enabledSuccess: 'MFA erfolgreich aktiviert!',
      backupSaveTitle: 'Speichere diese Backup-Codes an einem sicheren Ort',
      backupSaveDescription:
        'Du kannst diese Codes verwenden, um auf dein Konto zuzugreifen, falls du dein Authenticator-Gerät verlierst. Jeder Code kann nur einmal verwendet werden.',
      savedBackupCodes: 'Ich habe meine Backup-Codes gespeichert',
      disableTitle: 'Multi-Faktor-Authentifizierung deaktivieren',
      disableWarning:
        'Wenn du MFA deaktivierst, ist dein Konto weniger sicher. Möchtest du wirklich fortfahren?',
      disablePrompt:
        'Gib zur Bestätigung einen Bestätigungscode aus deiner Authenticator-App ein:',
      backupCodesTitle: 'Neue Backup-Codes',
      backupCodesWarning:
        'Deine bisherigen Backup-Codes sind jetzt ungültig. Speichere diese neuen Codes an einem sicheren Ort. Jeder Code kann nur einmal verwendet werden.',
      failedQr: 'QR-Code konnte nicht erzeugt werden',
      invalidResponse:
        'Ungültige Serverantwort. QR-Code oder Geheimnis fehlen.',
      endpointMissing:
        'Der MFA-Endpunkt wurde nicht gefunden. Diese Funktion ist möglicherweise noch nicht verfügbar.',
      unauthorized: 'Nicht autorisiert. Bitte melde dich erneut an.',
      serverError: 'Serverfehler. Bitte versuche es später erneut.',
      setupFailed:
        'MFA-Einrichtung fehlgeschlagen ({{status}}). Bitte versuche es erneut.',
      networkError:
        'Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.',
      enabledToast: 'MFA wurde erfolgreich aktiviert!',
      invalidCode: 'Ungültiger Bestätigungscode. Bitte versuche es erneut.',
      confirmFailed:
        'MFA konnte nicht bestätigt werden. Bitte versuche es erneut.',
      disabledToast: 'MFA wurde erfolgreich deaktiviert!',
      disableFailed:
        'MFA konnte nicht deaktiviert werden. Bitte versuche es erneut.',
      backupRegenerated: 'Neue Backup-Codes wurden erzeugt!',
      regenerateFailed:
        'Backup-Codes konnten nicht neu erzeugt werden. Bitte versuche es erneut.',
    },
    developer: {
      title: 'Entwicklereinstellungen',
      description:
        'Zeige technische Informationen zu Authentifizierungs-Token, Benachrichtigungen und Sitzungsstatus für Debugging-Zwecke an.',
      tokenRefreshed: 'Token erfolgreich aktualisiert',
      tokenRefreshFailed: 'Token-Aktualisierung fehlgeschlagen: {{message}}',
      tokenRefreshError: 'Fehler bei der Token-Aktualisierung: {{message}}',
      refreshEndpointSuccess:
        'Refresh-Token-Endpunkt erfolgreich aufgerufen',
      refreshEndpointFailed:
        'Refresh-Token-Endpunkt fehlgeschlagen: {{status}} {{message}}',
      refreshEndpointError:
        'Fehler beim Refresh-Token-Endpunkt: {{message}}',
      notificationsLoaded:
        '{{count}} geplante Benachrichtigungen geladen',
      notificationsLoadError:
        'Fehler beim Laden der Benachrichtigungen: {{message}}',
      authTokens: 'Authentifizierungs-Token',
      refreshTokenAction: 'Token aktualisieren',
      callRefreshEndpoint: 'Refresh-Endpunkt aufrufen',
      accessToken: 'Access Token',
      refreshToken: 'Refresh Token',
      timeLeft: 'Verbleibende Zeit:',
      expires: 'Läuft ab: {{date}}',
      refreshTokenCookie:
        'Refresh Tokens werden auf der Webplattform über HTTP-only-Cookies verwaltet.',
      platformInfo: 'Plattforminformationen',
      platform: 'Plattform:',
      native: 'Nativ',
      web: 'Web',
      scheduledNotifications: 'Geplante lokale Benachrichtigungen',
      refresh: 'Aktualisieren',
      noScheduledNotifications: 'Keine geplanten Benachrichtigungen',
      totalScheduled: 'Insgesamt geplant:',
      noTitle: 'Kein Titel',
      noBody: 'Kein Inhalt',
      pastDue: 'Überfällig',
      choreId: 'Chore-ID: {{id}}',
      sseTitle: 'Server-Sent Events (SSE)',
      connectionStatus: 'Verbindungsstatus',
      unknown: 'Unbekannt',
      error: 'Fehler: {{error}}',
      lastEventReceived: 'Zuletzt empfangenes Ereignis',
      type: 'Typ:',
      received: 'Empfangen: {{date}}',
      notAvailable: 'k. A.',
      timeExpired: 'Abgelaufen',
    },
    storage: {
      title: 'Speichereinstellungen',
      serverUsageTitle: 'Server-Speichernutzung',
      plusFeature: 'Plus-Funktion',
      serverUsageDescription:
        'Das ist der Speicherplatz, den dein Konto auf unseren Servern verwendet, z. B. für Dateien, Bilder und hochgeladene Daten.',
      basicPlanUnavailable:
        'Server-Speicher ist im Basic-Tarif nicht verfügbar. Upgrade auf Plus, um deine Server-Speichernutzung zu sehen.',
      loading: 'Lädt...',
      usedOfTotal:
        '{{used}} MB verwendet / {{total}} MB gesamt ({{percent}}%)',
      experimentalTitle: 'Experimentelle Funktionen',
      comingSoon: 'Bald verfügbar',
      offlineModeTitle: 'Offline-Modus aktivieren',
      offlineModeDescription:
        'Ermöglicht der App, offline zu funktionieren, indem Daten lokal zwischengespeichert werden. Das ist experimentell und kann zu Verlangsamungen führen. Bei Leistungsproblemen solltest du es deaktivieren.',
      offlineModeWarning:
        'Der Offline-Modus ist aktiviert. Wenn die App langsam wird, deaktiviere diese Einstellung.',
      localStorageTitle: '{{platform}} lokaler Speicher und Cache',
      appPlatform: 'App',
      browserPlatform: 'Browser',
      localStorageDescription:
        'Diese Daten werden lokal für schnelleren Zugriff und Offline-Nutzung gespeichert. Das Löschen wirkt sich nicht auf deine Serverdaten aus, kann dich aber abmelden oder Offline-Aufgaben entfernen.',
      clearAllTitle: 'Gesamten lokalen Speicher löschen',
      clearAllMessage:
        'Möchtest du wirklich deinen lokalen Speicher und Cache löschen? Dadurch werden alle Daten in diesem Browser entfernt und du musst dich erneut anmelden.',
      clearAllAction: 'Alles löschen',
      clearAllButton: 'Gesamten lokalen Speicher und Cache löschen',
      clearOfflineTitle: 'Offline-Cache löschen',
      clearOfflineMessage:
        'Möchtest du wirklich nur den Offline-Cache und Offline-Aufgaben löschen?',
      clearOfflineAction: 'Cache löschen',
      clearOfflineButton: 'Offline-Cache und Offline-Aufgaben löschen',
      appPreferencesTitle: 'App-Einstellungen',
      deviceOnly: 'Nur auf diesem Gerät',
      appPreferencesDescription:
        'Diese Einstellungen werden lokal auf deinem Gerät gespeichert. Beim Löschen werden app-spezifische Einstellungen zurückgesetzt und du wirst möglicherweise abgemeldet, deine Serverdaten bleiben aber erhalten.',
      clearPreferencesTitle: 'App-Einstellungen löschen',
      clearPreferencesMessage:
        'Möchtest du wirklich alle App-Einstellungen löschen? Dadurch werden deine App-Einstellungen zurückgesetzt und du musst dich möglicherweise erneut anmelden.',
      clearPreferencesAction: 'Einstellungen löschen',
      clearPreferencesButton: 'App-Einstellungen löschen',
    },
    circlePage: {
      description:
        'Dein Konto wird automatisch mit einem Kreis verbunden, wenn du einen erstellst oder beitrittst. Lade Freunde mit dem Kreis-Code oder Join-Link unten ein. Beitrittsanfragen siehst du ebenfalls hier.',
      partOf: 'Du bist Teil von {{name}}',
      codeIs: 'Dein Kreis-Code ist:',
      copyCode: 'Code kopieren',
      copyLink: 'Link kopieren',
      leaveCircle: 'Kreis verlassen',
      members: 'Kreis-Mitglieder',
      requests: 'Kreis-Anfragen',
      refresh: 'Aktualisieren',
      refreshing: 'Aktualisiere...',
      lastUpdated: 'Zuletzt aktualisiert: {{date}}',
      wantsToJoin: '{{name}} möchte deinem Kreis beitreten.',
      accept: 'Akzeptieren',
      joinPrompt:
        'Möchtest du dem Kreis einer anderen Person beitreten? Bitte sie um ihren Kreis-Code oder Join-Link. Gib den Code unten ein, um beizutreten.',
      enterCode: 'Kreis-Code eingeben:',
      joinCircle: 'Kreis beitreten',
      copyCodeSuccess: 'Code in die Zwischenablage kopiert',
      copyLinkSuccess: 'Link in die Zwischenablage kopiert',
      leaveConfirm: 'Möchtest du deinen Kreis wirklich verlassen?',
      leaveTitle: 'Kreis verlassen',
      leaveSuccess: 'Kreis erfolgreich verlassen',
      leaveFailed: 'Kreis konnte nicht verlassen werden',
      roleUpdateFailed: 'Rolle konnte nicht aktualisiert werden',
      removeMemberTitle: 'Mitglied entfernen',
      removeMemberConfirm:
        'Möchtest du {{name}} wirklich aus deinem Kreis entfernen?',
      removeMemberSuccess: 'Mitglied erfolgreich entfernt',
      acceptTitle: 'Mitgliedsanfrage akzeptieren',
      acceptConfirm:
        'Möchtest du {{name}} (Benutzername: {{username}}) wirklich in deinen Kreis aufnehmen?',
      acceptSuccess: 'Anfrage erfolgreich akzeptiert',
      joinSuccess:
        'Kreis erfolgreich beigetreten. Warte darauf, dass der Kreis-Eigentümer deine Anfrage akzeptiert.',
      alreadyMember: 'Du bist bereits Mitglied dieses Kreises',
      joinFailed: 'Kreis-Beitritt fehlgeschlagen',
      pendingApproval: 'Wartet auf Freigabe',
      joinedOn: 'Beigetreten am {{date}}',
      requestedOn: 'Beitrittsanfrage vom {{date}}',
      roleDescriptions: {
        member: 'Normales Mitglied des Kreises',
        manager:
          'Kann Nutzer impersonieren und Aktionen in ihrem Namen ausführen',
        admin: 'Vollzugriff auf den Kreis',
      },
      newOwner: 'Neue Eigentümerin / Neuer Eigentümer',
    },
    modals: {
      passwordChange: {
        title: 'Passwort ändern',
        intro: 'Bitte gib dein neues Passwort ein.',
        newPassword: 'Neues Passwort',
        confirmPassword: 'Passwort bestätigen',
        mismatch: 'Passwörter stimmen nicht überein',
        min: 'Das Passwort muss mindestens 8 Zeichen lang sein',
        max: 'Das Passwort darf höchstens 64 Zeichen lang sein',
      },
      userDeletion: {
        title: 'Konto löschen',
        warningTitle: 'Konto löschen',
        warningIntro:
          'Diese Aktion kann nicht rückgängig gemacht werden. Beim Löschen deines Kontos werden dauerhaft entfernt:',
        items: {
          profile: 'Dein Benutzerprofil und Authentifizierungsdaten',
          chores: 'Alle deine Aufgaben, der Aufgabenverlauf und Zeiterfassungssitzungen',
          tokens: 'API-Tokens, MFA-Sitzungen und Passwort-Reset-Tokens',
          storage: 'Speicherdateien und Nutzungsdaten',
          points: 'Punkteverlauf und Benachrichtigungen',
          circles: 'Kreis-Mitgliedschaften und Beziehungen',
        },
        passwordPrompt: 'Gib dein Passwort ein, um fortzufahren',
        transferTitle: 'Übertragung des Kreis-Eigentums erforderlich',
        transferIntro:
          'Du besitzt Kreise, die vor dem Löschen übertragen werden müssen. Bitte wähle neue Eigentümer aus:',
        circleLabel: 'Kreis: {{name}}',
        finalTitle: 'Letzte Bestätigung',
        finalPrompt:
          'Bitte gib dein Passwort ein und tippe DELETE, um die Kontolöschung zu bestätigen.',
        finalHint:
          'Nach erfolgreicher Löschung wirst du abgemeldet und zur Login-Seite weitergeleitet.',
        typeDelete: 'Tippe "DELETE" zur Bestätigung',
        checkFailed:
          'Löschvoraussetzungen konnten nicht geprüft werden',
        confirmDelete:
          'Bitte gib dein Passwort ein und tippe DELETE zur Bestätigung',
        deleteFailed: 'Konto konnte nicht gelöscht werden',
      },
    },
  },
  chores: {
    sidepanel: {
      summary: {
        title: 'Übersicht',
        description: 'Das ist eine Zusammenfassung deiner Aufgaben',
        dueToday: 'Heute fällig',
        overdue: 'Überfällig',
      },
      activities: {
        title: 'Letzte Aktivitäten',
        loading: 'Aktivitäten werden geladen...',
        empty: 'Keine aktuellen Aktivitäten',
        unknownChore: 'Unbekannte Aufgabe',
        justNow: 'Gerade eben',
        hoursAgo_one: 'vor {{count}} Std.',
        hoursAgo_other: 'vor {{count}} Std.',
        daysAgo_one: 'vor {{count}} Tag',
        daysAgo_other: 'vor {{count}} Tagen',
        by: 'von',
        points_one: '{{count}} Punkt',
        points_other: '{{count}} Punkte',
        showMore: 'Mehr anzeigen',
        noteTitle: 'Notiz - {{name}}',
        status: {
          started: 'Gestartet',
          done: 'Erledigt',
          late: 'Verspätet',
          skipped: 'Übersprungen',
          pendingApproval: 'Wartet auf Freigabe',
          rejected: 'Abgelehnt',
          completed: 'Abgeschlossen',
        },
      },
      assignees: {
        title: 'Aufgaben nach Zuständigen',
        loading: 'Aufgaben nach Zuständigen werden geladen...',
        empty: 'Keine zugewiesenen Aufgaben gefunden',
        legend: {
          inProgress: 'In Arbeit',
          overdue: 'Überfällig',
          scheduled: 'Geplant',
          pendingReview: 'Wartet auf Prüfung',
        },
      },
      userSwitcher: {
        title: 'Aufgaben ansehen als',
        switchTitle: 'Zur Benutzeransicht wechseln',
        switchDescription:
          'Aufgaben werden so gefiltert, dass nur Zuweisungen für die ausgewählte Person angezeigt werden',
        chooseUser: 'Benutzer wählen',
        changeUser: 'Benutzer ändern',
      },
      notifications: {
        title: 'Benachrichtigungen aktivieren?',
        description:
          'Du musst die Berechtigung für Benachrichtigungen aktivieren. Möchtest du das jetzt tun?',
        enable: 'Ja',
        keepDisabled: 'Nein, deaktiviert lassen',
      },
      insights: {
        title: 'Smarte Einblicke',
        active: 'Aktiv',
        clearHint: 'Klicke auf den aktiven Filter, um ihn zu entfernen',
        description: 'Schnellaktionen basierend auf deinen Aufgaben',
        items: {
          overdue: {
            title: 'Überfällig',
            description_one: '{{count}} Aufgabe ist überfällig',
            description_other: '{{count}} Aufgaben sind überfällig',
          },
          dueToday: {
            title: 'Heute fällig',
            description_one: '{{count}} Aufgabe ist heute fällig',
            description_other: '{{count}} Aufgaben sind heute fällig',
          },
          pendingApproval: {
            title: 'Wartet auf Freigabe',
            description_one: '{{count}} Aufgabe wartet auf Freigabe',
            description_other: '{{count}} Aufgaben warten auf Freigabe',
          },
          dueThisWeek: {
            title: 'Diese Woche fällig',
            description_one:
              '{{count}} Aufgabe ist in den nächsten 7 Tagen fällig',
            description_other:
              '{{count}} Aufgaben sind in den nächsten 7 Tagen fällig',
          },
          highPriority: {
            title: 'Hohe Priorität',
            description_one:
              '{{count}} Aufgabe erfordert sofortige Aufmerksamkeit',
            description_other:
              '{{count}} Aufgaben erfordern sofortige Aufmerksamkeit',
          },
          noDueDate: {
            title: 'Kein Fälligkeitsdatum',
            description_one: '{{count}} Aufgabe braucht eine Frist',
            description_other: '{{count}} Aufgaben brauchen eine Frist',
          },
        },
      },
      multiSelect: {
        showShortcuts: 'Tastenkürzel anzeigen',
        title: 'Mehrfachauswahl-Modus',
        description:
          'Nutze diese Tastenkürzel, um mit mehreren Aufgaben effizienter zu arbeiten:',
        sections: {
          selection: 'Auswahl',
          actions: 'Aktionen',
          interface: 'Oberfläche',
        },
        shortcuts: {
          selectAllVisible: 'Alle sichtbaren Aufgaben auswählen',
          clearOrExit: 'Auswahl leeren oder Mehrfachauswahl beenden',
          markCompleted: 'Ausgewählte Aufgaben als erledigt markieren',
          deleteSelected: 'Ausgewählte Aufgaben löschen',
          quickAdd: 'Neue Aufgabe schnell hinzufügen',
        },
        gotIt: 'Verstanden!',
      },
    },
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
    edit: {
      nameQuestion: 'Wie heißt diese Aufgabe?',
      descriptionQuestion: 'Worum geht es bei dieser Aufgabe?',
      priorityQuestion: 'Wie wichtig ist diese Aufgabe?',
      projectQuestion: 'Zu welchem Projekt gehört diese Aufgabe?',
      labelsQuestion:
        'Dinge, die man sich zu dieser Aufgabe merken oder mit ihr verknüpfen möchte',
      addNewLabel: 'Neues Label hinzufügen',
      whoCanDoTask: 'Wer kann diese Aufgabe erledigen?',
      whoIsAssignedNext: 'Wer ist als Nächstes zugewiesen?',
      noAssigneesAvailable:
        'Noch keine Zuständigen können diese Aufgabe erledigen',
      selectAssignee: 'Wähle eine zuständige Person für diese Aufgabe',
      assignmentStrategyQuestion:
        'Wie soll die nächste zuständige Person ausgewählt werden?',
      triggerDueDateHint:
        'Das Fälligkeitsdatum wird gesetzt, sobald die Auslösebedingung erfüllt ist',
      giveTaskDueDate: 'Dieser Aufgabe ein Fälligkeitsdatum geben',
      dueDateHelper:
        'Die Aufgabe muss bis zu einem bestimmten Zeitpunkt erledigt werden',
      startDateQuestion: 'Wann beginnt diese Aufgabe?',
      nextDueQuestion:
        'Wann ist der nächste erste Zeitpunkt, zu dem diese Aufgabe fällig ist?',
      setSpecificTime: 'Eine bestimmte Uhrzeit festlegen',
      specificTimeHelper:
        'Die Aufgabe ist zur angegebenen Uhrzeit fällig',
      endOfDayHelper:
        'Die Aufgabe ist am Ende des Tages fällig (23:59 Uhr)',
      taskWindowDescription:
        'Lege fest, wann diese Aufgabe erledigt werden kann und wann sie verfällt',
      setEarliestCompletionTime: 'Frühesten Erledigungszeitpunkt festlegen',
      completionWindowHelper:
        'Die Aufgabe kann X Stunden vor dem Fälligkeitsdatum erledigt werden',
      afterDueDate: 'nach dem Fälligkeitsdatum',
      schedulingPreferences: 'Planungseinstellungen',
      schedulingPreferencesQuestion:
        'Wie soll das nächste Fälligkeitsdatum neu geplant werden?',
      rescheduleFromDueDate: 'Vom Fälligkeitsdatum neu planen',
      rescheduleFromCompletionDate: 'Vom Abschlussdatum neu planen',
      rescheduleFromDueDateHelper:
        'Die nächste Aufgabe wird vom ursprünglichen Fälligkeitsdatum aus geplant, auch wenn die vorherige Aufgabe verspätet erledigt wurde',
      rescheduleFromCompletionDateHelper:
        'Die nächste Aufgabe wird vom tatsächlichen Abschlussdatum der vorherigen Aufgabe aus geplant',
      notificationsBasicPlan:
        'Aufgabenbenachrichtigungen sind im Basic-Tarif nicht verfügbar. Upgrade auf Plus, um Erinnerungen zu erhalten, wenn Aufgaben fällig oder erledigt sind.',
      notifyForTask: 'Für diese Aufgabe benachrichtigen',
      notifyForTaskHelper:
        'Wann sollen Benachrichtigungen für diese Aufgabe gesendet werden?',
      notificationSchedule: 'Benachrichtigungsplan',
      whoToNotify: 'Wen benachrichtigen',
      notifyAllAssignees: 'Alle Zuständigen benachrichtigen',
      notifySpecificGroup: 'Eine bestimmte Gruppe benachrichtigen',
      taskSettings: 'Aufgabeneinstellungen',
      pointsHelper:
        'Vergib Punkte für diese Aufgabe und Nutzer erhalten Punkte, wenn sie sie erledigen',
      assignPoints: 'Punkte für die Erledigung vergeben',
      approvalRequirement: 'Freigabe erforderlich',
      requireAdminApproval: 'Admin-Freigabe erforderlich',
      requireAdminApprovalHelper:
        'Diese Aufgabe benötigt eine Freigabe durch einen Admin, bevor sie als erledigt markiert wird',
      privacyQuestion: 'Wer kann diese Aufgabe sehen?',
      privacyPublicHelper: 'Alle in deinem Kreis',
      privacyLimitedHelper:
        'Du und andere Personen, die der Aufgabe zugewiesen sind',
      privacyLimitedDisabled:
        'Keine Zuständigen ausgewählt, die eingeschränkte Option ist deaktiviert',
      createdBy: 'Erstellt von',
      updatedBy: 'Aktualisiert von',
      archive: 'Archivieren',
      unarchive: 'Wiederherstellen',
      validation: {
        nameRequired: 'Name ist erforderlich',
        assigneesRequired: 'Mindestens eine zuständige Person ist erforderlich',
        assignedToRequired: 'Zugewiesen an ist erforderlich',
        invalidFrequency: 'Ungültige Häufigkeit, {{unit}} muss größer als 0 sein',
        selectDayOfWeek: 'Bitte wähle mindestens einen Wochentag aus',
        selectDayOccurrence:
          'Bitte wähle mindestens ein Tagesvorkommen für den Monat aus',
        selectMonth: 'Bitte wähle mindestens einen Monat aus',
        startDateRequired: 'Startdatum ist erforderlich',
        dueDateRequired: 'Fälligkeitsdatum ist erforderlich',
        thingTriggerInvalid: 'Dinge-Auslöser ist ungültig',
        resolveErrors: 'Bitte behebe die folgenden Fehler:',
      },
      assignStrategies: {
        random: 'Zufällig',
        least_assigned: 'Am seltensten zugewiesen',
        least_completed: 'Am seltensten abgeschlossen',
        keep_last_assigned: 'Letzte Zuweisung beibehalten',
        random_except_last_assigned: 'Zufällig außer letzte Zuweisung',
        round_robin: 'Reihum',
        no_assignee: 'Keine zuständige Person',
      },
      saveSuccessTitle: 'Aufgabe gespeichert',
      saveSuccessMessage: 'Deine Aufgabe wurde erfolgreich gespeichert!',
      saveFailedTitle: 'Speichern fehlgeschlagen',
      saveFailedMessage:
        'Die Aufgabe konnte nicht gespeichert werden. Bitte versuche es erneut.',
      deleteTitle: 'Aufgabe löschen',
      deleteMessage:
        'Bist du sicher, dass du diese Aufgabe löschen möchtest?',
      deleteFailedTitle: 'Löschen fehlgeschlagen',
    },
    repeat: {
      repeat: 'Wiederholen',
      repeatTask: 'Diese Aufgabe wiederholen',
      repeatHelper:
        'Ist das etwas, das regelmäßig erledigt werden muss?',
      howOften: 'Wie oft soll es wiederholt werden?',
      repeatOn: 'Wiederholen am',
      timeOfDay: 'Tageszeit',
      every: 'Alle',
      unit: 'Einheit',
      selectAll: 'Alle auswählen',
      unselectAll: 'Auswahl aufheben',
      everyWeek: 'Jede Woche',
      weekOfMonth: 'Woche des Monats',
      everyWeekHelper:
        'Die Aufgabe wiederholt sich jede Woche an den ausgewählten Tagen',
      weekOfMonthHelper:
        'Die Aufgabe wiederholt sich jeden Monat an bestimmten Tagesvorkommen (zum Beispiel 1. Montag oder 3. Freitag)',
      occurrencePrompt:
        'Wähle aus, welche Vorkommen der ausgewählten Tage verwendet werden sollen',
      occurrenceExample:
        'Beispiel: "1. Montag" bedeutet den ersten Montag jedes Monats',
      onThe: 'am',
      ofSelectedMonths: 'der ausgewählten Monate',
      triggerTask: 'Diese Aufgabe anhand eines Gerätezustands auslösen',
      triggerHelper:
        'Soll diese Aufgabe erledigt werden, wenn sich der Zustand eines Dings ändert?',
      plusFeature: 'Plus-Funktion',
      triggerBasicPlan:
        'Dinge-basierte Auslöser sind im Basic-Tarif nicht verfügbar. Upgrade auf Plus, um Aufgaben automatisch auszulösen, wenn sich Gerätezustände ändern.',
      typeMessages: {
        adaptive:
          'Diese Aufgabe wird dynamisch anhand früherer Abschlussdaten geplant.',
        custom:
          'Diese Aufgabe wird anhand einer benutzerdefinierten Häufigkeit geplant.',
      },
      options: {
        custom: 'Benutzerdefiniert',
        interval: 'Intervall',
        days_of_the_week: 'Wochentage',
        day_of_the_month: 'Tag des Monats',
      },
    },
    view: {
      previousNote: 'Vorherige Notiz',
      taskActions: 'Aufgabenaktionen',
      addNote: 'Notiz hinzufügen',
      additionalNotes: 'Zusätzliche Notizen',
      completionNotePlaceholder:
        'Füge eine Notiz zur Erledigung hinzu...',
      setCustomCompletionTime:
        'Benutzerdefinierte Erledigungszeit festlegen',
      markAsDone: 'Als erledigt markieren',
      skipTask: 'Aufgabe überspringen',
      skipTaskConfirm:
        'Bist du sicher, dass du diese Aufgabe überspringen möchtest?',
      availableToCompleteStarting:
        'Kann erledigt werden ab {{date}}',
      pendingApproval: 'Wartet auf Freigabe',
      subtasks: 'Unteraufgaben',
    },
    addTask: {
      title: 'Neue Aufgabe erstellen',
      taskInSentence: 'Aufgabe in einem Satz',
      smartHelp:
        'Mit dieser Funktion kannst du eine Aufgabe einfach durch einen Satz erstellen. Der Satz wird analysiert, um Fälligkeitsdatum, Priorität und Häufigkeit zu erkennen.',
      examples: 'Beispiele',
      priorityExample:
        'Für die höchste Priorität verwende P1, Urgent, Important oder ASAP. Für niedrigere Prioritäten verwende P2, P3 oder P4.',
      dueDateExample:
        'Gib Daten mit Formulierungen wie tomorrow, next week, Monday oder August 1st at 12pm an.',
      frequencyExample:
        'Lege wiederkehrende Aufgaben mit daily, weekly, monthly, yearly oder Mustern wie every Tuesday and Thursday fest.',
      fullTextPlaceholder: 'Gib hier den vollständigen Text ein...',
      description: 'Beschreibung',
      dueDate: 'Fälligkeitsdatum',
      editNotifications: 'Benachrichtigungen bearbeiten',
      noPriority: 'Keine Priorität',
      create: 'Erstellen',
      points: {
        one: '1 Punkt',
        other: '{{count}} Punkte',
      },
    },
    detail: {
      cards: {
        assignment: 'Zuweisung',
        schedule: 'Zeitplan',
        statistics: 'Statistik',
        details: 'Details',
        assigned: 'Zugewiesen',
        last: 'Zuletzt',
        due: 'Fällig',
        deadline: 'Deadline',
        completedTimes: '{{count}} Mal erledigt',
        createdBy: 'Erstellt von',
        notAvailable: 'k. A.',
      },
      notifications: {
        taskCompleted: 'Aufgabe erledigt',
        taskCompletedMessage: 'Deine Aufgabe wurde als erledigt markiert',
        taskSkipped: 'Aufgabe übersprungen',
        undoSuccessful: 'Rückgängig erfolgreich',
        taskCompletionUndone:
          'Das Abschließen der Aufgabe wurde rückgängig gemacht.',
        taskSkipUndone:
          'Das Überspringen der Aufgabe wurde rückgängig gemacht.',
        undoFailed: 'Rückgängig fehlgeschlagen',
        undoFailedMessage:
          'Die Aktion konnte nicht rückgängig gemacht werden. Bitte versuche es erneut.',
      },
      timer: {
        resetTitle: 'Timer zurücksetzen',
        resetMessage:
          'Möchtest du den Timer wirklich zurücksetzen? Dadurch werden alle Zeitaufzeichnungen gelöscht, seit du die Aufgabe gestartet hast.',
        resetConfirm: 'Timer zurücksetzen',
        clearTitle: 'Alle Zeitaufzeichnungen löschen',
        clearMessage:
          'Dadurch werden alle Timer für diese Aufgabe dauerhaft gelöscht und sie wird auf "nicht gestartet" zurückgesetzt.',
        clearConfirm: 'Alle Zeiten löschen',
      },
    },
    main: {
      groupBy: 'Gruppieren nach',
      quickFilters: 'Schnellfilter',
      assignedTo: 'Zugewiesen an:',
      createFilter: 'Filter erstellen',
      createFilterDescription: 'Erweiterte Filterregeln erstellen',
      createNewChoreShortcut: 'Neue Aufgabe erstellen (Cmd+C)',
      archivedSearch: 'Archivierte Aufgaben durchsuchen',
      archivedLoadFailed: 'Archivierte Aufgaben konnten nicht geladen werden',
      tryAgainLater: 'Bitte versuche es später erneut.',
      archivedRestoreMessage:
        'Die Aufgabe wurde wiederhergestellt und ist nun aktiv.',
      archivedDeleteMessage:
        'Die archivierte Aufgabe wurde dauerhaft gelöscht.',
      unexpectedError:
        'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.',
      shortcuts: {
        selectAllVisible: 'Alle sichtbaren Aufgaben auswählen (Ctrl+A)',
        restoreSelected: 'Ausgewählte Aufgaben wiederherstellen (R)',
        deleteSelected: 'Ausgewählte Aufgaben löschen (E)',
        clearMultiSelect: 'Mehrfachauswahl leeren (Esc)',
        closeMultiSelect: 'Mehrfachauswahl schließen (Esc)',
      },
      viewCompact: 'Zur kompakten Ansicht wechseln',
      viewCalendar: 'Zur Kalenderansicht wechseln',
      viewCard: 'Zur Kartenansicht wechseln',
      exitMultiSelect: 'Mehrfachauswahl beenden (Ctrl+S)',
      enableMultiSelect: 'Mehrfachauswahl aktivieren (Ctrl+S)',
      cancelAllFilters: 'Alle Filter aufheben',
      additionalFilter: 'Zusätzlicher Filter: {{filter}}',
      nothingScheduled: 'Nichts geplant',
      resetFilters: 'Filter zurücksetzen',
      restoredTasksTitle: 'Aufgaben wiederhergestellt',
      restoredTasks: '{{count}} Aufgabe erfolgreich wiederhergestellt.',
      restoredTasks_plural:
        '{{count}} Aufgaben erfolgreich wiederhergestellt.',
      restoredFailed:
        '{{count}} Aufgabe konnte nicht wiederhergestellt werden.',
      restoredFailed_plural:
        '{{count}} Aufgaben konnten nicht wiederhergestellt werden.',
      bulkRestoreFailed: 'Sammelwiederherstellung fehlgeschlagen',
      deleteArchivedTitle: 'Archivierte Aufgaben löschen',
      deleteArchivedConfirm:
        '{{count}} archivierte Aufgabe dauerhaft löschen?\n\nDiese Aktion kann nicht rückgängig gemacht werden.',
      deleteArchivedConfirm_plural:
        '{{count}} archivierte Aufgaben dauerhaft löschen?\n\nDiese Aktion kann nicht rückgängig gemacht werden.',
      archivedTitle: 'Archivierte Aufgaben',
      archivedDescription:
        'Archivierte oder abgeschlossene Aufgaben ansehen und verwalten.',
      all: 'Alle',
      clear: 'Leeren',
      restore: 'Wiederherstellen',
      noArchivedFound: 'Keine archivierten Aufgaben gefunden',
      noArchived: 'Keine archivierten Aufgaben',
      adjustSearch: 'Versuche, deine Suchbegriffe anzupassen',
      archivedWillAppear:
        'Archivierte Aufgaben erscheinen hier, wenn du sie in der Hauptliste archivierst',
      clearSearch: 'Suche löschen',
      archivedCount: '{{count}} archivierte Aufgabe',
      archivedCount_plural: '{{count}} archivierte Aufgaben',
      matchingSearch: ' passend zu "{{term}}"',
      filters: {
        anyone: 'Alle',
        assignedToMe: 'Mir zugewiesen',
        availableForMe: 'Für mich verfügbar',
        assignedToOthers: 'Anderen zugewiesen',
      },
    },
    actionFeedback: {
      undoable: {
        completed: 'Aufgabe erledigt',
        approved: 'Aufgabe genehmigt',
        rejected: 'Aufgabe abgelehnt',
        skipped: 'Aufgabe übersprungen',
      },
      undoDone: {
        completed: 'Das Abschließen der Aufgabe wurde rückgängig gemacht.',
        approved: 'Die Genehmigung der Aufgabe wurde rückgängig gemacht.',
        rejected: 'Die Ablehnung der Aufgabe wurde rückgängig gemacht.',
        skipped: 'Das Überspringen der Aufgabe wurde rückgängig gemacht.',
      },
      undoSuccessTitle: 'Erfolgreich rückgängig gemacht',
      undoFailedTitle: 'Rückgängig fehlgeschlagen',
      undoFailedMessage:
        'Die Aktion konnte nicht rückgängig gemacht werden. Bitte versuche es erneut.',
      notifications: {
        rescheduledTitle: 'Aufgabe neu geplant',
        rescheduledMessage:
          'Das Fälligkeitsdatum der Aufgabe wurde erfolgreich aktualisiert.',
        dueDateRemovedTitle: 'Aufgabe ohne Plan',
        dueDateRemovedMessage:
          'Die Aufgabe ist nun ungeplant und hat kein Fälligkeitsdatum mehr.',
        restoredTitle: 'Aufgabe wiederhergestellt',
        restoredMessage: 'Die Aufgabe wurde wiederhergestellt und ist nun aktiv.',
        archivedTitle: 'Aufgabe archiviert',
        archivedMessage:
          'Die Aufgabe wurde archiviert und aus der aktiven Liste entfernt.',
        startedTitle: 'Aufgabe gestartet',
        startedMessage: 'Die Aufgabe wurde als gestartet markiert.',
        pausedTitle: 'Aufgabe pausiert',
        pausedMessage: 'Die Aufgabe wurde pausiert.',
        deletedTitle: 'Aufgabe gelöscht',
        deletedMessage: 'Die Aufgabe wurde gelöscht.',
      },
      errors: {
        offlineRetry:
          'Die Anfrage wird erneut versucht, sobald du wieder online bist',
        failedToUpdate: 'Aktualisierung fehlgeschlagen',
        failedToStart: 'Start fehlgeschlagen',
        unableToStart: 'Die Aufgabe konnte nicht gestartet werden',
        failedToPause: 'Pausieren fehlgeschlagen',
        unableToPause: 'Die Aufgabe konnte nicht pausiert werden',
        failedToApprove: 'Genehmigung fehlgeschlagen',
        unableToApprove: 'Die Aufgabe konnte nicht genehmigt werden',
        failedToReject: 'Ablehnung fehlgeschlagen',
        unableToReject: 'Die Aufgabe konnte nicht abgelehnt werden',
        deleteTitle: 'Aufgabe löschen',
        deleteMessage: 'Möchtest du diese Aufgabe wirklich löschen?',
        deleteFailed: 'Löschen fehlgeschlagen',
        failedToArchive: 'Archivieren fehlgeschlagen',
        unableToArchive: 'Die Aufgabe konnte nicht archiviert werden',
        failedToSkip: 'Überspringen fehlgeschlagen',
        failedRemoveDueDate:
          'Fälligkeitsdatum konnte nicht entfernt werden',
        failedReschedule: 'Neuplanung fehlgeschlagen',
        unableUpdateDueDate:
          'Das Fälligkeitsdatum konnte nicht aktualisiert werden',
        nudgeFailedTitle: 'Nudge senden fehlgeschlagen',
        nudgeFailedMessage:
          'Der Nudge kann derzeit nicht gesendet werden',
      },
      nudgeSentTitle: 'Nudge gesendet!',
      nudgeSentMessage: 'Nudge erfolgreich gesendet',
      bulk: {
        completeTitle: 'Aufgaben abschließen',
        completeConfirm: '{{count}} Aufgabe als erledigt markieren?',
        completeConfirm_plural:
          '{{count}} Aufgaben als erledigt markieren?',
        completeSuccessTitle: 'Aufgaben abgeschlossen',
        completeSuccess: '{{count}} Aufgabe erfolgreich abgeschlossen.',
        completeSuccess_plural:
          '{{count}} Aufgaben erfolgreich abgeschlossen.',
        someFailedTitle: 'Einige Aufgaben sind fehlgeschlagen',
        completeFailed:
          '{{count}} Aufgabe konnte nicht abgeschlossen werden.',
        completeFailed_plural:
          '{{count}} Aufgaben konnten nicht abgeschlossen werden.',
        completeUnexpectedTitle:
          'Sammelabschluss fehlgeschlagen',
        archiveTitle: 'Aufgaben archivieren',
        archiveConfirm: '{{count}} Aufgabe archivieren?',
        archiveConfirm_plural: '{{count}} Aufgaben archivieren?',
        archiveSuccessTitle: 'Aufgaben archiviert',
        archiveSuccess: '{{count}} Aufgabe erfolgreich archiviert.',
        archiveSuccess_plural:
          '{{count}} Aufgaben erfolgreich archiviert.',
        archiveFailed:
          '{{count}} Aufgabe konnte nicht archiviert werden.',
        archiveFailed_plural:
          '{{count}} Aufgaben konnten nicht archiviert werden.',
        archiveUnexpectedTitle:
          'Sammelarchivierung fehlgeschlagen',
        deleteTitle: 'Aufgaben löschen',
        deleteConfirm:
          '{{count}} Aufgabe löschen?\n\nDiese Aktion kann nicht rückgängig gemacht werden.',
        deleteConfirm_plural:
          '{{count}} Aufgaben löschen?\n\nDiese Aktion kann nicht rückgängig gemacht werden.',
        deleteSuccessTitle: 'Aufgaben gelöscht',
        deleteSuccess: '{{count}} Aufgabe erfolgreich gelöscht.',
        deleteSuccess_plural:
          '{{count}} Aufgaben erfolgreich gelöscht.',
        deleteFailed:
          '{{count}} Aufgabe konnte nicht gelöscht werden.',
        deleteFailed_plural:
          '{{count}} Aufgaben konnten nicht gelöscht werden.',
        deleteUnexpectedTitle: 'Sammellöschung fehlgeschlagen',
      },
    },
  },
  user: {
    activitiesTimeline: 'Aktivitätsverlauf',
    pointsWithCount: '{{count}} Punkte',
    activities: {
      title: 'Benutzeraktivitäten',
      subtitle: 'Übersicht über Benutzeraktivitäten und Aufgabenstatistiken',
      filterTitle: 'Aktivitäten filtern',
      showFor: 'Aktivitäten anzeigen für:',
      allUsers: 'Alle Benutzer',
      timePeriod: 'Zeitraum:',
      days7: '7 Tage',
      days30: '30 Tage',
      days90: '90 Tage',
      allTime: 'Gesamte Zeit',
      showingFor: 'Zeige Aktivitäten für {{user}} über {{period}}',
      noActivitiesTitle: 'Keine Aktivitäten gefunden',
      noActivitiesDescription:
        'Für {{user}} wurden im Zeitraum {{period}} keine Aktivitäten gefunden.',
      noActivitiesHelp:
        'Wähle oben einen anderen Zeitraum oder Benutzerfilter aus.',
      backToChores: 'Zurück zu den Aufgaben',
      unknownUser: 'Unbekannter Benutzer',
      byAssignee: 'nach Zuständigkeit',
      tasksGroupedByAssignee: 'Aufgaben nach Zuständigen gruppiert',
      charts: {
        statusTitle: 'Status',
        statusDescription: 'Status abgeschlossener Aufgaben',
        dueDateTitle: 'Fälligkeitsdatum',
        dueDateDescription: 'Fälligkeitsdaten aktueller Aufgaben',
        priorityTitle: 'Priorität',
        priorityDescription: 'Aufgaben nach Priorität',
        labelsTitle: 'Labels',
        labelsDescription: 'Aufgaben nach Labels',
        labelsTimeTitle: 'Labels (Zeit)',
        labelsTimeDescription: 'Nach Labels aufgewendete Zeit (Stunden)',
        tasksTimeTitle: 'Aufgaben (Zeit)',
        tasksTimeDescription:
          'Für einzelne Aufgaben aufgewendete Zeit (Stunden)',
      },
    },
    points: {
      pointsLeaderboard: 'Punkte-Bestenliste',
      filterAndAnalysis: 'Filter & Analyse',
      tasksLeaderboard: 'Aufgaben-Bestenliste',
      rankingsPoints:
        'Rangliste basierend auf verdienten Punkten im ausgewählten Zeitraum',
      rankingsTasks:
        'Rangliste basierend auf erledigten Aufgaben im ausgewählten Zeitraum',
      modePoints: 'Punkte',
      modeTasks: 'Aufgaben',
      filterTitle: 'Punkte filtern',
      showFor: 'Punkte anzeigen für:',
      timePeriod: 'Zeitraum:',
      days7: '7 Tage',
      months6: '6 Monate',
      allTime: 'Gesamte Zeit',
      redeemPoints: 'Punkte einlösen',
      you: 'Du',
      tasksAvg: '{{tasks}} Aufgaben • {{avg}} im Schnitt pro Aufgabe',
      available: '{{count}} verfügbar',
      pointsLabel: '{{count}} Punkte',
      cardAvailable: 'Verfügbar',
      cardAvailableSubtext: 'Zum Einlösen bereit',
      cardRedeemed: 'Eingelöst',
      cardRedeemedSubtext: 'Bereits verwendet',
      cardTotal: 'Gesamt',
      cardTotalSubtext: 'Insgesamt verdient',
      cardPeriod: 'Punkte im Zeitraum',
      lastDays: 'Letzte {{count}} Tage',
      lastMonths6: 'Letzte 6 Monate',
      pointsTrend: 'Punkteverlauf',
      showingFor: 'Zeige Punkte für {{user}} über {{period}}',
      unknownUser: 'Unbekannter Benutzer',
    },
  },
  labelsView: {
    title: 'Labels',
    description:
      'Verwalte deine Labels und organisiere deine Aufgaben effektiv. Labels werden automatisch mit deinem Kreis geteilt, wenn sie in einer geteilten Aufgabe verwendet werden.',
    shared: 'Geteilt',
    deleteTitle: 'Label löschen',
    deleteMessage:
      'Möchtest du dieses Label wirklich löschen? Es wird dann von allen Aufgaben entfernt.',
    loadFailed: 'Labels konnten nicht geladen werden. Bitte versuche es erneut.',
    empty: 'Keine Labels vorhanden. Füge ein neues Label hinzu, um zu starten.',
  },
  history: {
    summaryTitle: 'Aufgabenübersicht',
    delete: {
      title: 'Verlaufseintrag löschen',
      confirm: 'Möchtest du diesen Verlaufseintrag wirklich löschen?',
    },
    empty: {
      title: 'Noch kein Verlauf',
      description:
        'Du hast noch keine Aufgaben erledigt. Sobald du Aufgaben abschließt, erscheinen sie hier.',
      backToChores: 'Zurück zu den Aufgaben',
    },
    info: {
      completedTitle: 'Du hast abgeschlossen',
      completedValue: '12345 Aufgaben',
    },
    edit: {
      title: 'Verlauf bearbeiten',
      completedDate: 'Abschlussdatum',
      note: 'Notiz',
      additionalNotes: 'Zusätzliche Notizen',
      deleteConfirm: 'Möchtest du diesen Verlauf wirklich löschen?',
    },
    stats: {
      allCompleted: 'Alles abgeschlossen',
      averageTiming: 'Durchschnittliches Timing',
      longestDelay: 'Längste Verzögerung',
      completedMost: 'Am häufigsten erledigt',
      membersInvolved: 'Beteiligte Mitglieder',
      lastCompleted: 'Zuletzt erledigt',
      onTime: 'Pünktlich',
      neverLate: 'Nie verspätet',
      times_one: '{{count}} Mal',
      times_other: '{{count}} Mal',
      membersCount_one: '{{count}} Mitglied',
      membersCount_other: '{{count}} Mitglieder',
    },
  },
  settingsExtras: {
    notifications: {
      deviceTitle: 'Gerätebenachrichtigung',
      deviceDescription: 'Verwalte deine Gerätebenachrichtigungen',
      deviceLabel: 'Gerätebenachrichtigung',
      deviceNativeHelper:
        'Erhalte Benachrichtigungen auf deinem Gerät, wenn eine Aufgabe fällig ist',
      mobileOnlyHelper:
        'Diese Funktion ist nur auf Mobilgeräten verfügbar',
      testNotification: 'Benachrichtigung testen',
      dueDateNotification: 'Fälligkeitsbenachrichtigung',
      dueDateNotificationHelper:
        'Benachrichtigung, wenn die Aufgabe fällig ist',
      preDueNotification: 'Vorab-Benachrichtigung',
      preDueNotificationHelper:
        'Benachrichtigung einige Stunden bevor die Aufgabe fällig ist',
      overdueNotification: 'Überfälligkeitsbenachrichtigung',
      overdueNotificationHelper:
        'Benachrichtigung, wenn die Aufgabe überfällig ist',
      pushNotifications: 'Push-Benachrichtigungen',
      pushNotificationsHelper:
        'Erhalte Nudges, Ankündigungen und Aufgaben-Zuweisungen per Push-Benachrichtigung',
      registeredDevices: 'Registrierte Geräte ({{count}}/5)',
      registeredDevicesDescription:
        'Geräte, die registriert sind, um Push-Benachrichtigungen für dein Konto zu erhalten',
      currentDeviceUnregistered:
        'Dieses Gerät ist nicht für Push-Benachrichtigungen registriert',
      limitReached: 'Limit erreicht',
      noRegisteredDevices:
        'Keine Geräte für Push-Benachrichtigungen registriert',
      customTitle: 'Benachrichtigung über Drittanbieter',
      customDescription:
        'Benachrichtigungen über andere Plattformen wie Telegram oder Pushover',
      customLabel: 'Benachrichtigung über Drittanbieter',
      customHelper: 'Benachrichtigungen auf einer anderen Plattform erhalten',
      telegramSetup:
        'Du musst dem Bot zuerst eine Nachricht senden, damit Telegram-Benachrichtigungen funktionieren.',
      clickHere: 'Hier klicken',
      startChat: 'um einen Chat zu starten',
      chatIdHelp:
        'Wenn du deine Chat-ID nicht kennst, starte einen Chat mit userinfobot. Der Bot sendet dir dann deine Chat-ID.',
      userInfoBot: 'um einen Chat mit userinfobot zu starten',
      removeDeviceFailed:
        'Gerät konnte nicht deregistriert werden',
      targetUpdated: 'Benachrichtigungsziel aktualisiert',
      updateFailed:
        'Fehler beim Aktualisieren des Benachrichtigungsziels: {{status}}',
      registrationInitiated: 'Registrierung gestartet',
      registrationInitiatedMessage:
        'Die Registrierung für Push-Benachrichtigungen wurde gestartet. Das Gerät wird automatisch registriert.',
      registrationFailed: 'Registrierung fehlgeschlagen',
      registrationFailedMessage:
        'Das Gerät konnte nicht automatisch registriert werden. Bitte versuche es erneut.',
      deviceRegisteredMessage:
        'Gerät erfolgreich für Push-Benachrichtigungen registriert.',
      deviceLimitReached: 'Gerätelimit erreicht',
      deviceLimitReachedMessage:
        'Du hast das Maximum von 5 registrierten Geräten erreicht. Bitte entferne zuerst ein Gerät.',
      permissionRequired: 'Berechtigung erforderlich',
      permissionRequiredMessage:
        'Für die Registrierung dieses Geräts ist die Erlaubnis für Push-Benachrichtigungen erforderlich.',
      notificationPermissionDenied:
        'Benachrichtigungsberechtigung verweigert',
      notificationPermissionDeniedMessage:
        'Du hast Benachrichtigungsberechtigungen verweigert. Du kannst sie später in den Geräteeinstellungen aktivieren.',
      pushPermissionDenied:
        'Push-Benachrichtigungsberechtigung verweigert',
      pushPermissionDeniedMessage:
        'Push-Benachrichtigungen wurden deaktiviert. Du kannst sie bei Bedarf in den Geräteeinstellungen aktivieren.',
      testTitle: 'Testbenachrichtigung',
      testBody: 'Du hast bald eine fällige Aufgabe',
      createdAt: 'Erstellt am',
      on: 'An',
      off: 'Aus',
      chatIdRequired: 'Chat-ID ist erforderlich',
      invalidChatId: 'Ungültige Chat-ID',
      userKeyRequired: 'Benutzerschlüssel ist erforderlich',
    },
  },
  filters: {
    view: {
      title: 'Filter',
      description:
        'Speichere deine bevorzugten Filterkombinationen für schnellen Zugriff. Erstelle eigene Ansichten, um Aufgaben schneller zu organisieren und zu finden.',
      noConditions: 'Keine Bedingungen',
      oneCondition: '1 Bedingung',
      manyConditions: '{{count}} Bedingungen',
      tasksCount: '{{count}} Aufgaben',
      overdueCount: '{{count}} überfällig',
      usedCount: '{{count}}x verwendet',
      emptyTitle: 'Noch keine gespeicherten Filter',
      emptyDescription:
        'Erstelle benutzerdefinierte Filter, um schnell auf deine meistgenutzten Aufgabenansichten zuzugreifen.',
      pin: 'Anheften',
      unpin: 'Lösen',
      deleteTitle: 'Filter löschen',
      deleteMessage:
        'Möchtest du "{{name}}" wirklich löschen? Dies kann nicht rückgängig gemacht werden.',
    },
    advanced: {
      editTitle: 'Filter bearbeiten',
      createTitle: 'Erweiterten Filter erstellen',
      filterName: 'Filtername',
      filterNamePlaceholder:
        'Zum Beispiel wichtige Aufgaben, die bald fällig sind, oder Aufgaben für John',
      descriptionOptional: 'Beschreibung (optional)',
      descriptionPlaceholder:
        'Optionale Beschreibung für diesen Filter...',
      conditions: 'Filterbedingungen (alle müssen zutreffen)',
      conditionNumber: 'Bedingung {{index}}',
      addCondition: 'Bedingung hinzufügen',
      preview: 'Vorschau',
      noMatches: 'Keine Aufgaben entsprechen diesen Filtern',
      andMore: '...und {{count}} weitere',
      selectAssignees: 'Zuständige auswählen',
      selectCreators: 'Ersteller auswählen',
      selectPriorities: 'Prioritäten auswählen',
      selectLabels: 'Labels auswählen',
      selectProjects: 'Projekte auswählen',
      selectStatuses: 'Status auswählen',
      defaultProject: 'Standardprojekt',
      unknown: 'Unbekannt',
      active: 'Aktiv',
      started: 'Gestartet',
      inProgress: 'In Bearbeitung',
      pendingApproval: 'Wartet auf Freigabe',
      isOverdue: 'Ist überfällig',
      isDueToday: 'Ist heute fällig',
      isDueTomorrow: 'Ist morgen fällig',
      isDueThisWeek: 'Ist diese Woche fällig',
      isDueThisMonth: 'Ist diesen Monat fällig',
      hasNoDueDate: 'Hat kein Fälligkeitsdatum',
      hasDueDate: 'Hat ein Fälligkeitsdatum',
      equals: 'Gleich',
      greaterThan: 'Größer als',
      lessThan: 'Kleiner als',
      greaterThanOrEqual: 'Größer oder gleich',
      lessThanOrEqual: 'Kleiner oder gleich',
      assignee: 'Zuständige Person',
      createdBy: 'Erstellt von',
      label: 'Label',
      status: 'Status',
      points: 'Punkte',
      enterFilterName: 'Bitte gib einen Filternamen ein',
      duplicateFilterName:
        'Ein Filter mit diesem Namen existiert bereits',
      addAtLeastOneCondition:
        'Bitte füge mindestens eine Filterbedingung hinzu',
    },
  },
  things: {
    page: {
      title: 'Dinge',
      description:
        'Dinge sind benutzerdefinierte Felder, die an Aufgaben angehängt werden können, um zusätzliche Informationen zu erfassen. Sie können Text-, Zahlen- oder Boolean-Werte enthalten.',
      emptyTitle: 'Keine Dinge erstellt oder gefunden',
      savedTitle: 'Gespeichert',
      savedMessage: 'Ding wurde erfolgreich gespeichert',
      saveFailedTitle: 'Ding konnte nicht gespeichert werden',
      saveQueued:
        'Du bist offline und die Anfrage wurde in die Warteschlange gestellt.',
      saveFailed:
        'Beim Speichern des Dings ist ein Fehler aufgetreten.',
      deleteTitle: 'Ding löschen',
      deleteConfirm: 'Möchtest du dieses Ding wirklich löschen?',
      deleteFailedAssociated:
        'Ein Ding mit zugehörigen Aufgaben kann nicht gelöscht werden.',
      deleteFailedTitle: 'Ding konnte nicht gelöscht werden',
      deleteQueued:
        'Du bist offline und die Anfrage wurde in die Warteschlange gestellt.',
      deleteFailed:
        'Beim Löschen des Dings ist ein Fehler aufgetreten.',
      updatedTitle: 'Aktualisiert',
      updatedMessage: 'Ding-Status erfolgreich aktualisiert',
      updateFailedTitle: 'Ding-Status konnte nicht aktualisiert werden',
      updateQueued:
        'Du bist offline und die Anfrage wurde in die Warteschlange gestellt.',
      updateFailed:
        'Beim Aktualisieren des Ding-Status ist ein Fehler aufgetreten.',
      swipeEdit: 'Bearbeiten',
      swipeToggle: 'Umschalten',
      swipeDelete: 'Löschen',
      types: {
        text: 'Text',
        number: 'Zahl',
        boolean: 'Boolean',
      },
      states: {
        true: 'Wahr',
        false: 'Falsch',
      },
    },
    modal: {
      createTitle: 'Ding erstellen',
      editTitle: 'Ding bearbeiten',
      namePlaceholder: 'Ding-Name',
      valuePlaceholder: 'Ding-Wert',
      type: 'Typ',
      nameRequired: 'Name ist erforderlich',
      stateMustBeNumber: 'Status muss eine Zahl sein',
      stateMustBeBoolean: 'Status muss wahr oder falsch sein',
      stateRequired: 'Status ist erforderlich',
      updateStateTitle: 'Status aktualisieren',
    },
    history: {
      overviewTitle: 'Ding-Übersicht',
      empty: {
        title: 'Kein Verlauf gefunden',
        description: 'Für dieses Ding gibt es noch keinen Verlauf.',
        backToThings: 'Zurück zu den Dingen',
      },
      analytics: {
        updateFrequency: 'Aktualisierungsfrequenz',
        lastUpdated: 'Zuletzt aktualisiert',
        lastValue: 'Letzter Wert',
        updateTrend: 'Aktualisierungstrend',
        every: 'Alle {{value}}',
        minutes_one: '{{count}} Minute',
        minutes_other: '{{count}} Minuten',
        hours_one: '{{count}} Stunde',
        hours_other: '{{count}} Stunden',
        days_one: '{{count}} Tag',
        days_other: '{{count}} Tage',
        intervalIncreasing: 'Intervall wird größer',
        intervalDecreasing: 'Intervall wird kleiner',
        intervalStable: 'Intervall bleibt stabil',
      },
    },
    trigger: {
      validationMissing:
        'Bitte wähle ein Ding und einen Auslösezustand aus',
      booleanNoCondition:
        'Der boolesche Typ benötigt keine Bedingung',
      triggerStateNumber:
        'Der Auslösezustand muss eine Zahl sein',
      title:
        'Löse eine Aufgabe aus, wenn sich der Zustand eines Dings in einen gewünschten Zustand ändert',
      noThings:
        'Es sieht so aus, als hättest du noch keine Dinge. Erstelle eines, um eine Aufgabe auszulösen, wenn sich dessen Zustand ändert.',
      goToThings: 'Zu den Dingen',
      createThingSuffix: 'um ein Ding zu erstellen',
      selectThing: 'Ein Ding auswählen',
      conditionHelp:
        'Erstelle eine Bedingung, um eine Aufgabe auszulösen, wenn sich der Zustand des Dings in den gewünschten Zustand ändert',
      dueWhenChanged:
        'Wenn sich der Zustand von {{name}} wie unten angegeben ändert, wird die Aufgabe fällig.',
      true: 'Wahr',
      false: 'Falsch',
      equal: 'Gleich',
      notEqual: 'Ungleich',
      greaterThan: 'Größer als',
      greaterThanOrEqual: 'Größer oder gleich',
      lessThan: 'Kleiner als',
      lessThanOrEqual: 'Kleiner oder gleich',
      textTriggerLabel:
        'Gib den Text ein, der die Aufgabe auslösen soll',
      type: 'Typ',
      state: 'Status',
    },
  },
  projects: {
    view: {
      title: 'Projekte',
      description:
        'Organisiere deine Aufgaben in Projekten. Erstelle eigene Arbeitsbereiche, damit deine Aufgaben strukturiert und leicht zugänglich bleiben.',
      default: 'Standard',
      defaultProjectName: 'Standardprojekt',
      defaultProjectDescription: 'Alle Aufgaben ohne spezifisches Projekt',
      tasksCount: '{{count}} Aufgaben',
      shared: 'Geteilt',
      loadFailed:
        'Projekte konnten nicht geladen werden. Bitte versuche es erneut.',
      deleteTitle: 'Projekt löschen',
      deleteMessage:
        'Möchtest du "{{name}}" wirklich löschen? Das Projekt wird entfernt, aber alle Aufgaben bleiben erhalten und werden ins Standardprojekt verschoben.',
    },
    modal: {
      createTitle: 'Neues Projekt erstellen',
      editTitle: 'Projekt bearbeiten',
      name: 'Projektname',
      namePlaceholder: 'Projektnamen eingeben...',
      nameRequired: 'Projektname ist erforderlich',
      descriptionPlaceholder: 'Optionale Projektbeschreibung...',
      icon: 'Projekticon',
      chooseIconTitle: 'Projekticon auswählen',
      availableIcons: 'Verfügbare Icons',
      selectIcon: 'Icon auswählen',
      color: 'Projektfarbe',
      createFailed: 'Projekt konnte nicht erstellt werden',
      updateFailed: 'Projekt konnte nicht aktualisiert werden',
    },
  },
  timer: {
    details: {
      updatedTitle: 'Sitzung aktualisiert',
      updatedMessage: 'Timer-Sitzung wurde erfolgreich aktualisiert.',
      updateFailedTitle: 'Sitzung konnte nicht aktualisiert werden',
      errorUpdatingTitle: 'Fehler beim Aktualisieren der Sitzung',
      startTitle: 'Timer gestartet',
      startMessage: 'Arbeitssitzung wurde erfolgreich gestartet.',
      startFailedTitle: 'Timer konnte nicht gestartet werden',
      pauseTitle: 'Timer pausiert',
      pauseMessage: 'Arbeitssitzung wurde pausiert.',
      pauseFailedTitle: 'Timer konnte nicht pausiert werden',
      tryAgain: 'Bitte versuche es erneut.',
      deleteSessionTitle: 'Sitzung löschen',
      deleteSessionMessage:
        'Das Löschen von Sitzung Nr. {{index}} würde hier implementiert werden',
      loading: 'Timerdaten werden geladen...',
      notFound: 'Für diese Aufgabe wurden keine Timerdaten gefunden.',
      activeWork: 'Aktive Arbeit',
      breakTime: 'Pausenzeit',
      sessions: 'Sitzungen',
      totalTime: 'Gesamtzeit',
      workVsBreak: 'Verteilung Arbeit vs. Pause',
      activePercent: '{{percent}} % aktiv',
      noActiveTime: 'Noch keine aktive Zeit',
      activityTimeline: 'Aktivitätsverlauf',
      sessionTooltip: 'Sitzung {{index}}: {{duration}} {{status}}',
      ongoing: '(laufend)',
      liveSession: 'Live-Sitzung',
      started: 'Gestartet: {{time}}',
      ended: 'Beendet: {{time}}',
      now: 'Jetzt: {{time}}',
      activeShort: 'Aktiv: {{percent}}',
      noTimeline:
        'Kein Aktivitätsverlauf verfügbar. Starte die Arbeit, um dein Aktivitätsmuster zu sehen.',
      sessionBreakdown: 'Sitzungsübersicht',
      saveChanges: 'Änderungen speichern',
      workSessions: 'Arbeitssitzungen ({{count}})',
      noSessions: 'Für diesen Timer wurden keine Arbeitssitzungen gefunden.',
      live: 'Live',
      unknownUser: 'Unbekannt',
      sessionLabel: 'Sitzung #{{index}} • {{date}}',
      ongoingArrow: '→ laufend',
      editSessions: 'Sitzungen',
      addSession: 'Sitzung hinzufügen',
      startTime: 'Startzeit',
      endTime: 'Endzeit',
      leaveEmptyOngoing: 'Leer lassen, wenn die Sitzung noch läuft',
      durationAuto: 'Dauer (automatisch berechnet)',
      pauseButton: 'Timer pausieren',
      startButton: 'Timer starten',
    },
    edit: {
      updatedTitle: 'Sitzung aktualisiert',
      updatedMessage: 'Timer-Sitzung wurde erfolgreich aktualisiert.',
      updateFailedTitle: 'Sitzung konnte nicht aktualisiert werden',
      tryAgain: 'Bitte versuche es erneut.',
      deletedTitle: 'Sitzung gelöscht',
      deletedMessage: 'Timer-Sitzung wurde erfolgreich gelöscht.',
      deleteTitle: 'Timer-Sitzung löschen',
      deleteMessage: 'Möchtest du diese Timer-Sitzung wirklich löschen?',
    },
  },
}

export default de
