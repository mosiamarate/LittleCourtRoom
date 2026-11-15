import { useState } from 'react'
import { OBJECTION_RESPONSES, STAGES } from '../constants/experience.js'
import { getEvidenceCategory } from '../data/evidence.js'
import { getVerdict } from '../data/verdicts.js'
import { selectRandomContent } from '../utils/randomContent.js'

function useExperience() {
  const [currentEvidence, setCurrentEvidence] = useState(null)
  const [letterVisible, setLetterVisible] = useState(false)
  const [objectionResponse, setObjectionResponse] = useState(null)
  const [selectedEvidence, setSelectedEvidence] = useState(null)
  const [selectedVerdict, setSelectedVerdict] = useState(null)
  const [stage, setStage] = useState(STAGES.SUMMONS)

  function acceptSummons() {
    if (stage === STAGES.SUMMONS) {
      setStage(STAGES.COURTROOM)
    }
  }

  function proceedToEvidence() {
    if (stage === STAGES.COURTROOM) {
      setStage(STAGES.EVIDENCE)
    }
  }

  function proceedToVerdict() {
    if (stage === STAGES.EVIDENCE) {
      setStage(STAGES.VERDICT)
    }
  }

  function proceedToLetter() {
    if (stage === STAGES.VERDICT) {
      setLetterVisible(false)
      setStage(STAGES.LETTER)
    }
  }

  function openEvidence(categoryId) {
    if (stage !== STAGES.EVIDENCE) {
      return
    }

    const category = getEvidenceCategory(categoryId)
    if (!category) {
      return
    }

    const previousId = selectedEvidence === categoryId ? currentEvidence?.id : undefined
    const nextContent = selectRandomContent(category.items, previousId)

    setSelectedEvidence(categoryId)
    setCurrentEvidence(nextContent)
  }

  function generateAnotherMessage() {
    if (stage !== STAGES.EVIDENCE || !selectedEvidence) {
      return
    }

    const category = getEvidenceCategory(selectedEvidence)
    if (!category) {
      return
    }

    setCurrentEvidence(selectRandomContent(category.items, currentEvidence?.id))
  }

  function submitObjection() {
    if (stage !== STAGES.COURTROOM) {
      return
    }

    setObjectionResponse(selectRandomContent(OBJECTION_RESPONSES, objectionResponse?.id))
  }

  function selectVerdict(verdictId) {
    if (stage === STAGES.VERDICT && getVerdict(verdictId)) {
      setSelectedVerdict(verdictId)
    }
  }

  function openLetter() {
    if (stage === STAGES.LETTER) {
      setLetterVisible(true)
    }
  }

  function closeLetter() {
    if (stage === STAGES.LETTER) {
      setLetterVisible(false)
    }
  }

  function restartExperience() {
    setCurrentEvidence(null)
    setLetterVisible(false)
    setObjectionResponse(null)
    setSelectedEvidence(null)
    setSelectedVerdict(null)
    setStage(STAGES.SUMMONS)
  }

  return {
    acceptSummons,
    closeLetter,
    currentEvidence,
    generateAnotherMessage,
    letterVisible,
    objectionResponse,
    openEvidence,
    openLetter,
    proceedToEvidence,
    proceedToLetter,
    proceedToVerdict,
    restartExperience,
    selectVerdict,
    selectedEvidence,
    selectedVerdict,
    stage,
    submitObjection,
  }
}

export { useExperience }
