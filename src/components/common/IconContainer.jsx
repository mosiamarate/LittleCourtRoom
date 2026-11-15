const sizeClasses = {
  small: 'h-10 w-10 rounded-xl',
  medium: 'h-12 w-12 rounded-2xl',
  large: 'h-16 w-16 rounded-[1.25rem]',
}

const iconSizes = {
  small: 20,
  medium: 24,
  large: 32,
}

const toneClasses = {
  blush: 'bg-[var(--surface-secondary)] text-[var(--accent-primary)]',
  lavender: 'bg-[var(--surface-tertiary)] text-[var(--accent-primary)]',
  cream: 'bg-[var(--background-page)] text-[var(--text-primary)]',
}

function IconContainer({
  className = '',
  icon: Icon,
  label,
  size = 'medium',
  tone = 'lavender',
}) {
  const decorative = !label

  return (
    <div
      aria-hidden={decorative || undefined}
      aria-label={label}
      className={`grid shrink-0 place-items-center ${sizeClasses[size] ?? sizeClasses.medium} ${toneClasses[tone] ?? toneClasses.lavender} ${className}`}
      role={decorative ? undefined : 'img'}
    >
      <Icon size={iconSizes[size] ?? iconSizes.medium} strokeWidth={1.7} />
    </div>
  )
}

export { IconContainer }
