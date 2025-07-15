"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Building, DollarSign, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

function CountUp({ end, duration = 2000, prefix = "", suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
      const nextCount = Math.floor(easeOutQuart * end)

      if (nextCount !== countRef.current) {
        countRef.current = nextCount
        setCount(nextCount)
      }

      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

interface StatItemProps {
  icon: React.ReactNode
  value: number
  prefix?: string
  suffix?: string
  label: string
  className?: string
}

function StatItem({ icon, value, prefix = "", suffix = "", label, className }: StatItemProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="mb-4 rounded-full bg-primary p-4 text-white">{icon}</div>
      <div className="text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
        <CountUp end={value} prefix={prefix} suffix={suffix} />
      </div>
      <p className="mt-2 text-lg font-medium text-muted-foreground">{label}</p>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <StatItem icon={<Building className="h-8 w-8" />} value={25} prefix="+"  suffix=" K" label="Proyectos en Progreso" />
          <StatItem
            icon={<DollarSign className="h-8 w-8" />}
            value={230}
            prefix="$"
            suffix=" M+"
            label="Volumen constructivo"
          />
          <StatItem
            icon={<BarChart3 className="h-8 w-8" />}
            value={16}
            
            label="Activos administrados"
          />
          <StatItem
            icon={<DollarSign className="h-8 w-8" />}
            value={186}
            prefix="$"
            suffix=" M+"
            label="Valor total de los activos"
          />
        </div>
      </div>
    </section>
  )
}
