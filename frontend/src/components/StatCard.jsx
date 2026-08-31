import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import './StatCard.css'

export function StatCard({ label, value, delta, tone = 'neutral' }) {
  const isDown = delta?.trim().startsWith('-')

  return (
    <div className="card stat-card">
      <span className="stat-card__label">{label}</span>
      <span className="stat-card__value">{value}</span>
      {delta && (
        <span className={`stat-card__delta stat-card__delta--${isDown ? 'down' : 'up'}`}>
          {isDown ? <ArrowDownRight size={13} /> : <ArrowUpRight size={13} />}
          {delta}
        </span>
      )}
      <span className={`stat-card__accent stat-card__accent--${tone}`} />
    </div>
  )
}
