import { FaqSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { GreenFooter } from "@/components/green-footer"

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full py-12 md:py-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary">
              Preguntas Frecuentes
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Encuentre respuestas a las preguntas más comunes sobre inversión inmobiliaria en Estados Unidos
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqSection />
          </div>
        </div>
      </main>
      <GreenFooter />
    </div>
  )
}