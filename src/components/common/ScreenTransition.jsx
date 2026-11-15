import { motion, useReducedMotion } from 'motion/react'

function ScreenTransition({ children, className = '' }) {
  const prefersReducedMotion = useReducedMotion()
  const animation = prefersReducedMotion
    ? { initial: false }
    : {
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        initial: { opacity: 0, y: 12 },
      }

  return (
    <motion.div
      className={className}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      {...animation}
    >
      {children}
    </motion.div>
  )
}

export { ScreenTransition }
