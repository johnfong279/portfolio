import { aboutContent } from '../data/content'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
      <div className="aspect-[4/5] min-h-[320px] w-full overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 shadow-soft">
        <img
          src="/self/self image.JPG"
          alt={aboutContent.imageLabel}
          className="h-full w-full object-cover object-[center_20%]"
        />
      </div>

      <div>
        <SectionHeading eyebrow="About" title={aboutContent.title} />
        <div className="mt-8 space-y-5 text-base leading-8 text-neutral-700 md:text-lg">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
