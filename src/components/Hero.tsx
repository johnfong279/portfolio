import { heroContent } from '../data/content'
import Button from './Button'

function Hero() {
  return (
    <div className="grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
      <div className="max-w-2xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-accent-500">
          {heroContent.eyebrow}
        </p>
        <h1 className="font-heading text-4xl leading-[1.02] text-neutral-900 sm:text-5xl md:text-7xl">
          {heroContent.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8 md:text-xl">
          {heroContent.subheadline}
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button href="#contact">{heroContent.ctaLabel}</Button>
          <p className="text-sm text-neutral-600">{heroContent.secondaryText}</p>
        </div>
      </div>

      <div className="relative min-h-[120px] sm:min-h-[160px]">
        <div className="relative ml-auto max-w-[260px] rounded-[1.5rem] border border-white/80 bg-white/90 px-5 py-4 shadow-soft sm:absolute sm:right-2 sm:bottom-0">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">Typical outcome</p>
          <p className="mt-1 text-xl font-semibold text-neutral-900 sm:text-2xl">
            More qualified enquiries
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
