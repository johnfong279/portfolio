import { contactContent } from '../data/content'
import Button from './Button'

function ContactCTA() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
        Contact
      </p>
      <h2 className="mt-4 font-heading text-4xl leading-tight md:text-6xl">
        {contactContent.headline}
      </h2>
      <p className="mt-5 text-lg leading-8 text-white/85 md:text-xl">
        {contactContent.subheadline}
      </p>
      <div className="mt-8">
        <Button
          href={contactContent.ctaHref}
          variant="outline"
          className="border-white/40 bg-white !text-neutral-900 hover:border-white hover:!text-accent-500"
        >
          {contactContent.ctaLabel}
        </Button>
      </div>
    </div>
  )
}

export default ContactCTA
