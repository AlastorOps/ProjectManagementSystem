import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import './Calendar.css'

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const VIEWS = ['Month', 'Week', 'Day']

const sampleEvents = {
  3: [{ title: 'Design settings page', tone: 'success' }],
  5: [{ title: 'Sprint planning', tone: 'info' }],
  10: [{ title: 'Fix login redirect bug', tone: 'danger' }],
  14: [{ title: 'Usability testing', tone: 'warning' }, { title: 'Team sync', tone: 'info' }],
  19: [{ title: 'Migrate user table', tone: 'danger' }],
  22: [{ title: 'Client review', tone: 'info' }],
  27: [{ title: 'Release v2.1', tone: 'success' }],
}

function buildMonthGrid(year, month) {
  const firstOfMonth = new Date(year, month, 1)
  const startOffset = (firstOfMonth.getDay() + 6) % 7 // Monday = 0
  const start = new Date(year, month, 1 - startOffset)
  const days = []
  for (let i = 0; i < 42; i++) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    days.push(d)
  }
  return days
}

export function Calendar() {
  const [cursor, setCursor] = useState(new Date(2026, 7, 1))
  const [view, setView] = useState('Month')
  const today = new Date(2026, 7, 31)

  const days = useMemo(() => buildMonthGrid(cursor.getFullYear(), cursor.getMonth()), [cursor])

  const monthLabel = cursor.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const shiftMonth = (delta) => {
    setCursor((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1))
  }

  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

  return (
    <div>
      <TopBar
        title="Calendar"
        subtitle="Plan and track deadlines across your projects"
        actions={
          <button className="btn btn-primary">
            <Plus size={16} /> New Event
          </button>
        }
      />

      <div className="card calendar-card">
        <div className="calendar-controls">
          <div className="calendar-controls__nav">
            <button className="icon-btn" onClick={() => shiftMonth(-1)} aria-label="Previous month">
              <ChevronLeft size={16} />
            </button>
            <span className="calendar-controls__label">{monthLabel}</span>
            <button className="icon-btn" onClick={() => shiftMonth(1)} aria-label="Next month">
              <ChevronRight size={16} />
            </button>
            <button className="btn btn-secondary calendar-controls__today" onClick={() => setCursor(new Date(2026, 7, 1))}>
              Today
            </button>
          </div>
          <div className="calendar-view-select">
            {VIEWS.map((v) => (
              <button
                key={v}
                className={`calendar-view-select__item ${view === v ? 'calendar-view-select__item--active' : ''}`}
                onClick={() => setView(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {view === 'Month' && (
          <>
            <div className="calendar-weekdays">
              {WEEKDAYS.map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
            <div className="calendar-grid">
              {days.map((d, i) => {
                const inMonth = d.getMonth() === cursor.getMonth()
                const events = inMonth ? sampleEvents[d.getDate()] : null
                return (
                  <div
                    key={i}
                    className={`calendar-cell ${inMonth ? '' : 'calendar-cell--muted'} ${isSameDay(d, today) ? 'calendar-cell--today' : ''}`}
                  >
                    <span className="calendar-cell__date">{d.getDate()}</span>
                    <div className="calendar-cell__events">
                      {events?.map((ev, idx) => (
                        <span key={idx} className={`calendar-event calendar-event--${ev.tone}`}>
                          {ev.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {view !== 'Month' && (
          <div className="calendar-agenda">
            {Object.entries(sampleEvents).slice(0, view === 'Day' ? 1 : 5).map(([date, events]) => (
              <div key={date} className="calendar-agenda__row">
                <span className="calendar-agenda__date">Aug {date}</span>
                <div className="calendar-agenda__events">
                  {events.map((ev, idx) => (
                    <span key={idx} className={`calendar-event calendar-event--${ev.tone}`}>{ev.title}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
