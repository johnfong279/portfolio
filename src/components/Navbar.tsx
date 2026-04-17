import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../data/content'
import Button from './Button'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-[0.08em] text-neutral-900">
          JF Studio
        </Link>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 md:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="px-5 py-2.5 text-sm">
            Book a call
          </Button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t border-neutral-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" className="mt-2 w-full" variant="primary">
              Book a call
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
