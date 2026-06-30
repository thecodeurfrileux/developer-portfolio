"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, animate } from "framer-motion"

type Stat = {
  value: number
  suffix?: string
  caption: string
}

const stats: Stat[] = [
  {
    value: 88,
    suffix: "%",
    caption: "des clients vérifient une entreprise sur Google avant de s'y rendre",
  },
  {
    value: 76,
    suffix: "%",
    caption: "se déplacent en magasin dans les 24h après leur recherche en ligne",
  },
  {
    value: 6,
    caption: "sites consultés en moyenne avant de choisir un commerce",
  },
]

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { amount: 0.5 })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplay(Math.round(latest))
    })
    return unsubscribe
  }, [count])

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.2, ease: "easeOut" })
      return controls.stop
    }
    count.set(0)
  }, [inView, value, count])

  return (
    <span ref={ref} className="font-heading text-6xl font-semibold text-gold md:text-7xl">
      {display}
      {suffix}
    </span>
  )
}

export function WhyMatters() {
  return (
    <section className="w-full bg-[#FDF6F3] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-balance text-center font-heading text-3xl font-medium text-foreground md:text-4xl"
        >
          Pourquoi un site change tout
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.caption}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              className="flex flex-col items-center rounded-xl border border-border bg-card px-8 py-10 text-center shadow-sm"
            >
              <CountUp value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 max-w-[16rem] leading-relaxed text-muted-foreground">
                {stat.caption}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm italic text-muted-foreground">
          Sources : Solocal, Hi-Commerce — étude SEO local France 2026
        </p>
      </div>
    </section>
  )
}
