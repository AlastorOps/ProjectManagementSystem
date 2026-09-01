import './ui.css'

export function ProgressRing({
  percent = 0,
  size = 44,
  stroke = 5,
  color = 'var(--color-charcoal)',
  children,
}) {
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference - (Math.min(100, Math.max(0, percent)) / 100) * circumference

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg className="progress-ring" width={size} height={size}>
        <circle
          className="progress-ring__track"
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
        />
        <circle
          className="progress-ring__fill"
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {children && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}
