'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  delay?: number
}

export function Reveal({
  as: Tag = 'div',
  delay = 0,
  className,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
