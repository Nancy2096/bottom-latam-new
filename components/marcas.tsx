"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const images = [
  "/7eleven.png",
  "/autozone.png",
  "/boss.png",
  "/chevron.png",
  "/chipotle.png",
  "/choice.png",
  "/circle.png",
  "/hilton.png",
  "/hyatt.png",
  "/marriot.png",
  "/starbucks.png",
]

export function Marcas() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(4) // Mostrar 4 en pantallas grandes
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, images.length - itemsPerView)

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
    }, 3000)
    return () => clearInterval(interval)
  }, [maxIndex])

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(maxIndex, index))
  }

  return (
    <div className="relative">
      {/* Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12",
          currentIndex === 0 && "opacity-50 cursor-not-allowed"
        )}
        onClick={goToPrevious}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12",
          currentIndex === maxIndex && "opacity-50 cursor-not-allowed"
        )}
        onClick={goToNext}
        disabled={currentIndex === maxIndex}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Carousel */}
      <div className="overflow-hidden mx-12">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 flex justify-center items-center",
                itemsPerView === 1 && "w-full",
                itemsPerView === 2 && "w-[calc(50%-12px)]",
                itemsPerView === 3 && "w-[calc(33.333%-16px)]",
                itemsPerView === 4 && "w-[calc(25%-18px)]"
              )}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-contain mx-auto"
                style={{ width: "175px", height: "75px" }}
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
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex ? "bg-primary" : "bg-primary/30"
            )}
          />
        ))}
      </div>
    </div>
  )
}
