"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=1600&query=miami skyline at sunset",
    alt: "Miami skyline",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=1600&query=new york city skyline with skyscrapers",
    alt: "New York skyline",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=1600&query=los angeles downtown skyline",
    alt: "Los Angeles skyline",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}
