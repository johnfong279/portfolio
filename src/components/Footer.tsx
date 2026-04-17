import { footerContent } from '../data/content'

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-neutral-900">{footerContent.name}</p>
          <p className="mt-1">
            © 2026 {footerContent.name}. Built for service businesses that want a clearer web presence.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {footerContent.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 font-medium text-neutral-700 hover:border-accent-500 hover:text-accent-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
