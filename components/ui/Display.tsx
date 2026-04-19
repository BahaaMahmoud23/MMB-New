interface DisplayProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
  as?: 'h1' | 'h2' | 'h3'
}

export function Display({ children, className = '', dark = false, as: Tag = 'h2' }: DisplayProps) {
  return (
    <Tag
      className={`font-black tracking-[-0.02em] leading-[0.95] text-white ${className}`}
    >
      {children}
    </Tag>
  )
}
