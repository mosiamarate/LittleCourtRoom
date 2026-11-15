import { motion, useReducedMotion } from 'motion/react'

const variantClasses = {
  primary:
    'bg-[var(--accent-primary)] text-white shadow-[var(--shadow-control)] hover:bg-[var(--accent-strong)]',
  secondary:
    'border border-[var(--border-subtle)] bg-[var(--surface-primary)] text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]',
  quiet:
    'bg-transparent text-[var(--accent-primary)] hover:bg-[var(--surface-secondary)]',
}

function Button({
  children,
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  variant = 'primary',
  ...buttonProps
}) {
  const prefersReducedMotion = useReducedMotion()
  const interaction =
    disabled || prefersReducedMotion
      ? {}
      : {
          whileHover: { y: -2 },
          whileTap: { scale: 0.98 },
        }

  return (
    <motion.button
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-control)] px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-colors duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant] ?? variantClasses.primary} ${className}`}
      disabled={disabled}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      type={type}
      {...buttonProps}
      {...interaction}
    >
      {Icon && iconPosition === 'left' ? <Icon aria-hidden="true" size={18} strokeWidth={2} /> : null}
      <span>{children}</span>
      {Icon && iconPosition === 'right' ? <Icon aria-hidden="true" size={18} strokeWidth={2} /> : null}
    </motion.button>
  )
}

export { Button }
