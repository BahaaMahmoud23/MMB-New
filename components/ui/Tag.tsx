import { cn } from '@/lib/cn'

interface TagProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'ghost'
}

export function Tag({ children, className, variant = 'default' }: TagProps) {
  const variants = {
    default: 'bg-[#52057B]/20 text-white/60 border border-[#52057B]/35',
    dark: 'bg-[#52057B] text-white border border-[#52057B]',
    ghost: 'bg-transparent text-white/45 border border-white/10',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
