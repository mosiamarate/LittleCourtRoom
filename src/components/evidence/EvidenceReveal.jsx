import { FileText, Heart, Lightbulb, RotateCcw } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '../common/Button.jsx'
import { IconContainer } from '../common/IconContainer.jsx'

const revealIcons = {
  compliments: Heart,
  encouragement: Lightbulb,
  jokes: FileText,
}

function EvidenceReveal({ category, content, onAnotherMessage }) {
  const Icon = revealIcons[category.id] ?? FileText
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      aria-live="polite"
      className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6 text-center shadow-[var(--shadow-card)] sm:p-8"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      role="status"
      transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: 'easeOut' }}
    >
      <IconContainer className="mx-auto" icon={Icon} size="large" tone="blush" />
      <p className="section-eyebrow mt-5">{category.exhibit} revealed</p>
      <p className="m-0 font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug text-[var(--text-primary)] sm:text-3xl">
        “{content.text}”
      </p>
      <Button className="mt-6" icon={RotateCcw} iconPosition="left" onClick={onAnotherMessage} variant="quiet">
        Another message
      </Button>
    </motion.section>
  )
}

export { EvidenceReveal }
