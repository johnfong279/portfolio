import { testimonials } from '../data/content'
import SectionHeading from './SectionHeading'
import TestimonialCard from './TestimonialCard'

function Testimonials() {
  return (
    <div>
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say after launch"
        subtitle="Short, specific feedback matters more than generic praise. These are the kinds of outcomes clients usually point to first."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
