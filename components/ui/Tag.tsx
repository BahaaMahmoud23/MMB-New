import { cn } from '@/lib/cn'

interface TagProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'purple' | 'ghost'
}

export function Tag({ children, className, variant = 'default' }: TagProps) {
  const variants = {
    default: 'bg-white/5 text-white/60 border border-white/10',
    purple: 'bg-brand-800/60 text-brand-400 border border-brand-700/40',
    ghost: 'bg-transparent text-white/40 border border-white/5',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
