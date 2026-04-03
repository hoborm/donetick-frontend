import moment from 'moment'
import i18n from '../i18n'

const ENGLISH_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const ENGLISH_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const getDayIndex = day => {
  if (typeof day === 'number') {
    return day
  }

  const index = ENGLISH_DAYS.findIndex(
    candidate => candidate.toLowerCase() === `${day}`.toLowerCase(),
  )

  return index === -1 ? 0 : index
}

const getMonthIndex = month => {
  if (typeof month === 'number') {
    return month
  }

  const index = ENGLISH_MONTHS.findIndex(
    candidate => candidate.toLowerCase() === `${month}`.toLowerCase(),
  )

  return index === -1 ? 0 : index
}

const getCalendarDayLabel = date => {
  return date.calendar(null, {
    sameDay: `[${i18n.t('common:calendar.today')}]`,
    nextDay: `[${i18n.t('common:calendar.tomorrow')}]`,
    lastDay: `[${i18n.t('common:calendar.yesterday')}]`,
    nextWeek: 'dddd',
    lastWeek: 'dddd',
    sameElse: 'L',
  })
}

const getCalendarDateTimeLabel = date => {
  return date.calendar(null, {
    sameDay: `[${i18n.t('common:calendar.today')}] LT`,
    nextDay: `[${i18n.t('common:calendar.tomorrow')}] LT`,
    lastDay: `[${i18n.t('common:calendar.yesterday')}] LT`,
    nextWeek: 'dddd LT',
    lastWeek: 'dddd LT',
    sameElse: 'L LT',
  })
}

const formatDayOfMonth = value => {
  if (i18n.language === 'de') {
    return `${value}.`
  }

  if (value >= 11 && value <= 13) {
    return `${value}th`
  }

  switch (value % 10) {
    case 1:
      return `${value}st`
    case 2:
      return `${value}nd`
    case 3:
      return `${value}rd`
    default:
      return `${value}th`
  }
}

const translateFrequencyUnit = unit => {
  return i18n.t(`chores:frequency.units.${unit}`, {
    defaultValue: unit,
  })
}

/**
 * Get the text to display for a chore's due date
 * @param {string|null} nextDueDate - The next due date of the chore
 * @param {Object} chore - The chore object (needed for nextDueDate null check)
 * @returns {string} The formatted due date text
 */
export const getDueDateChipText = (nextDueDate, chore) => {
  if (chore?.nextDueDate === null || nextDueDate === null) {
    return i18n.t('chores:due.noDueDate')
  }

  const dueDate = moment(nextDueDate)
  const diff = moment(nextDueDate).diff(moment(), 'hours')

  if (dueDate.seconds() === 59 && dueDate.minutes() === 59) {
    if (diff < 0) {
      const absDiff = Math.abs(diff)
      if (absDiff <= 48) {
        return i18n.t('chores:due.overdueDay', {
          day: getCalendarDayLabel(moment(nextDueDate)).toLowerCase(),
        })
      }
      return i18n.t('chores:due.overdueRelative', {
        when: dueDate.fromNow(),
      })
    }

    if (diff < 48 && diff > 0) {
      return getCalendarDayLabel(moment(nextDueDate))
    }

    return i18n.t('chores:due.dueRelative', {
      when: dueDate.fromNow(),
    })
  }

  if (diff < 48 && diff > 0) {
    return getCalendarDateTimeLabel(moment(nextDueDate))
  }

  return i18n.t('chores:due.dueRelative', {
    when: moment(nextDueDate).fromNow(),
  })
}

/**
 * Get the color to use for a chore's due date chip
 * @param {string|null} nextDueDate - The next due date of the chore
 * @param {Object} chore - The chore object (needed for nextDueDate null check)
 * @returns {string} The color name for the chip
 */
export const getDueDateChipColor = (nextDueDate, chore) => {
  if (chore?.nextDueDate === null || nextDueDate === null) return 'neutral'

  const diff = moment(nextDueDate).diff(moment(), 'hours')

  if (diff < 48 && diff > 0) {
    return 'warning'
  }
  if (diff < 0) {
    return 'danger'
  }

  return 'neutral'
}

export const getRecurrentChipText = chore => {
  const metadata =
    typeof chore.frequencyMetadata === 'string'
      ? JSON.parse(chore.frequencyMetadata)
      : chore.frequencyMetadata

  if (chore.frequencyType === 'once') {
    return i18n.t('chores:frequency.once')
  } else if (chore.frequencyType === 'trigger') {
    return i18n.t('chores:frequency.trigger')
  } else if (chore.frequencyType === 'daily') {
    return i18n.t('chores:frequency.daily')
  } else if (chore.frequencyType === 'adaptive') {
    return i18n.t('chores:frequency.adaptive')
  } else if (chore.frequencyType === 'weekly') {
    return i18n.t('chores:frequency.weekly')
  } else if (chore.frequencyType === 'monthly') {
    return i18n.t('chores:frequency.monthly')
  } else if (chore.frequencyType === 'yearly') {
    return i18n.t('chores:frequency.yearly')
  } else if (chore.frequencyType === 'days_of_the_week') {
    let days = metadata.days.map(getDayIndex)

    if (days.length > 4) {
      const notSelectedShortdays = Array.from({ length: 7 }, (_, index) => index)
        .filter(dayIndex => !days.includes(dayIndex))
        .map(dayIndex => moment().day(dayIndex).format('ddd'))

      return i18n.t('chores:frequency.dailyExcept', {
        days: notSelectedShortdays.join(', '),
      })
    }

    days = days.map(dayIndex => moment().day(dayIndex).format('ddd'))
    return days.join(', ')
  } else if (chore.frequencyType === 'day_of_the_month') {
    let months = metadata?.months
      ? metadata.months.map(getMonthIndex)
      : Array.from({ length: 12 }, (_, index) => index)

    if (months.length > 6) {
      const notSelectedShortMonths = Array.from(
        { length: 12 },
        (_, index) => index,
      )
        .filter(monthIndex => !months.includes(monthIndex))
        .map(monthIndex => moment().month(monthIndex).format('MMM'))

      let result = `${i18n.t('chores:frequency.monthly')} ${formatDayOfMonth(
        chore.frequency,
      )}`

      if (notSelectedShortMonths.length > 0) {
        result = i18n.t('chores:frequency.monthlyExcept', {
          label: result,
          months: notSelectedShortMonths.join(', '),
        })
      }

      return result
    }

    const formattedMonths = metadata.months
      .map(getMonthIndex)
      .map(monthIndex => moment().month(monthIndex).format('MMM'))

    return i18n.t('chores:frequency.dayOfMonths', {
      day: formatDayOfMonth(chore.frequency),
      months: formattedMonths.join(', '),
    })
  } else if (chore.frequencyType === 'interval') {
    return i18n.t('chores:frequency.everyUnit', {
      count: chore.frequency,
      unit: translateFrequencyUnit(metadata.unit),
    })
  }

  return chore.frequencyType
}
