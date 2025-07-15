"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InvestmentCard } from "@/components/investment-card"
import { cn } from "@/lib/utils"

const investmentProjects = [
  {
    image: "/bg-autozone.png",
    title: "Autozone",
    location: "Hanford, CA",
    return: "10% cada 5 años",
    minimum: "$80,000 MXN",
    term: "15 Años",
    funded: 85,
    remaining: "5 días",
  },
  {
    image: "/bg-7eleven.jpg",
    title: "7-Eleven",
    location: "Modesto, CA",
    return: "7.74% anual",
    minimum: "$120,000 MXN",
    term: "15 años",
    funded: 62,
    remaining: "12 días",
  },
  {
    image: "/bg-starbucks.jpg",
    title: "Starbucks",
    location: "Kettleman City, CA",
    return: "20% anual",
    minimum: "$1,500,000 MXN",
    term: "1 año",
    funded: 78,
    remaining: "7 días",
  },
  {
    image: "/bg-bush.jpg",
    title: "Bush & 19th",
    location: "Leemore, CA",
    return: "15% anual",
    minimum: "$700,000 MXN",
    term: "2 años",
    funded: 45,
    remaining: "18 días",
  },
  {
    image: "/dallas-hotel-property.png",
    title: "Hotel Boutique Downtown",
    location: "Dallas, TX",
    return: "12-14% anual",
    minimum: "$40,000 USD",
    term: "42 meses",
    funded: 92,
    remaining: "3 días",
  },
  {
    image: "/industrial-warehouse-houston.png",
    title: "Complejo Industrial Houston",
    location: "Houston, TX",
    return: "9-11% anual",
    minimum: "$20,000 USD",
    term: "30 meses",
    funded: 67,
    remaining: "15 días",
  },
]

export function InvestmentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3) // xl: 3 items
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2) // md: 2 items
      } else {
        setItemsPerView(1) // sm: 1 item
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, investmentProjects.length - itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(maxIndex, index))
  }

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12",
          currentIndex === 0 && "opacity-50 cursor-not-allowed",
        )}
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        aria-label="Proyecto anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12",
          currentIndex === maxIndex && "opacity-50 cursor-not-allowed",
        )}
        onClick={goToNext}
        disabled={currentIndex === maxIndex}
        aria-label="Proyecto siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Carousel Container */}
      <div className="overflow-hidden mx-12">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {investmentProjects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0",
                itemsPerView === 1 && "w-full",
                itemsPerView === 2 && "w-[calc(50%-12px)]",
                itemsPerView === 3 && "w-[calc(33.333%-16px)]",
              )}
            >
              <InvestmentCard
                image={project.image}
                title={project.title}
                location={project.location}
                return={project.return}
                minimum={project.minimum}
                term={project.term}
                funded={project.funded}
                remaining={project.remaining}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex ? "bg-primary" : "bg-primary/30",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a grupo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
