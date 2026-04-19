interface EyebrowProps {
  children: React.ReactNode
  dark?: boolean
  num?: string
}

export function Eyebrow({ children, dark = false, num }: EyebrowProps) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase mb-5 text-white/35">
      {num && <span className="text-white/55">{num}</span>}
      <span className="h-px w-8 bg-[#52057B]/60" />
      <span>{children}</span>
    </div>
  )
}
