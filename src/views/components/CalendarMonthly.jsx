import Calendar from 'react-calendar'
import { useLocale } from '../../contexts/LocaleContext'
import {
  formatMonthShort,
  formatWeekdayShort,
  getDateKey,
} from '../../i18n/utils'
import { getPriorityColor } from '../../utils/Colors'
import styles from './Calendar.module.css'
const CalendarMonthly = ({ chores, onDateChange }) => {
  const { language, locale } = useLocale()

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayChores = chores.filter(chore => {
        return getDateKey(chore.nextDueDate) === getDateKey(date)
      })
      if (dayChores.length === 0) {
        return (
          <div className={styles.dotContainer}>
            <span className={styles.dotEmpty}></span>
          </div>
        )
      }
      if (dayChores.length > 3) {
        return (
          <div className={styles.dotContainer}>
            <span
              className={styles.dotWithLine}
              style={{
                backgroundColor: getPriorityColor(dayChores[0].priority),
              }}
            ></span>
          </div>
        )
      }

      return (
        <div className={styles.dotContainer}>
          {dayChores.map((chore, index) => {
            return (
              <span
                key={index}
                className={styles.dot}
                style={{
                  backgroundColor: getPriorityColor(chore.priority),
                }}
              ></span>
            )
          })}
        </div>
      )
    }
    return null
  }
  return (
    <div className={styles.reactCalendar}>
      <Calendar
        locale={locale}
        tileContent={tileContent}
        onChange={d => {
          onDateChange(new Date(d))
        }}
        // format the days from MON, TUE, WED, THU, FRI, SAT, SUN to first three letters:
        formatShortWeekday={(_, date) => formatWeekdayShort(date, language)}
        // format month names to show only first 3 characters
        formatMonth={(_, date) => formatMonthShort(date, language)}
      />
    </div>
  )
}

export default CalendarMonthly
