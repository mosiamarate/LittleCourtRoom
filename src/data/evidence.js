import { compliments } from './compliments.js'
import { encouragement } from './encouragement.js'
import { jokes } from './jokes.js'

const evidenceCategories = [
  {
    id: 'jokes',
    exhibit: 'Exhibit A',
    title: 'A terrible legal joke.',
    description: 'Admissible only in the court of extremely low expectations.',
    items: jokes,
  },
  {
    id: 'compliments',
    exhibit: 'Exhibit B',
    title: 'A little compliment.',
    description: 'Entered into evidence with complete sincerity.',
    items: compliments,
  },
  {
    id: 'encouragement',
    exhibit: 'Exhibit C',
    title: 'A reminder to rest.',
    description: 'The court considers this exhibit especially important.',
    items: encouragement,
  },
]

function getEvidenceCategory(categoryId) {
  return evidenceCategories.find((category) => category.id === categoryId) ?? null
}

export { evidenceCategories, getEvidenceCategory }
