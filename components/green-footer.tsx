import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  FileText,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Globe,
} from "lucide-react"

export function GreenFooter() {
  return (
    <footer className="w-full py-12 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <FileText className="h-4 w-4 mr-2" />
                  <span>Blog de Inversiones</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Guías de Inversión</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Análisis de Mercado</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Webinars y Eventos</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Preguntas Frecuentes</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Estructura del Sitio</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link href="#opportunities" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Oportunidades de Inversión</span>
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Beneficios</span>
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Portafolio</span>
                </Link>
              </li>
              <li>
                <Link href="#programs" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Programas de Inversión</span>
                </Link>
              </li>
              <li>
                <Link href="#contact" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Av. Reforma 222, Col. Juárez, Ciudad de México, México</span>
                </div>
              </li>
              <li>
                <Link href="mailto:info@bottomlinelatam.com" className="flex items-center hover:underline">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>info@bottomlinelatam.com</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+13055551234" className="flex items-center hover:underline">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>+1 (305) 555-1234</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <Globe className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>www.bottomlinelatam.com</span>
                </Link>
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Avisos Legales</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Términos y Condiciones</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Política de Privacidad</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Aviso de Riesgos</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Política de Cookies</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Información Regulatoria</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Política de Conflictos de Interés</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="text-sm">
              Bottom Line LATAM es una plataforma de inversión inmobiliaria. Todas las inversiones implican riesgo y
              pueden resultar en pérdida parcial o total del capital invertido.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
