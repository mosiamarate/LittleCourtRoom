import { ArrowLeft, Mail, RotateCcw, X } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { EXPERIENCE_STEPS, STAGES } from '../../constants/experience.js'
import { letterContent } from '../../data/letter.js'
import { Button } from '../common/Button.jsx'
import { IconContainer } from '../common/IconContainer.jsx'
import { ExperienceLayout } from '../layout/ExperienceLayout.jsx'
import { LetterEnvelope } from './LetterEnvelope.jsx'

function LetterScreen({ isOpen, onClose, onOpen, onRestart }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <ExperienceLayout
      eyebrow="The court is adjourned"
      eyebrowIcon={Mail}
      progress={{ currentStep: STAGES.LETTER, steps: EXPERIENCE_STEPS }}
      title="A message from the developer"
      description="One last small thing, written with care."
    >
      <div className="mx-auto w-full max-w-2xl">
        {isOpen ? (
          <motion.article
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6 shadow-[var(--shadow-card)] sm:p-10"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' }}
          >
            <IconContainer className="mb-7" icon={Mail} size="medium" tone="blush" />
            <h2 className="m-0 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[var(--text-primary)]">
              {letterContent.greeting}
            </h2>
            <div className="mt-7 grid gap-5 text-[var(--text-muted)]">
              {letterContent.paragraphs.map((paragraph) => <p key={paragraph} className="m-0 leading-7">{paragraph}</p>)}
            </div>
            <p className="mb-0 mt-8 font-[family-name:var(--font-handwritten)] text-2xl leading-tight text-[var(--accent-primary)]">
              {letterContent.closing}
              <br />
              {letterContent.signature}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button icon={X} iconPosition="left" onClick={onClose} variant="quiet">
                Close letter
              </Button>
              <Button icon={ArrowLeft} iconPosition="left" onClick={onRestart}>
                Back to welcome
              </Button>
            </div>
          </motion.article>
        ) : (
          <div>
            <LetterEnvelope onOpen={onOpen} />
            <div className="mt-6 flex justify-center">
              <Button icon={RotateCcw} iconPosition="left" onClick={onRestart} variant="quiet">
                Replay experience
              </Button>
            </div>
          </div>
        )}
      </div>
    </ExperienceLayout>
  )
}

export { LetterScreen }
