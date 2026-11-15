import { ArrowRight, BadgeCheck, Gavel, Scale } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { EXPERIENCE_STEPS, STAGES } from '../../constants/experience.js'
import { getVerdict, verdicts } from '../../data/verdicts.js'
import { Button } from '../common/Button.jsx'
import { IconContainer } from '../common/IconContainer.jsx'
import { ExperienceLayout } from '../layout/ExperienceLayout.jsx'
import { VerdictResult } from './VerdictResult.jsx'

const verdictIcons = {
  awesome: BadgeCheck,
  dismissed: Scale,
  holiday: Gavel,
}

function VerdictScreen({ onContinue, onSelectVerdict, selectedVerdict }) {
  const selected = getVerdict(selectedVerdict)
  const prefersReducedMotion = useReducedMotion()

  return (
    <ExperienceLayout
      eyebrow="The court has decided"
      eyebrowIcon={Scale}
      progress={{ currentStep: STAGES.VERDICT, steps: EXPERIENCE_STEPS }}
      title="The final verdict"
      description="Happily, every possible outcome is excellent news for Counsel."
    >
      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          animate={selected ? { rotate: [0, -8, 7, 0] } : { rotate: 0 }}
          className="mx-auto mb-6 w-fit"
          transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeOut' }}
        >
          <IconContainer icon={Gavel} size="large" tone="blush" />
        </motion.div>

        <div className="grid gap-4">
          {verdicts.map((verdict) => {
            const Icon = verdictIcons[verdict.id] ?? Scale
            const isSelected = selectedVerdict === verdict.id

            return (
              <motion.button
                key={verdict.id}
                aria-pressed={isSelected}
                className={`flex w-full items-center gap-4 rounded-[var(--radius-control)] border p-5 text-left transition-colors duration-200 sm:p-6 ${
                  isSelected
                    ? 'border-[var(--accent-primary)] bg-[var(--surface-secondary)] shadow-[var(--shadow-control)]'
                    : 'border-[var(--border-subtle)] bg-[var(--surface-primary)] hover:bg-[var(--surface-secondary)]'
                }`}
                onClick={() => onSelectVerdict(verdict.id)}
                type="button"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              >
                <IconContainer icon={Icon} size="small" tone={isSelected ? 'lavender' : 'cream'} />
                <span>
                  <span className="block font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-[var(--text-primary)]">
                    {verdict.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-[var(--text-muted)]">
                    Choose this ruling.
                  </span>
                </span>
              </motion.button>
            )
          })}
        </div>

        {selected ? <div className="mt-5"><VerdictResult verdict={selected} /></div> : null}
        {selected ? (
          <div className="mt-6 flex justify-end">
            <Button className="w-full sm:w-auto" icon={ArrowRight} onClick={onContinue}>
              A message from the developer
            </Button>
          </div>
        ) : null}
      </div>
    </ExperienceLayout>
  )
}

export { VerdictScreen }
