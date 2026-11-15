import { Heart, Mail, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

function AnimatedEnvelope({ isOpening, onOpened }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative mx-auto grid h-44 w-52 place-items-center sm:h-52 sm:w-60" aria-hidden="true">
      <Sparkles className="absolute left-0 top-5 text-[var(--accent-primary)]" size={22} strokeWidth={1.6} />
      <Heart className="absolute bottom-4 right-1 text-[var(--accent-primary)]" size={20} strokeWidth={1.6} />
      <motion.div
        animate={isOpening ? { rotate: -4, scale: 0.94, y: -10 } : { rotate: 0, scale: 1, y: 0 }}
        className="relative grid h-32 w-44 place-items-center rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--surface-secondary)] shadow-[var(--shadow-card)] sm:h-36 sm:w-52"
        onAnimationComplete={() => {
          if (isOpening) {
            onOpened()
          }
        }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.36, ease: 'easeOut' }}
      >
        <motion.div
          animate={isOpening ? { rotateX: 180, y: -4 } : { rotateX: 0, y: 0 }}
          className="absolute inset-x-0 top-0 h-16 origin-top rounded-t-[1.45rem] border-x border-t border-[var(--border-subtle)] bg-[var(--surface-tertiary)]"
          transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
        />
        <Mail className="relative z-10 text-[var(--accent-primary)]" size={62} strokeWidth={1.45} />
      </motion.div>
    </div>
  )
}

export { AnimatedEnvelope }
