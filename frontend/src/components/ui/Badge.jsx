import './ui.css'

const slug = (s) => (s || '').toLowerCase().replace(/\s+/g, '-')

export function Badge({ children, tone }) {
  const variant = slug(tone || children)
  return <span className={`badge badge--${variant}`}>{children}</span>
}
