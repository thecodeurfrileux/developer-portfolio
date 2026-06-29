'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Ateliers', href: '#ateliers' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-border bg-background/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-serif text-2xl font-light tracking-tight text-ink"
        >
          Atelier Bloom
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-light tracking-wide text-stone transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
