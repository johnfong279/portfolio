import { processSteps } from '../data/content'
import SectionHeading from './SectionHeading'

function Process() {
  return (
    <div>
      <SectionHeading
        eyebrow="Process"
        title="A simple process that keeps projects moving"
        subtitle="Most clients hire me because they want less ambiguity, not more. This is the structure I use to keep things calm and predictable."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-4">
        {processSteps.map((step, index) => (
          <div key={step.title} className="relative rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-soft">
            {index < processSteps.length - 1 ? (
              <div className="absolute left-11 top-11 hidden h-px w-[calc(100%-1.5rem)] bg-neutral-200 md:block" />
            ) : null}
            <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-500 text-sm font-semibold text-white">
              {index + 1}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-neutral-900">{step.title}</h3>
            <p className="mt-3 text-base leading-7 text-neutral-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Process
