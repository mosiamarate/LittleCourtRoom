import { Landmark, Scale } from 'lucide-react'
import { IconContainer } from '../common/IconContainer.jsx'

function CaseDetails() {
  return (
    <div className="flex flex-col gap-4 rounded-[var(--radius-control)] bg-[var(--surface-tertiary)] p-5 text-left sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex items-center gap-4">
        <IconContainer icon={Landmark} size="medium" tone="cream" />
        <div>
          <p className="m-0 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
            Case no. 001/SMILE/2026
          </p>
          <p className="m-0 mt-1 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-[var(--text-primary)]">
            The People vs. A Very Awesome Lawyer.
          </p>
        </div>
      </div>
      <Scale className="self-end text-[var(--accent-primary)] sm:self-auto" aria-hidden="true" size={28} strokeWidth={1.5} />
    </div>
  )
}

export { CaseDetails }
