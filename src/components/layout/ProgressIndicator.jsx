function ProgressIndicator({ currentStep, steps }) {
  const currentIndex =
    typeof currentStep === 'number'
      ? currentStep
      : steps.findIndex((step) => step.id === currentStep)

  return (
    <nav aria-label="Experience progress">
      <ol className="grid grid-cols-[repeat(var(--step-count),minmax(0,1fr))] gap-1.5 sm:gap-3" style={{ '--step-count': steps.length }}>
        {steps.map((step, index) => {
          const isCurrent = index === currentIndex
          const isComplete = index < currentIndex

          return (
            <li key={step.id} className="min-w-0 text-center" aria-current={isCurrent ? 'step' : undefined}>
              <span
                className={`block h-1.5 rounded-full ${
                  isComplete || isCurrent
                    ? 'bg-[var(--accent-primary)]'
                    : 'bg-[var(--border-subtle)]'
                }`}
              />
              <span className="sr-only">
                {step.label}: {isCurrent ? 'current step' : isComplete ? 'complete' : 'upcoming'}
              </span>
              <span className="mt-2 hidden truncate text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] sm:block">
                {step.label}
              </span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export { ProgressIndicator }
