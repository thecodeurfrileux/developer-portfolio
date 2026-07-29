import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, KeyRound } from 'lucide-react'
import { SITE } from '@/lib/site'
import { SERVICES } from '@/lib/services'
import { CITIES } from '@/lib/cities'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold">
            <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <KeyRound className="size-5" aria-hidden="true" />
            </span>
            {SITE.name}
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Serrurier artisan à Aulnay-sous-Bois (93600). Dépannage en urgence,
            installation et sécurisation, {SITE.hours}. Tarifs annoncés à l&apos;avance.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60">
            {SITE.insurance}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
            Nos services
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/serrurerie/${s.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
            Zone d&apos;intervention
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/zone-intervention/${c.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  Serrurier {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li>
              <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2 hover:text-accent">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/a-propos" className="hover:text-accent">
              À propos
            </Link>
            <Link href="/zone-intervention" className="hover:text-accent">
              Zone d&apos;intervention
            </Link>
            <Link href="/mentions-legales" className="hover:text-accent">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
