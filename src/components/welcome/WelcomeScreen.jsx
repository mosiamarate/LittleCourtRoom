import { ArrowRight, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { EXPERIENCE_STEPS, STAGES } from '../../constants/experience.js'
import { Button } from '../common/Button.jsx'
import { Card } from '../common/Card.jsx'
import { ExperienceLayout } from '../layout/ExperienceLayout.jsx'
import { AnimatedEnvelope } from './AnimatedEnvelope.jsx'

function WelcomeScreen({ onAccept }) {
  const [isAccepted, setIsAccepted] = useState(false)
  const [showInvitation, setShowInvitation] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <ExperienceLayout
      eyebrow="A very official notice"
      eyebrowIcon={Sparkles}
      progress={{ currentStep: STAGES.SUMMONS, steps: EXPERIENCE_STEPS }}
      title="Good evening, Counsel."
      description="You have been summoned to an extremely serious court proceeding."
    >
      <Card className="mx-auto max-w-xl text-center">
        <AnimatedEnvelope
          isOpening={isAccepted}
          onOpened={() => {
            if (isAccepted) {
              setShowInvitation(true)
            }
          }}
        />
        <p className="m-0 mt-5 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
          Your presence is requested.
          <br />
          Your seriousness is optional.
        </p>
        <motion.p
          animate={showInvitation ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          className="m-0 mt-4 min-h-6 text-sm font-semibold text-[var(--accent-primary)]"
          onAnimationComplete={() => {
            if (showInvitation) {
              onAccept()
            }
          }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' }}
        >
          {showInvitation ? 'Summons accepted. The court is now in session.' : null}
        </motion.p>
        <Button
          className="mt-6 w-full sm:w-auto"
          disabled={isAccepted}
          icon={ArrowRight}
          onClick={() => setIsAccepted(true)}
        >
          {isAccepted ? 'Court is convening…' : 'Accept summons'}
        </Button>
      </Card>
    </ExperienceLayout>
  )
}

export { WelcomeScreen }
