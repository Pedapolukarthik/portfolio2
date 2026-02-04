import { ReactNode } from 'react'

type GlowButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  download?: boolean
  disabled?: boolean
}

const GlowButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  download,
  disabled,
}: GlowButtonProps) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan'
  const variants = {
    primary:
      'bg-gradient-to-r from-neon-purple/90 to-neon-cyan/90 text-slate-950 shadow-glow hover:shadow-glowStrong',
    secondary:
      'border border-slate-200/60 bg-white/80 text-slate-900 backdrop-blur hover:border-neon-cyan/60 dark:border-white/20 dark:bg-white/5 dark:text-white',
  }

  const classes = `${base} ${variants[variant]} ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${className}`

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        aria-disabled={disabled}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default GlowButton
