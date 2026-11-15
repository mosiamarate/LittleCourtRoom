import { Mail, PenLine, Send } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { IconContainer } from '../common/IconContainer.jsx'

function LetterEnvelope({ onOpen }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.button
      aria-label="Open the message from the developer"
      className="group relative mx-auto grid w-full max-w-xl place-items-center overflow-hidden rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-6 py-12 text-center shadow-[var(--shadow-card)] sm:px-10 sm:py-16"
      onClick={onOpen}
      type="button"
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
    >
      <PenLine
        className="absolute left-6 top-6 text-[var(--accent-primary)] opacity-55"
        aria-hidden="true"
        size={24}
        strokeWidth={1.5}
      />
      <Send
        className="absolute bottom-6 right-6 text-[var(--accent-primary)] opacity-55"
        aria-hidden="true"
        size={22}
        strokeWidth={1.5}
      />
      <motion.div
        className="grid h-24 w-32 place-items-center rounded-[1.25rem] border border-[var(--border-subtle)] bg-[var(--surface-secondary)] sm:h-28 sm:w-40"
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <IconContainer icon={Mail} size="large" tone="cream" />
      </motion.div>
      <p className="section-eyebrow mb-0 mt-7">Private correspondence</p>
      <p className="m-0 mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--text-primary)]">
        A message from the developer
      </p>
      <p className="m-0 mt-4 max-w-md leading-7 text-[var(--text-muted)]">
        Open whenever you feel like it. No reply is required.
      </p>
    </motion.button>
  )
}

export { LetterEnvelope }
