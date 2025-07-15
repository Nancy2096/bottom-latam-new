"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialProps {
  quote: string
  name: string
  role: string
  country: string
  image: string
  className?: string
}

const testimonials = [
  {
    quote:
      "Invertir con Bottom Line LATAM ha sido una de las mejores decisiones financieras que he tomado. El proceso fue completamente transparente y el equipo me guió en cada paso. Mi portafolio en Miami ha generado un retorno del 12% anual, superando mis expectativas iniciales.",
    name: "Carlos Rodríguez",
    role: "Empresario",
    country: "México",
    image: "/latin-businessman-portrait.png",
  },
  {
    quote:
      "Como inversionista primeriza estaba nerviosa, pero el equipo de Bottom Line LATAM hizo que todo el proceso fuera sencillo y seguro. Aprecio especialmente los informes mensuales detallados y la comunicación constante. Mi inversión en Nueva York ha sido un éxito rotundo.",
    name: "Ana María Gómez",
    role: "Médica",
    country: "Colombia",
    image: "/latin-american-woman-doctor.png",
  },
  {
    quote:
      "Después de comparar varias plataformas, elegí Bottom Line LATAM por su transparencia y profesionalismo. He invertido en tres propiedades diferentes y todas han superado las proyecciones iniciales. Su asesoría fiscal para inversionistas extranjeros ha sido invaluable.",
    name: "Javier Méndez",
    role: "Director Financiero",
    country: "Chile",
    image: "/latin-american-finance-executive.png",
  },
]

export function Testimonial({ quote, name, role, country, image, className }: TestimonialProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 flex-shrink-0">
            <Quote className="h-8 w-8 text-primary opacity-50" />
          </div>
          <blockquote className="mb-4 flex-grow">
            <p className="text-muted-foreground italic">{quote}</p>
          </blockquote>
          <div className="flex items-center mt-auto pt-4 border-t">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">
                {role} • {country}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ClientTestimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          quote={testimonial.quote}
          name={testimonial.name}
          role={testimonial.role}
          country={testimonial.country}
          image={testimonial.image}
        />
      ))}
    </div>
  )
}
