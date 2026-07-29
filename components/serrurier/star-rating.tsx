import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({
  value,
  className,
  size = 'md',
}: {
  value: number
  className?: string
  size?: 'sm' | 'md'
}) {
  const sizeClass = size === 'sm' ? 'size-3.5' : 'size-4'
  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      role="img"
      aria-label={`Note de ${value} sur 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClass,
            i < Math.round(value)
              ? 'fill-accent text-accent'
              : 'fill-muted text-muted',
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
