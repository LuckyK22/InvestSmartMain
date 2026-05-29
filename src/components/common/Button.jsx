import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variants = {
  primary: 'btn-gradient text-white font-semibold shadow-lg',
  secondary: 'bg-white text-blue-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 font-semibold shadow-sm',
  outline: 'border-2 border-white/40 text-white hover:bg-white/10 font-semibold backdrop-blur-sm',
  ghost: 'text-blue-600 hover:bg-blue-50 font-medium',
  danger: 'bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
  xl: 'px-10 py-4 text-lg rounded-2xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  className,
  icon: Icon,
  iconPosition = 'left',
  disabled,
  onClick,
  ...props
}) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={16} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={16} />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={base}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={base}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
