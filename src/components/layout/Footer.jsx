import { Scale } from 'lucide-react'

function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[46rem] flex-col items-center gap-2 border-t border-[var(--border-subtle)] pt-6 text-center text-sm text-[var(--text-muted)] sm:flex-row sm:justify-between sm:text-left">
      <p className="m-0 inline-flex items-center gap-2 font-semibold text-[var(--accent-primary)]">
        <Scale aria-hidden="true" size={17} strokeWidth={1.7} />
        Little Courtroom
      </p>
      <p className="m-0">All proceedings are strictly serious.</p>
      <p className="m-0">
        Made with care by{' '}
        <a
          className="font-semibold text-[var(--accent-primary)] underline decoration-[var(--accent-primary)] decoration-1 underline-offset-2 transition-colors hover:text-[var(--accent-primary-hover)] hover:decoration-[var(--accent-primary-hover)]"
          href="https://www.linkedin.com/in/mosiamarate"
          rel="noopener noreferrer"
          target="_blank"
        >
          Shortsighted Dev
        </a>
      </p>
    </footer>
  )
}

export { Footer }
