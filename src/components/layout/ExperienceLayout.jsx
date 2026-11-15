import { useId } from 'react'
import { Footer } from './Footer.jsx'
import { ProgressIndicator } from './ProgressIndicator.jsx'

function ExperienceLayout({
  children,
  className = '',
  description,
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  headerAction,
  progress,
  title,
}) {
  const titleId = useId()

  return (
    <main className={`experience-layout ${className}`} aria-labelledby={title ? titleId : undefined}>
      <div className="mx-auto flex w-full max-w-[56.25rem] flex-col gap-8 sm:gap-10">
        {progress ? <ProgressIndicator {...progress} /> : null}
        <header className="relative mx-auto w-full max-w-[46rem] text-center">
          {headerAction ? <div className="absolute right-0 top-0">{headerAction}</div> : null}
          {eyebrow ? (
            <p className="section-eyebrow">
              {EyebrowIcon ? <EyebrowIcon aria-hidden="true" size={15} strokeWidth={1.8} /> : null}
              {eyebrow}
            </p>
          ) : null}
          {title ? <h1 id={titleId} className="experience-title">{title}</h1> : null}
          {description ? <p className="experience-description">{description}</p> : null}
        </header>
        {children}
        <Footer />
      </div>
    </main>
  )
}

export { ExperienceLayout }
