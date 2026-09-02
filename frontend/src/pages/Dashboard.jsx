import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  ChevronDown,
  CalendarDays,
  Circle,
  CheckCircle2,
} from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { TopBar } from '../layout/TopBar'
import { ProjectCard } from '../components/ProjectCard'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { DonutChart } from '../components/ui/DonutChart'
import {
  currentUser,
  projects,
  taskOverview,
  upcomingTasks,
  weeklyReport,
  workDistribution,
  kanbanColumns,
  getMember,
} from '../data/mockData'
import './Dashboard.css'

const previewColumns = ['todo', 'inprogress', 'review', 'done']

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} className="chart-tooltip__row">
          <span className="chart-tooltip__dot" style={{ background: p.stroke }} />
          {p.name}: <strong>{p.value}</strong>
        </p>
      ))}
    </div>
  )
}

export function Dashboard() {
  const [checked, setChecked] = useState(() => new Set(upcomingTasks.filter((t) => t.done).map((t) => t.id)))
  const today = 'Fri'

  const toggle = (id) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div>
      <TopBar title={`Hello, ${currentUser.firstName}`} subtitle="Welcome back!" />

      {/* Hero */}
      <section className="hero-card">
        <div className="hero-card__text">
          <h2>Stay on top of your work</h2>
          <p>Track your tasks, manage projects, and keep your team moving forward.</p>
          <Link to="/tasks" className="btn btn-primary hero-card__cta">
            View Tasks <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="hero-card__art" aria-hidden="true">
          <svg width="180" height="130" viewBox="0 0 180 130" fill="none">
            <rect x="18" y="14" width="96" height="100" rx="16" fill="#ffffffb3" />
            <rect x="34" y="34" width="64" height="8" rx="4" fill="#242426" opacity="0.55" />
            <rect x="34" y="52" width="46" height="8" rx="4" fill="#242426" opacity="0.3" />
            <circle cx="41" cy="80" r="7" fill="#78A88A" />
            <rect x="54" y="76" width="40" height="8" rx="4" fill="#242426" opacity="0.2" />
            <rect x="86" y="0" width="76" height="76" rx="18" fill="#ffffffcc" />
            <path d="M104 40l10 10 20-22" stroke="#242426" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          </svg>
        </div>
      </section>

      <div className="dash-columns">
        {/* LEFT COLUMN */}
        <div className="dash-col-main">
          <section className="card dash-section">
            <div className="dash-section__head">
              <h3 className="section-title">Task Overview</h3>
              <span className="dash-section__total">48 tasks</span>
            </div>
            <div className="task-overview-list">
              {taskOverview.map((t) => (
                <div key={t.key} className="task-overview-row">
                  <div className="task-overview-row__ring">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="progress-ring">
                      <circle className="progress-ring__track" cx="20" cy="20" r="16" strokeWidth="5" />
                      <circle
                        className="progress-ring__fill"
                        cx="20"
                        cy="20"
                        r="16"
                        strokeWidth="5"
                        stroke={t.color}
                        strokeDasharray={2 * Math.PI * 16}
                        strokeDashoffset={2 * Math.PI * 16 * (1 - t.percent / 100)}
                      />
                    </svg>
                  </div>
                  <div className="task-overview-row__label">
                    <span className="task-overview-row__title">{t.label}</span>
                    <span className="task-overview-row__percent">{t.percent}% of total</span>
                  </div>
                  <span className="task-overview-row__count">{t.count}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="card dash-section">
            <div className="dash-section__head">
              <h3 className="section-title">Projects</h3>
              <Link to="/projects" className="dash-section__link">View all</Link>
            </div>
            <div className="project-stack">
              {projects.slice(0, 2).map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>

          <section className="card dash-section">
            <div className="dash-section__head">
              <h3 className="section-title">Upcoming Tasks</h3>
              <Link to="/tasks" className="dash-section__link">View all</Link>
            </div>
            <div className="upcoming-list">
              {upcomingTasks.map((t) => {
                const member = getMember(t.assignee)
                const isChecked = checked.has(t.id)
                return (
                  <div key={t.id} className={`upcoming-row ${isChecked ? 'upcoming-row--done' : ''}`}>
                    <button
                      className="upcoming-row__check"
                      onClick={() => toggle(t.id)}
                      aria-label="toggle task"
                    >
                      {isChecked ? <CheckCircle2 size={19} /> : <Circle size={19} />}
                    </button>
                    <div className="upcoming-row__main">
                      <span className="upcoming-row__name">{t.name}</span>
                      <span className="upcoming-row__project">{t.project}</span>
                    </div>
                    <Badge tone={t.priority}>{t.priority}</Badge>
                    <span className="upcoming-row__due">
                      <CalendarDays size={13} /> {t.due}
                    </span>
                    {member && <Avatar initials={member.initials} color={member.color} size={28} title={member.name} />}
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="dash-col-side">
          <section className="card dash-section">
            <div className="dash-section__head">
              <h3 className="section-title">Reports</h3>
              <button className="dash-dropdown">
                This Month <ChevronDown size={14} />
              </button>
            </div>
            <div className="report-chart">
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={weeklyReport} margin={{ top: 6, right: 4, left: -22, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="var(--border-divider)" />
                  <XAxis dataKey="day" hide />
                  <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'var(--border-light)' }} />
                  <Line type="monotone" dataKey="completed" name="Completed" stroke="var(--color-charcoal)" strokeWidth={2} dot={{ r: 3, fill: 'var(--color-charcoal)', strokeWidth: 0 }} activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="created" name="Created" stroke="var(--accent-lavender)" strokeWidth={2} dot={{ r: 3, fill: 'var(--accent-lavender)', strokeWidth: 0 }} activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="overdue" name="Overdue" stroke="var(--status-danger)" strokeWidth={1.5} strokeDasharray="3 3" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="report-days">
              {weeklyReport.map((d) => (
                <span key={d.day} className={`report-days__item ${d.day === today ? 'report-days__item--active' : ''}`}>
                  {d.day}
                </span>
              ))}
            </div>
            <div className="report-legend">
              <span><i style={{ background: 'var(--color-charcoal)' }} /> Completed</span>
              <span><i style={{ background: 'var(--accent-lavender)' }} /> Created</span>
              <span><i style={{ background: 'var(--status-danger)' }} /> Overdue</span>
            </div>
          </section>

          <section className="card dash-section work-distribution">
            <div className="dash-section__head">
              <h3 className="section-title">Work Distribution</h3>
            </div>
            <div className="work-distribution__chart">
              <DonutChart
                percent={workDistribution.completedPercent}
                size={160}
                thickness={16}
                fillColor="var(--color-charcoal)"
                trackColor="var(--accent-blue-gray)"
                centerLabel={`${workDistribution.completedPercent}%`}
                centerSub="Completed"
              />
            </div>
            <div className="work-distribution__stats">
              <div className="wd-stat">
                <span className="wd-stat__dot" style={{ background: 'var(--color-charcoal)' }} />
                <span className="wd-stat__label">Tasks</span>
                <span className="wd-stat__value">{workDistribution.tasks}</span>
              </div>
              <div className="wd-stat">
                <span className="wd-stat__dot" style={{ background: 'var(--accent-lavender)' }} />
                <span className="wd-stat__label">Projects</span>
                <span className="wd-stat__value">{String(workDistribution.projectsCount).padStart(2, '0')}</span>
              </div>
              <div className="wd-stat">
                <span className="wd-stat__dot" style={{ background: 'var(--status-success)' }} />
                <span className="wd-stat__label">Completed</span>
                <span className="wd-stat__value">{workDistribution.completed}</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* KANBAN PREVIEW */}
      <section className="dash-section kanban-preview-section">
        <div className="dash-section__head">
          <h3 className="section-title">Kanban Board</h3>
          <Link to="/kanban" className="dash-section__link">Open board</Link>
        </div>
        <div className="kanban-preview scroll-x">
          {kanbanColumns
            .filter((c) => previewColumns.includes(c.id))
            .map((col) => (
              <div key={col.id} className="kanban-preview__col">
                <div className="kanban-preview__col-head">
                  <span>{col.title}</span>
                  <span className="kanban-preview__count">{col.tasks.length}</span>
                </div>
                {col.tasks.slice(0, 2).map((task) => {
                  const member = getMember(task.assignee)
                  return (
                    <div key={task.id} className="kanban-card">
                      <span className="kanban-card__project">{task.project}</span>
                      <p className="kanban-card__title">{task.title}</p>
                      <div className="kanban-card__footer">
                        <span className="kanban-card__due">{task.due}</span>
                        {member && <Avatar initials={member.initials} color={member.color} size={22} />}
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}
