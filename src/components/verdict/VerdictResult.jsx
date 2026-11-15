import { BadgeCheck, Gavel, PartyPopper, Scale } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { IconContainer } from '../common/IconContainer.jsx'

const resultIcons = {
  awesome: BadgeCheck,
  dismissed: Scale,
  holiday: Gavel,
}

function VerdictResult({ verdict }) {
  const Icon = resultIcons[verdict.id] ?? Scale
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      animate={{ opacity: 1, scale: 1, y: 0 }}
      aria-live="polite"
      className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--surface-tertiary)] p-6 text-center sm:p-8"
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97, y: 10 }}
      role="status"
      transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: 'easeOut' }}
    >
      <PartyPopper
        className="absolute left-5 top-5 text-[var(--accent-primary)]"
        aria-hidden="true"
        size={22}
        strokeWidth={1.6}
      />
      <PartyPopper
        className="absolute bottom-5 right-5 rotate-45 text-[var(--accent-primary)]"
        aria-hidden="true"
        size={22}
        strokeWidth={1.6}
      />
      <IconContainer className="mx-auto" icon={Icon} size="large" tone="cream" />
      <p className="section-eyebrow mt-5">Final ruling</p>
      <h2 className="m-0 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[var(--text-primary)]">
        {verdict.title}
      </h2>
      <p className="mx-auto mb-0 mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">
        {verdict.description}
      </p>
    </motion.section>
  )
}

export { VerdictResult }
