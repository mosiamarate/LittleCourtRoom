import { FileText, Heart, Lightbulb, Search } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { IconContainer } from '../common/IconContainer.jsx'

const evidenceIcons = {
  compliments: Heart,
  encouragement: Lightbulb,
  jokes: FileText,
}

const evidenceTones = {
  compliments: 'blush',
  encouragement: 'cream',
  jokes: 'lavender',
}

function EvidenceCard({ category, isSelected, onOpen }) {
  const Icon = evidenceIcons[category.id] ?? Search
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.button
      aria-pressed={isSelected}
      className={`w-full rounded-[var(--radius-card)] border p-5 text-left transition-colors duration-200 sm:p-6 ${
        isSelected
          ? 'border-[var(--accent-primary)] bg-[var(--surface-tertiary)] shadow-[var(--shadow-control)]'
          : 'border-[var(--border-subtle)] bg-[var(--surface-primary)] hover:bg-[var(--surface-secondary)]'
      }`}
      onClick={() => onOpen(category.id)}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      type="button"
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
    >
      <div className="flex items-start gap-4">
        <IconContainer icon={Icon} size="small" tone={evidenceTones[category.id]} />
        <div>
          <p className="m-0 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
            {category.exhibit}
          </p>
          <h2 className="m-0 mt-1 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-[var(--text-primary)]">
            {category.title}
          </h2>
          <p className="m-0 mt-3 text-sm leading-6 text-[var(--text-muted)]">{category.description}</p>
        </div>
      </div>
    </motion.button>
  )
}

export { EvidenceCard }
