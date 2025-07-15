"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Smartphone, TrendingUp, Eye, Bell, BarChart3, Download } from "lucide-react"

export function AppBanner() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      try {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Error al reproducir el video del banner:", error)
          })
        }
      } catch (error) {
        console.log("Error al intentar reproducir el video del banner:", error)
      }
    }
  }, [])

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          preload="auto"
        >
          <source src="/app-demo-video.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-image" style={{
        backgroundImage: "url('/fondo-inversion.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }} />
           
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Smartphone className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">Nueva Aplicación</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Monitoree sus Inversiones en <span className="text-primary">Tiempo Real</span>
              </h2>
              <p className="text-xl text-white/90">
                Con la nueva <span className="font-bold text-primary">BL APP</span>, tenga control total de su
                portafolio inmobiliario desde cualquier lugar del mundo.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/20">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm">Rendimientos en vivo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/20">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm">Seguimiento 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/20">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm">Alertas personalizadas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/20">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm">Análisis detallados</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Download className="h-5 w-5 mr-2" />
                Descargar para iOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Download className="h-5 w-5 mr-2" />
                Descargar para Android
              </Button>
            </div>

            <p className="text-sm text-white/70">Disponible gratis para todos nuestros inversionistas registrados</p>
          </div>

          {/* Right Content - App Preview */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                  {/* App Screenshot */}
                  <div className="w-full h-full bg-gradient-to-b from-primary/20 to-primary/5 flex flex-col">
                    {/* Header */}
                    <div className="bg-primary text-white p-4 pt-8">
                      <h3 className="font-bold text-lg">BL APP</h3>
                      <p className="text-sm opacity-90">Mi Portafolio</p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 space-y-4">
                      {/* Balance Card */}
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-xs text-gray-600">Valor Total del Portafolio</p>
                        <p className="text-2xl font-bold text-primary">$127,450</p>
                        <p className="text-xs text-green-600">+12.5% este mes</p>
                      </div>

                      {/* Investment Cards */}
                      <div className="space-y-2">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs font-medium">Miami Brickell</p>
                              <p className="text-xs text-gray-600">$45,000</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-green-600">+8.2%</p>
                              <div className="w-12 h-2 bg-green-200 rounded-full">
                                <div className="w-8 h-2 bg-green-500 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs font-medium">NYC Manhattan</p>
                              <p className="text-xs text-gray-600">$82,450</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-green-600">+11.7%</p>
                              <div className="w-12 h-2 bg-green-200 rounded-full">
                                <div className="w-10 h-2 bg-green-500 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                ¡Nuevo!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                +12.5%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
