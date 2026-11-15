const STAGES = {
  COURTROOM: 'courtroom',
  EVIDENCE: 'evidence',
  LETTER: 'letter',
  SUMMONS: 'summons',
  VERDICT: 'verdict',
}

const EXPERIENCE_STEPS = [
  { id: STAGES.SUMMONS, label: 'Summons' },
  { id: STAGES.COURTROOM, label: 'Courtroom' },
  { id: STAGES.EVIDENCE, label: 'Evidence' },
  { id: STAGES.VERDICT, label: 'Verdict' },
  { id: STAGES.LETTER, label: 'Letter' },
]

const OBJECTION_RESPONSES = [
  { id: 'overruled', text: 'Objection overruled! The court insists on a smile.' },
  { id: 'enthusiasm', text: 'Counsel, please control your enthusiasm.' },
  { id: 'gavel-disagrees', text: 'The objection has been noted. The gavel disagrees.' },
  {
    id: 'take-a-break',
    text: 'Your Honour, the evidence clearly indicates that you need a break.',
  },
  {
    id: 'serious',
    text: 'The court requests that Counsel stop being so serious for at least one minute.',
  },
]

export { EXPERIENCE_STEPS, OBJECTION_RESPONSES, STAGES }
