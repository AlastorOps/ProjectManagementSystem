import './ui.css'
import { getMember } from '../../data/mockData'

export function Avatar({ initials, color, size = 32, title, style }) {
  return (
    <span
      className="avatar"
      title={title}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(10, size * 0.36),
        background: color || 'var(--accent-blue-gray)',
        ...style,
      }}
    >
      {initials}
    </span>
  )
}

export function AvatarGroup({ memberIds = [], size = 30, max = 3 }) {
  const shown = memberIds.slice(0, max)
  const extra = memberIds.length - shown.length
  return (
    <span className="avatar-group">
      {shown.map((id) => {
        const m = getMember(id)
        if (!m) return null
        return (
          <Avatar key={id} initials={m.initials} color={m.color} size={size} title={m.name} />
        )
      })}
      {extra > 0 && (
        <span
          className="avatar avatar-group__more"
          style={{ width: size, height: size, marginLeft: -8 }}
        >
          +{extra}
        </span>
      )}
    </span>
  )
}
