import { trustContent } from '../data/content'

function TrustStrip() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <p className="max-w-2xl text-sm font-medium leading-7 text-neutral-700 md:text-base">
        {trustContent.metric}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {trustContent.logos.map((logo) => (
          <div
            key={logo}
            className="flex min-h-[58px] items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-3 text-center text-xs font-semibold uppercase leading-[1.35] tracking-[0.18em] text-neutral-600"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustStrip
