import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        centered && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
