"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#about", label: "Notre Maison" },
  { href: "#products", label: "Nos créations" },
  { href: "#gallery", label: "Galerie" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className={cn(
            "font-heading text-xl font-semibold tracking-tight transition-colors md:text-2xl",
            scrolled ? "text-foreground" : "text-card",
          )}
        >
          Maison Lefèvre
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  scrolled ? "text-foreground" : "text-card/90",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent md:inline-block"
        >
          Nous trouver
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className={cn(
            "md:hidden",
            scrolled || open ? "text-foreground" : "text-card",
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
