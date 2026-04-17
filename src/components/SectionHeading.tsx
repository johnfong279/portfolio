type SectionHeadingProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  eyebrow?: string
}

function SectionHeading({
  title,
  subtitle,
  align = 'left',
  eyebrow,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-4xl leading-tight text-neutral-900 md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-neutral-700 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
