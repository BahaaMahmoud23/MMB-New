interface StripedPlaceholderProps {
  label?: string
  className?: string
  dark?: boolean
  angle?: number
  stripeGap?: number
}

export function StripedPlaceholder({
  label,
  className = '',
  dark = false,
  angle = 45,
  stripeGap = 14,
}: StripedPlaceholderProps) {
  const bg = '#06000D'
  const stripe = 'rgba(137,44,220,0.08)'
  const textColor = 'rgba(137,44,220,0.4)'

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `${bg} repeating-linear-gradient(${angle}deg, ${stripe} 0 1px, transparent 1px ${stripeGap}px)`,
      }}
    >
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-mono text-[10px] tracking-widest uppercase"
            style={{ color: textColor }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
