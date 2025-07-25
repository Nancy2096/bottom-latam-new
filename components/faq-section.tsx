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
  {
    id: "faq-9",
    question: "¿Puedo visitar las propiedades antes de invertir?",
    answer:
      "Absolutamente. Aunque no es necesario para completar su inversión, ofrecemos visitas virtuales detalladas de todas las propiedades. Si prefiere una visita presencial, podemos coordinarla con nuestro equipo local. Para inversionistas Premium, incluso podemos organizar viajes personalizados para visitar múltiples propiedades en diferentes ciudades.",
  },
  {
    id: "faq-10",
    question: "¿Cuáles son los principales beneficios de invertir en Estados Unidos desde México?",
    answer: [
      "Invertir en EE.UU. te ofrece ventajas estratégicas como:",
      "Acceso a un mercado líder y diversificado: EE.UU. es el mayor mercado consumidor del mundo, con alta demanda y poder adquisitivo.",
      "Ambiente de negocios estable: Cuenta con estabilidad económica, política y un marco legal sólido que protege a los inversionistas extranjeros.",
      "Innovación y tecnología: Estados Unidos es pionero en nuevas tecnologías, lo que impulsa la competitividad de tu negocio.",
      "Proximidad geográfica y tratados comerciales: Gracias al T-MEC, la logística es ágil y los costos de operación disminuyen, facilitando el comercio y expansión.",
      "Relaciones comerciales fuertes: La conexión histórica y económica entre México y EE.UU. favorece el crecimiento y la integración de negocios mexicanos.",
    ],
  },
  {
    id: "faq-11",
    question: "¿Qué opciones existen para obtener una visa de inversionista en EE.UU. y cómo funcionan?",
    answer: [
      "Existen dos visas principales para inversionistas mexicanos:",
      "Visa E-2 (Inversionista por Tratado Comercial):",
      "Permite vivir y operar un negocio en EE.UU. junto con tu familia (cónyuge e hijos menores de 21 años).",
      "No exige un monto mínimo de inversión, pero debes demostrar que el capital es suficiente para operar tu empresa y que el negocio es viable.",
      "Es renovable indefinidamente mientras mantengas la inversión.",
      "Solo disponible para ciudadanos de países con tratado comercial (México sí aplica).",
      "Visa EB-5 (Inversionista Inmigrante):",
      "Requiere una inversión mínima de $900,000 USD en un negocio que genere al menos 10 empleos en EE.UU.",
      "Está abierta a ciudadanos de cualquier país.",
      "¿Cuál te conviene?",
      "Las visas E-2 y EB-5 son ideales si deseas mudarte y operar personalmente en EE.UU. Si solo buscas invertir o expandir tu negocio sin residir allá, abrir una LLC como extranjero puede ser más práctico y económico.",
    ]
  },
  {
    id: "faq-12",
    question: "¿Qué es una LLC y por qué es recomendable para invertir desde México?",
    answer: [
      "Una LLC (Limited Liability Company) es una estructura flexible, ideal para inversionistas extranjeros porque:",
      "Protege tu patrimonio: Limita la responsabilidad a los activos de la empresa, no a tus bienes personales.",
      "Ventajas fiscales: Si no tienes operaciones físicas en EE.UU., puedes evitar pagar impuestos allá; solo debes presentar declaraciones informativas.",
      "Gestión sencilla y flexible: No hay límite de miembros y puedes gestionar la LLC personalmente o delegar la administración.",
      "Facilidad bancaria y operativa: Puedes abrir cuentas bancarias, recibir pagos internacionales y acceder a productos financieros en EE.UU.",
      "En pocas palabras, una LLC es la opción más simple y segura para invertir y operar en EE.UU. sin necesidad de residencia ni trámites migratorios complejos.",
    ],
  },
  {
    id: "faq-13",
    question: "¿Cómo funciona el proceso de inversión a través de una LLC?",
    answer: [
      "En Bottom Line Latam te ayudamos a crear tu cuenta de inversión como empresa.",
      "Presenta la documentación requerida: Certificado de formación, acuerdo operativo, EIN y datos de los miembros.",
      "Abre tu cuenta de inversión online y transfiere fondos desde la cuenta bancaria de tu LLC.",
      "Opera y gestiona tus inversiones: Puedes invertir en acciones, bonos, fondos, ETFs y más, manteniendo separados tus activos personales y empresariales.",
    ],
  },
  {
    id: "faq-14",
    question: "¿Cómo puedes minimizar impuestos en EE.UU. invirtiendo con tu LLC?",
    answer: [
      "Si tu LLC no tiene operaciones físicas (oficina, empleados, almacén) en EE.UU., generalmente no paga impuestos federales sobre ganancias de capital, solo debes declararlas.",
      "Evita generar dividendos directos (que sí están sujetos a retención fiscal) y prefiere obtener ganancias por venta de activos.",
      "Importante: Siempre presenta las declaraciones requeridas ante el IRS para estar en regla y evitar sanciones.",
    ],
  },
  {
    id: "faq-15",
    question: "¿Cómo abrir una LLC en Estados Unidos?",
    answer: [
      "Te acompañaremos en todo el proceso para hacerlo ágil y consta de cuatro pasos:",
      "Elige el estado: Delaware, Florida y New Mexico son los más populares por costos y facilidades.",
      "Elige el nombre de tu empresa: Debe ser único y cumplir requisitos locales.",
      "Designa un agente registrado: Encargado de recibir notificaciones legales en EE.UU.",
      "Presenta los artículos organizativos: Documentación ante la Secretaría de Estado.",
    ],
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
                <AccordionContent className="text-muted-foreground">
                  {Array.isArray(faq.answer) ? (
                    faq.id === "faq-13" ? (
                      <ol className="list-decimal pl-6 mt-2 space-y-2 text-left">
                        {faq.answer.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ol>
                    ) : faq.id === "faq-14" ? (
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-left">
                        {faq.answer.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <>
                        <div>{faq.answer[0]}</div>
                        <ul className="list-disc pl-6 mt-2 space-y-2 text-left">
                          {faq.answer.slice(1).map((item, idx) =>
                            item === "Visa E-2 (Inversionista por Tratado Comercial):" ||
                            item === "Visa EB-5 (Inversionista Inmigrante):" ||
                            item === "¿Cuál te conviene?" ||
                            item === "En pocas palabras, una LLC es la opción más simple y segura para invertir y operar en EE.UU. sin necesidad de residencia ni trámites migratorios complejos." ? (
                              <div key={idx} className="font-semibold mt-4 mb-1">{item}</div>
                            ) : (
                              <li key={idx}>{item}</li>
                            )
                          )}
                        </ul>
                      </>
                    )
                  ) : (
                    faq.answer
                  )}
                </AccordionContent>
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
