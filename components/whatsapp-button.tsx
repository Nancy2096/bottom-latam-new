"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    // Usamos window.open con un try-catch para manejar posibles errores
    try {
      window.open(
        "https://wa.me/13055551234?text=Hola,%20estoy%20interesado%20en%20invertir%20con%20Bottom%20Line%20LATAM%20en%20bienes%20raíces%20en%20EE.UU.",
        "_blank",
        "noopener,noreferrer",
      )
    } catch (error) {
      console.error("Error al abrir WhatsApp:", error)
      // Fallback en caso de error
      alert("Por favor contáctenos al +1 (305) 555-1234")
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-lg">
            Chatea con nosotros
          </div>
        )}
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg"
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Contactar por WhatsApp</span>
        </Button>
      </div>
    </div>
  )
}
