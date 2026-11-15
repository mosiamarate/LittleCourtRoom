const verdicts = [
  {
    id: 'holiday',
    title: 'Guilty of needing a holiday.',
    description: 'Sentence: a future day with no alarms, no urgent emails, and excellent snacks.',
    icon: 'gavel',
  },
  {
    id: 'awesome',
    title: 'Guilty of being awesome.',
    description: 'The evidence is overwhelming: you are capable, kind, and very easy to root for.',
    icon: 'badge-check',
  },
  {
    id: 'dismissed',
    title: 'Case dismissed — go get some rest.',
    description: 'All remaining business is hereby postponed in favour of a peaceful, unhurried evening.',
    icon: 'scale',
  },
]

function getVerdict(verdictId) {
  return verdicts.find((verdict) => verdict.id === verdictId) ?? null
}

export { getVerdict, verdicts }
