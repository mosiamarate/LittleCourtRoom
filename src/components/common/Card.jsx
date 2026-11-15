function Card({ as: Component = 'div', children, className = '', ...cardProps }) {
  return (
    <Component
      className={`rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6 shadow-[var(--shadow-card)] sm:p-8 ${className}`}
      {...cardProps}
    >
      {children}
    </Component>
  )
}

export { Card }
