import { cn } from '@/lib/cn'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <span className="h-px w-6 bg-brand-600" />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
        {children}
      </span>
      <span className="h-px w-6 bg-brand-600" />
    </div>
  )
}
