import type { Testimonial } from '../data/content'

type TestimonialCardProps = {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-soft">
      <p className="text-lg leading-8 text-neutral-700">"{testimonial.quote}"</p>
      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-sm font-semibold text-white">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-neutral-900">{testimonial.name}</p>
          <p className="text-sm text-neutral-600">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
