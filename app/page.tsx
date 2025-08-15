"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, MapPin, DollarSign, Building, Shield, Globe, BarChart, Users, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroVideo } from "@/components/hero-video"
import { InvestmentCarousel } from "@/components/investment-carousel"
import { ImageCarousel } from "@/components/image-carousel"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { Header } from "@/components/header"
import { GreenFooter } from "@/components/green-footer"
import { FaqSection } from "@/components/faq-section"
import { ClientTestimonials } from "@/components/client-testimonials"
import { StatsCounter } from "@/components/stats-counter"
import { AppBanner } from "@/components/app-banner"
import { Marcas } from "@/components/marcas"

export default function Home() {
  // Desactivar cualquier intento de conexión a extensiones de navegador
  useEffect(() => {
    // Esto ayuda a prevenir que scripts intenten conectarse a extensiones como MetaMask
    const originalChrome = window.chrome
    try {
      // @ts-ignore - Intentamos modificar window.chrome para evitar detecciones
      window.chrome = undefined

      return () => {
        // @ts-ignore - Restauramos al salir
        window.chrome = originalChrome
      }
    } catch (e) {
      console.log("No se pudo modificar window.chrome")
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner with Video */}
        <section className="relative min-h-[110vh] mt-[-80px]">
          <HeroVideo />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl space-y-4">
                <h1 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Invierte en el Mercado Inmobiliario de EE. UU. con rendimientos de hasta 20%
                </h1>
                <p className="text-xl text-white">Genera plusvalía en USD, invirtiendo desde 25,000 USD</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Sobre Bottom Line Group</h2>
                  <p className="text-xl text-muted-foreground">
                    Más de 15 años conectando inversionistas latinoamericanos con las mejores oportunidades
                    inmobiliarias de Estados Unidos
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Bottom Line Group nació en 2008 con una visión clara: democratizar el acceso al mercado inmobiliario
                    estadounidense para inversionistas de América Latina. Fundada por un equipo de expertos en finanzas
                    internacionales y bienes raíces, nuestra empresa ha evolucionado hasta convertirse en el puente más
                    confiable entre el capital latinoamericano y las oportunidades de inversión en Estados Unidos.
                  </p>
                  <p className="text-muted-foreground">
                    Con sede en Miami y oficinas estratégicas en las principales capitales de América Latina, hemos
                    facilitado más de $750 millones USD en inversiones inmobiliarias, ayudando a más de 3,000 familias a
                    diversificar su patrimonio y construir un futuro financiero sólido en dólares estadounidenses.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold">Experiencia Comprobada</span>
                    </div>
                    <p className="text-sm text-muted-foreground">15+ años en el mercado inmobiliario internacional</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold">Regulación Completa</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Licenciados y regulados en EE.UU. y América Latina</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold">Equipo Experto</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      50+ profesionales especializados en inversión internacional
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold">Presencia Regional</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Oficinas en 8 países de América Latina</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/nosotros.jpg"
                    alt="Oficinas de Bottom Line Group"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[300px] md:h-[400px]"
                  />
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-dark">Nuestra Misión</h3>
                  <p className="text-muted-foreground">
                    "Empoderar a las familias latinoamericanas para que construyan patrimonio duradero a través de
                    inversiones inmobiliarias inteligentes en Estados Unidos, brindando acceso, transparencia y
                    resultados excepcionales."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full py-12 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-dark">
                Marcas que se encuentran en las propiedades
              </h2>
              <Marcas />
              
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section id="opportunities" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-primary">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Explore Nuestras Oportunidades de Inversión
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Descubra proyectos inmobiliarios de alta rentabilidad en las mejores ubicaciones de Estados Unidos
              </p>
            </div>

            <div className="mt-8">
              <InvestmentCarousel />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="w-full py-12 md:py-24 bg-[url('/background-gray.webp')] bg-cover bg-center bg-no-repeat"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-dark">
                ¿Por qué Invertir con Nosotros?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Ofrecemos una experiencia de inversión inmobiliaria segura, transparente y rentable
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Seguridad legal y financiera</h3>
                <p className="text-muted-foreground">
                  Todas nuestras inversiones están respaldadas por contratos legales y estructuras financieras sólidas
                  que protegen su capital.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Diversificación en dólares</h3>
                <p className="text-muted-foreground">
                  Proteja su patrimonio de la volatilidad de las monedas latinoamericanas invirtiendo en activos
                  denominados en dólares.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Asesoría 360</h3>
                <p className="text-muted-foreground">
                   Te acompañamos desde la creación de tu LLC hasta el retiro de tu inversión de manera personalizada y en vivo.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Acceso a mercados en crecimiento</h3>
                <p className="text-muted-foreground">
                Todas las inversiones que manejamos son de bajo riesgos, en mercados de alta demanda, avalados y respaldados por marcas multinacionales.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Visas de Inversionista</h3>
                <p className="text-muted-foreground">
                   Vemos hacia el futuro, donde nuestro equipo legal en EE.UU. te asesorará y se encargarán para tramitar tu visa de inversionista.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Asesoría personalizada</h3>
                <p className="text-muted-foreground">
                  Equipo de expertos bilingües que le guiarán en cada paso del proceso de inversión con atención
                  personalizada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Banner Section */}
        <AppBanner />

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Nuestro Historial de Éxito</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Descubra proyectos completados que han generado excelentes rendimientos para nuestros inversionistas
              </p>
            </div>

            <PortfolioGallery />
          </div>
        </section>

        {/* Stats Counter Section */}
        <StatsCounter />

        {/* Client Testimonials Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Lo que dicen nuestros clientes</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Descubra las experiencias de inversionistas que ya confían en nosotros
              </p>
            </div>

            <ClientTestimonials />
          </div>
        </section>

        {/* Investment Programs */}
        <section
          id="programs"
          className="w-full py-12 md:py-24 bg-[url('/background-green.webp')] bg-cover bg-center bg-no-repeat"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-dark">
                Conozca Nuestros Programas de Inversión
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Ofrecemos diferentes opciones adaptadas a sus objetivos financieros y perfil de riesgo
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-center">Plan Starter</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-center mb-4">
                    <span className="text-muted-foreground"> Desde </span>
                    <span className="text-4xl font-bold">$25,000</span>
                    <span className="text-muted-foreground"> USD mínimo</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Inversiones colectivas en proyectos diversificados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Rendimiento estimado: 6-8% anual</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Plazo mínimo: 24 meses</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Reportes trimestrales</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Acceso a plataforma digital</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-transparent" variant="outline">
                    Más Información
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-primary">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="text-center">Plan Growth</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-center mb-4">
                    <span className="text-muted-foreground"> Desde </span>
                    <span className="text-4xl font-bold">$50,000</span>
                    <span className="text-muted-foreground"> USD mínimo</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Propiedades individuales con retorno medio</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Rendimiento estimado: 8-10% anual</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Plazo mínimo: 36 meses</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Reportes mensuales</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Asesor personal asignado</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Acceso a eventos exclusivos</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Más Información</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-center">Plan Premium</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-center mb-4">
                    <span className="text-muted-foreground"> Desde </span>
                    <span className="text-4xl font-bold">$100,000</span>
                    <span className="text-muted-foreground"> USD mínimo</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Desarrollos comerciales de alto rendimiento</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Rendimiento estimado: 10-14% anual</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Plazo flexible: 24-60 meses</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Reportes semanales</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Equipo dedicado de asesores</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Visitas presenciales a propiedades</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Estructuración fiscal personalizada</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-transparent" variant="outline">
                    Más Información
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Preguntas Frecuentes</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Encuentre respuestas a las preguntas más comunes sobre inversión inmobiliaria en Estados Unidos
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto text-center">
              <FaqSection />
              <div className="mt-8">
                <Button asChild className="px-8 py-3 text-base font-semibold">
                  <Link href="/faq">
                    Ver todas las preguntas frecuentes
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 bg-[url('/background-green.webp')] bg-cover bg-center bg-no-repeat"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col h-full">
                <div className="space-y-4 mb-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-dark">Contáctenos</h2>
                  <p className="text-muted-foreground">
                    Nuestro equipo de expertos está listo para responder todas sus preguntas y ayudarle a comenzar su
                    viaje de inversión inmobiliaria en Estados Unidos.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      <span>Oficinas en Ciudad de Mexico, California, Texas & Nevada.</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-2" />
                      <span>+1 (305) 555-1234</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-2" />
                      <span>asesoria@bottomlinelatam.com</span>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden flex-grow mt-auto">
                  <div className="relative h-full">
                    <Image
                      src="/asesor-contacto.webp"
                      alt="Asesora comercial de Bottom Line LATAM"
                      fill  
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <p className="font-semibold text-lg">Carolina Mendoza</p>
                    <p className="text-sm">Directora de Asesoría Comercial</p>
                  </div>
                </div>
              </div>
              <div className="h-full flex">
                <div id="register" className="rounded-lg border bg-card p-6 shadow-sm w-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4">Solicite más información</h3>
                  <form className="space-y-4 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input id="name" placeholder="Su nombre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" placeholder="+52 123 456 7890" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">País</Label>
                        <Select>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Seleccione país" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mexico">México</SelectItem>
                            <SelectItem value="colombia">Colombia</SelectItem>
                            <SelectItem value="chile">Chile</SelectItem>
                            <SelectItem value="peru">Perú</SelectItem>
                            <SelectItem value="argentina">Argentina</SelectItem>
                            <SelectItem value="other">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Interés de inversión</Label>
                      <Select>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Seleccione su interés" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="starter">Plan Starter ($10,000-$25,000 USD)</SelectItem>
                          <SelectItem value="growth">Plan Growth ($25,000-$100,000 USD)</SelectItem>
                          <SelectItem value="premium">Plan Premium ($100,000+ USD)</SelectItem>
                          <SelectItem value="info">Solo información general</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 flex-grow">
                      <Label htmlFor="message">Mensaje (opcional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntenos sobre sus objetivos de inversión"
                        className="h-full min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full mt-auto">
                      ENVIAR SOLICITUD
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-bold mb-2">Aclaraciones importantes</h3>
                <p className="text-sm text-muted-foreground">
                  Toda inversión implica riesgos. El rendimiento pasado no garantiza resultados futuros. Consulte con su
                  asesor financiero antes de invertir.
                </p>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Leer aclaraciones completas
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Términos y Condiciones</h3>
                <p className="text-sm text-muted-foreground">
                  Al utilizar nuestra plataforma, usted acepta nuestros términos y condiciones. Lea detenidamente antes
                  de registrarse.
                </p>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Leer términos completos
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Política de Privacidad</h3>
                <p className="text-sm text-muted-foreground">
                  Protegemos su información personal. Conozca cómo recopilamos, utilizamos y protegemos sus datos.
                </p>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Leer política completa
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Green Footer */}
      <GreenFooter />

      {/* Copyright Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">© 2025 Bottom Line LATAM. Todos los derechos reservados.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Términos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
