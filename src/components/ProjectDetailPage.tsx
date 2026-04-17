import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/content'

function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="font-heading text-4xl text-neutral-900">Project not found</h1>
        <Link
          to="/"
          className="mt-6 text-sm font-semibold text-accent-500 hover:text-accent-600"
        >
          &larr; Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-transparent text-neutral-700">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-lg font-semibold tracking-[0.08em] text-neutral-900"
          >
            JF Studio
          </Link>
          <Link
            to="/#work"
            className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
          >
            &larr; All projects
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36">
        {/* Back link */}
        <Link
          to="/#work"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900"
        >
          <span>&larr;</span> Back to projects
        </Link>

        {/* Hero */}
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-500">
              {project.name}
            </p>
            <h1 className="mt-3 font-heading text-3xl leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
              {project.summary}
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-8 text-base leading-7 text-neutral-700">
              {project.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-100 shadow-soft">
            <img
              src={project.thumbnail}
              alt={`${project.name} overview`}
              className="w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Features */}
        <section className="mt-24">
          <div className="mb-12 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-500">
              What it does
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Key Features
            </h2>
          </div>

          <div className="space-y-0">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="group grid grid-cols-[auto_1fr] items-start gap-6 border-t border-neutral-200 py-8 last:border-b md:grid-cols-[80px_1fr] md:gap-10 md:py-10"
              >
                <span className="font-heading text-5xl leading-none text-accent-500/20 transition-colors group-hover:text-accent-500 md:text-6xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-neutral-900 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mt-20">
          <h2 className="font-heading text-3xl text-neutral-900">Screenshots</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {project.screenshots.map((screenshot, i) => (
              <button
                key={screenshot.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft transition-shadow hover:shadow-[0_20px_60px_rgba(28,25,23,0.12)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={screenshot.src}
                    alt={screenshot.label}
                    className="w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 py-3 text-left">
                  <p className="text-sm font-medium text-neutral-900">{screenshot.label}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-[90vw] sm:w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.screenshots[lightboxIndex].src}
              alt={project.screenshots[lightboxIndex].label}
              className="max-h-[72vh] w-full rounded-xl object-contain sm:max-h-[85vh] sm:w-auto"
            />
            <p className="mt-3 text-center text-sm font-medium text-white/90">
              {project.screenshots[lightboxIndex].label}
            </p>

            {/* Close */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-neutral-900 shadow-soft hover:bg-neutral-100"
            >
              &times;
            </button>

            <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={() => setLightboxIndex((current) => (current !== null && current > 0 ? current - 1 : current))}
                disabled={lightboxIndex === 0}
                className="flex h-11 min-w-[88px] items-center justify-center rounded-full bg-white/90 px-4 text-lg font-bold text-neutral-900 shadow-soft disabled:cursor-not-allowed disabled:opacity-40"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((current) =>
                    current !== null && current < project.screenshots.length - 1 ? current + 1 : current,
                  )
                }
                disabled={lightboxIndex === project.screenshots.length - 1}
                className="flex h-11 min-w-[88px] items-center justify-center rounded-full bg-white/90 px-4 text-lg font-bold text-neutral-900 shadow-soft disabled:cursor-not-allowed disabled:opacity-40"
              >
                &rsaquo;
              </button>
            </div>

            {lightboxIndex > 0 && (
              <button
                type="button"
                onClick={() => setLightboxIndex(lightboxIndex - 1)}
                className="absolute top-1/2 -left-14 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-neutral-900 shadow-soft hover:bg-white sm:flex"
              >
                &lsaquo;
              </button>
            )}

            {lightboxIndex < project.screenshots.length - 1 && (
              <button
                type="button"
                onClick={() => setLightboxIndex(lightboxIndex + 1)}
                className="absolute top-1/2 -right-14 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-neutral-900 shadow-soft hover:bg-white sm:flex"
              >
                &rsaquo;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetailPage
