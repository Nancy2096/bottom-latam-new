"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, Search } from "lucide-react"

const faqs = [
  {
    id: "faq-1",
    question: "¿Qué requisitos debo cumplir para invertir en Estados Unidos?",
    answer:
      "Para invertir en EE.UU. normalmente se requiere contar con una entidad legal estadounidense (por ejemplo, una LLC), una cuenta bancaria en EE.UU. y documentación básica de identificación. Los requisitos pueden variar según el tipo de inversión y el monto a invertir.",
  },
  {
    id: "faq-2",
    question: "¿Bottom Line LatAm me ayuda con el trámite de estos requisitos?",
    answer:
      "Sí, en Bottom Line LatAm acompañamos a nuestros inversionistas durante todo el proceso, desde la constitución de la LLC hasta la apertura de cuenta bancaria y cumplimiento regulatorio en EE.UU.",
  },
  {
    id: "faq-3",
    question: "¿Cuál es el rendimiento promedio de las inversiones?",
    answer:
      "Los rendimientos varían según el tipo de proyecto y su ubicación. En general, nuestras inversiones residenciales ofrecen rendimientos anuales del 10-14%, mientras que los proyectos comerciales pueden alcanzar el 15-20%. Es importante recordar que estos son promedios históricos y los rendimientos futuros pueden variar. Cada oportunidad de inversión incluye proyecciones detalladas basadas en análisis de mercado actualizados.",
  },
  {
    id: "faq-4",
    question: "¿Dónde pagaré impuestos si invierto mi dinero en Bottom Line Latam? ¿En México o en Estados Unidos?",
    answer:
      "La obligación fiscal dependerá de tu residencia fiscal y la estructura de la inversión. Generalmente, los rendimientos generados en EE.UU. están sujetos a impuestos estadounidenses, pero pueden existir obligaciones de declarar o pagar impuestos en México dependiendo de tu situación personal. Te recomendamos consultar a tu asesor fiscal para un análisis personalizado.",
  },
  {
    id: "faq-5",
    question: "¿Cuál es el proceso para disponer de mi dinero invertido? ¿Puedo tener una tarjeta de débito ligada a mi inversión?",
    answer:
      "La disponibilidad de tu dinero depende de las condiciones del producto de inversión seleccionado. En algunos casos, es posible solicitar retiros directos a tu cuenta bancaria en EE.UU. o México. Actualmente, no todos los productos ofrecen una tarjeta de débito vinculada a la inversión, pero nuestro equipo te asesorará sobre las alternativas más convenientes.",
  },
  {
    id: "faq-6",
    question: "¿Cómo se garantiza la seguridad de mi inversión?",
    answer:
      "Todas nuestras inversiones están respaldadas por activos inmobiliarios reales. Utilizamos estructuras legales sólidas como fideicomisos y LLC que protegen a los inversionistas. Además, trabajamos con firmas legales de prestigio tanto en EE.UU. como en Latinoamérica para asegurar el cumplimiento de todas las regulaciones aplicables. Cada propiedad cuenta con seguros completos contra daños y responsabilidad civil.",
  },
  {
    id: "faq-7",
    question: "¿Cómo puedo dar seguimiento a mi inversión y al desempeño del proyecto?",
    answer:
      "Contamos con un portal digital donde puedes consultar el avance de tu inversión en tiempo real, reportes periódicos y actualizaciones de cada proyecto. Además, nuestro equipo brinda atención personalizada para resolver cualquier duda y enviarte información relevante sobre tu inversión.",
  },
  {
    id: "faq-8",
    question: "¿Cómo puedo retirar mi inversión y mis ganancias?",
    answer:
      "Los términos de liquidez varían según el proyecto. Típicamente, los proyectos tienen un plazo definido (24-60 meses) al final del cual se distribuye el capital y las ganancias. Algunos proyectos ofrecen opciones de salida anticipada después de un período mínimo, sujeto a disponibilidad de compradores secundarios. Las distribuciones se realizan mediante transferencia bancaria internacional a la cuenta registrada del inversionista.",
  },
]

export function FaqSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsFormSubmitted(true)
    // En una implementación real, aquí se enviaría la pregunta al backend
    setTimeout(() => {
      setIsFormSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <div className="w-full relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar preguntas..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p className="text-center py-4 text-muted-foreground">
              No se encontraron preguntas que coincidan con su búsqueda. Por favor, intente con otros términos o haga su
              propia pregunta.
            </p>
          )}
        </Accordion>

        <div className="mt-8 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                Hacer una nueva pregunta
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Envíe su pregunta</DialogTitle>
                <DialogDescription>
                  Nuestro equipo de expertos responderá a su consulta en un plazo de 24-48 horas hábiles.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Su nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="correo@ejemplo.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="question">Su pregunta</Label>
                  <Textarea
                    id="question"
                    placeholder="Escriba su pregunta aquí..."
                    className="min-h-[100px]"
                    required
                  />
                </div>
                <DialogFooter>
                  <Button type="submit" className="w-full" disabled={isFormSubmitted}>
                    {isFormSubmitted ? "Enviado con éxito" : "Enviar pregunta"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}
