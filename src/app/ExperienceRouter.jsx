import { STAGES } from '../constants/experience.js'
import { CourtroomScreen } from '../components/courtroom/CourtroomScreen.jsx'
import { EvidenceScreen } from '../components/evidence/EvidenceScreen.jsx'
import { LetterScreen } from '../components/letter/LetterScreen.jsx'
import { ScreenTransition } from '../components/common/ScreenTransition.jsx'
import { VerdictScreen } from '../components/verdict/VerdictScreen.jsx'
import { WelcomeScreen } from '../components/welcome/WelcomeScreen.jsx'

function ExperienceRouter({ experience }) {
  const screenProps = {
    courtroom: {
      objectionResponse: experience.objectionResponse,
      onObjection: experience.submitObjection,
      onProceed: experience.proceedToEvidence,
    },
    evidence: {
      currentEvidence: experience.currentEvidence,
      onAnotherMessage: experience.generateAnotherMessage,
      onOpenEvidence: experience.openEvidence,
      onProceed: experience.proceedToVerdict,
      selectedEvidence: experience.selectedEvidence,
    },
    letter: {
      isOpen: experience.letterVisible,
      onClose: experience.closeLetter,
      onOpen: experience.openLetter,
      onRestart: experience.restartExperience,
    },
    summons: { onAccept: experience.acceptSummons },
    verdict: {
      onContinue: experience.proceedToLetter,
      onSelectVerdict: experience.selectVerdict,
      selectedVerdict: experience.selectedVerdict,
    },
  }

  const screenByStage = {
    [STAGES.COURTROOM]: <CourtroomScreen {...screenProps.courtroom} />,
    [STAGES.EVIDENCE]: <EvidenceScreen {...screenProps.evidence} />,
    [STAGES.LETTER]: <LetterScreen {...screenProps.letter} />,
    [STAGES.SUMMONS]: <WelcomeScreen {...screenProps.summons} />,
    [STAGES.VERDICT]: <VerdictScreen {...screenProps.verdict} />,
  }

  return <ScreenTransition>{screenByStage[experience.stage] ?? screenByStage[STAGES.SUMMONS]}</ScreenTransition>
}

export { ExperienceRouter }
