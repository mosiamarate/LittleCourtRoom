import { ArrowRight, Search } from 'lucide-react'
import { EXPERIENCE_STEPS, STAGES } from '../../constants/experience.js'
import { evidenceCategories, getEvidenceCategory } from '../../data/evidence.js'
import { Button } from '../common/Button.jsx'
import { ExperienceLayout } from '../layout/ExperienceLayout.jsx'
import { EvidenceCard } from './EvidenceCard.jsx'
import { EvidenceReveal } from './EvidenceReveal.jsx'

function EvidenceScreen({ currentEvidence, onAnotherMessage, onOpenEvidence, onProceed, selectedEvidence }) {
  const activeCategory = getEvidenceCategory(selectedEvidence)

  return (
    <ExperienceLayout
      eyebrow="Exhibit A through C"
      eyebrowIcon={Search}
      progress={{ currentStep: STAGES.EVIDENCE, steps: EXPERIENCE_STEPS }}
      title="The evidence"
      description="The court has compiled a few pieces of extremely compelling evidence."
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="grid gap-4 md:grid-cols-3">
          {evidenceCategories.map((category) => (
            <EvidenceCard
              key={category.id}
              category={category}
              isSelected={selectedEvidence === category.id}
              onOpen={onOpenEvidence}
            />
          ))}
        </div>

        <div className="mt-5">
          {activeCategory && currentEvidence ? (
            <EvidenceReveal
              key={`${activeCategory.id}-${currentEvidence.id}`}
              category={activeCategory}
              content={currentEvidence}
              onAnotherMessage={onAnotherMessage}
            />
          ) : (
            <div className="rounded-[var(--radius-card)] border border-dashed border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--surface-primary)_72%,transparent)] p-8 text-center text-[var(--text-muted)]">
              Select any exhibit to review the evidence. No order is required.
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="w-full sm:w-auto" icon={ArrowRight} onClick={onProceed}>
            Continue to verdict
          </Button>
        </div>
      </div>
    </ExperienceLayout>
  )
}

export { EvidenceScreen }
