import Link from 'next/link'
import { Phone, MessageSquareText } from 'lucide-react'
import { SITE } from '@/lib/site'

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${SITE.phoneHref}`}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-accent text-sm font-semibold text-accent-foreground"
        >
          <Phone className="size-5" aria-hidden="true" />
          Appeler
        </a>
        <Link
          href="/#contact"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
        >
          <MessageSquareText className="size-5" aria-hidden="true" />
          Devis gratuit
        </Link>
      </div>
    </div>
  )
}
