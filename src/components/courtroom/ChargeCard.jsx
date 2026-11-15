import { BriefcaseBusiness, Clock, Coffee } from 'lucide-react'
import { IconContainer } from '../common/IconContainer.jsx'

const chargeIcons = {
  briefcase: BriefcaseBusiness,
  clock: Clock,
  coffee: Coffee,
}

function ChargeCard({ charge }) {
  const Icon = chargeIcons[charge.icon] ?? BriefcaseBusiness

  return (
    <article className="rounded-[var(--radius-control)] border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-5 text-left sm:p-6">
      <div className="flex items-start gap-4">
        <IconContainer icon={Icon} size="small" tone="blush" />
        <div>
          <p className="m-0 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
            {charge.code}
          </p>
          <h2 className="m-0 mt-1 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-[var(--text-primary)]">
            {charge.title}
          </h2>
          <p className="m-0 mt-3 leading-7 text-[var(--text-muted)]">{charge.description}</p>
        </div>
      </div>
    </article>
  )
}

export { ChargeCard }
