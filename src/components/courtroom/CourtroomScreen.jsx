import { ArrowRight, Gavel, Scale } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { EXPERIENCE_STEPS, STAGES } from '../../constants/experience.js'
import { charges } from '../../data/charges.js'
import { Button } from '../common/Button.jsx'
import { Card } from '../common/Card.jsx'
import { IconContainer } from '../common/IconContainer.jsx'
import { ExperienceLayout } from '../layout/ExperienceLayout.jsx'
import { CaseDetails } from './CaseDetails.jsx'
import { ChargeCard } from './ChargeCard.jsx'
import { ObjectionButton } from './ObjectionButton.jsx'

function CourtroomScreen({ objectionResponse, onObjection, onProceed }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <ExperienceLayout
      eyebrow="Now in session"
      eyebrowIcon={Scale}
      progress={{ currentStep: STAGES.COURTROOM, steps: EXPERIENCE_STEPS }}
      title="The courtroom"
      description="A few serious allegations have been filed on your behalf."
    >
      <Card className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="section-eyebrow">Today’s docket</p>
            <h2 className="m-0 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--text-primary)]">
              Court is in session.
            </h2>
          </div>
          <motion.div
            animate={objectionResponse ? { rotate: [0, -10, 8, 0] } : { rotate: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: 'easeOut' }}
          >
            <IconContainer icon={Gavel} size="medium" tone="blush" />
          </motion.div>
        </div>

        <CaseDetails />
        <div className="mt-5 grid gap-4">
          {charges.map((charge) => <ChargeCard key={charge.id} charge={charge} />)}
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ObjectionButton onSubmit={onObjection} />
          <Button className="w-full sm:w-auto" icon={ArrowRight} onClick={onProceed}>
            Proceed, Your Honour
          </Button>
        </div>

        <motion.div
          animate={objectionResponse ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          aria-live="polite"
          className="mt-5 min-h-16 rounded-[var(--radius-control)] bg-[var(--surface-secondary)] px-5 py-4 text-sm leading-6 text-[var(--text-primary)]"
          role="status"
          transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' }}
        >
          {objectionResponse ? objectionResponse.text : 'The court is listening.'}
        </motion.div>
      </Card>
    </ExperienceLayout>
  )
}

export { CourtroomScreen }
