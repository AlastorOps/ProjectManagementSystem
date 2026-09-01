import { PieChart, Pie, Cell } from 'recharts'

export function DonutChart({
  percent = 0,
  size = 168,
  thickness = 16,
  fillColor = 'var(--color-charcoal)',
  trackColor = 'var(--accent-blue-gray)',
  centerLabel,
  centerSub,
}) {
  const data = [
    { name: 'value', value: percent },
    { name: 'rest', value: 100 - percent },
  ]
  const outerRadius = size / 2
  const innerRadius = outerRadius - thickness

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <PieChart width={size} height={size}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={90}
          endAngle={-270}
          stroke="none"
          isAnimationActive={true}
          cornerRadius={thickness / 2}
        >
          <Cell fill={fillColor} />
          <Cell fill={trackColor} />
        </Pie>
      </PieChart>
      {(centerLabel || centerSub) && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {centerLabel && (
            <span style={{ fontSize: size * 0.155, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              {centerLabel}
            </span>
          )}
          {centerSub && (
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{centerSub}</span>
          )}
        </div>
      )}
    </div>
  )
}
