export function SiteFooter() {
  return (
    <footer className="w-full bg-dark text-dark-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <span className="font-heading text-2xl font-medium text-gold">TL</span>
        <p className="text-sm text-dark-foreground/70">
          © {new Date().getFullYear()} Titouan Laurent — Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
