import { AnimatePresence } from 'motion/react'
import { useExperience } from '../hooks/useExperience.js'
import { ExperienceRouter } from './ExperienceRouter.jsx'

function App() {
  const experience = useExperience()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <ExperienceRouter key={experience.stage} experience={experience} />
    </AnimatePresence>
  )
}

export default App
