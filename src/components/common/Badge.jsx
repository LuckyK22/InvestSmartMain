import { cn } from '../../utils/cn'

const variants = {
  blue: 'bg-blue-50 text-blue-700 border border-blue-100',
  green: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  amber: 'bg-amber-50 text-amber-700 border border-amber-100',
  slate: 'bg-slate-100 text-slate-600 border border-slate-200',
  white: 'bg-white/15 text-white border border-white/20',
}

export default function Badge({ children, variant = 'blue', className }) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
