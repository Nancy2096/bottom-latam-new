"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, DollarSign, Clock, User, Building, Calendar } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

const portfolioProjects = [
  {
    id: "miami",
    title: "Condominio Brickell Bay",
    location: "Miami, FL",
    images: [
      {
        src: "/miami-condo-after-renovation.png",
        alt: "Condominio Brickell Bay renovado",
      },
      {
        src: "/old-apartment-building-pre-renovation.png",
        alt: "Condominio Brickell Bay antes de renovación",
      },
      {
        src: "/miami-condo-interior.png",
        alt: "Interior del Condominio Brickell Bay",
      },
      {
        src: "/miami-condo-pool.png",
        alt: "Área de piscina del Condominio Brickell Bay",
      },
    ],
    return: "11.5% anual",
    duration: "28 meses",
    purchasePrice: "$8.2 millones USD",
    units: "42 unidades",
    constructionYear: "1998",
    testimonial: {
      name: "Carlos Rodríguez",
      country: "México",
      quote:
        "Excelente experiencia de inversión. El proceso fue transparente y los rendimientos superaron mis expectativas.",
    },
  },
  {
    id: "newyork",
    title: "Oficinas Hudson Yards",
    location: "Nueva York, NY",
    images: [
      {
        src: "/nyc-office-after-renovation.png",
        alt: "Oficinas Hudson Yards renovadas",
      },
      {
        src: "/old-office-building-pre-renovation.png",
        alt: "Oficinas Hudson Yards antes de renovación",
      },
      {
        src: "/nyc-office-interior.png",
        alt: "Interior de las Oficinas Hudson Yards",
      },
      {
        src: "/nyc-office-meeting-room.png",
        alt: "Sala de reuniones de las Oficinas Hudson Yards",
      },
    ],
    return: "9.8% anual",
    duration: "36 meses",
    purchasePrice: "$12.5 millones USD",
    units: "3 pisos comerciales",
    constructionYear: "2005",
    testimonial: {
      name: "Ana Gómez",
      country: "Colombia",
      quote:
        "La inversión en este proyecto me permitió diversificar mi portafolio con activos inmobiliarios de primer nivel en EE.UU.",
    },
  },
  {
    id: "chicago",
    title: "Residencial Millennium Park",
    location: "Chicago, IL",
    images: [
      {
        src: "/chicago-residential-after-renovation.png",
        alt: "Residencial Millennium Park renovado",
      },
      {
        src: "/chicago-residential-before-renovation.png",
        alt: "Residencial Millennium Park antes de renovación",
      },
      {
        src: "/chicago-residential-interior.png",
        alt: "Interior del Residencial Millennium Park",
      },
      {
        src: "/chicago-residential-lobby.png",
        alt: "Lobby del Residencial Millennium Park",
      },
    ],
    return: "10.2% anual",
    duration: "32 meses",
    purchasePrice: "$15.8 millones USD",
    units: "68 unidades",
    constructionYear: "2001",
    testimonial: {
      name: "Javier Méndez",
      country: "Chile",
      quote:
        "El equipo de gestión fue excepcional. Recibí actualizaciones constantes y el rendimiento final superó lo proyectado.",
    },
  },
]

export function PortfolioGallery() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="miami">
        <TabsList className="grid w-full grid-cols-3">
          {portfolioProjects.map((project) => (
            <TabsTrigger key={project.id} value={project.id}>
              {project.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {portfolioProjects.map((project) => (
          <TabsContent key={project.id} value={project.id}>
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-primary mr-2" />
                      <span>Rendimiento obtenido: {project.return}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span>Tiempo de ejecución: {project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-primary mr-2" />
                      <span>Precio de compra: {project.purchasePrice}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-primary mr-2" />
                      <span>Unidades: {project.units}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span>Año de construcción: {project.constructionYear}</span>
                    </div>
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="italic">"{project.testimonial.quote}"</p>
                          <p className="mt-2 text-sm font-medium">
                            {project.testimonial.name}, {project.testimonial.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ImageCarousel images={project.images} className="h-[400px] w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
