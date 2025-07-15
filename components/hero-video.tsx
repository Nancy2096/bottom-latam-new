"use client"

import { useEffect, useRef } from "react"

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Asegurarse de que el video se reproduzca automáticamente cuando esté listo
    if (videoRef.current) {
      // Usamos un try-catch para manejar posibles errores de reproducción
      try {
        const playPromise = videoRef.current.play()

        // Manejamos la promesa para evitar errores no capturados
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Error al reproducir el video automáticamente:", error)
            // No hacemos nada más, simplemente registramos el error
          })
        }
      } catch (error) {
        console.log("Error al intentar reproducir el video:", error)
      }
    }
  }, [])

  return (
    <div className="relative2 h-[600px] w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        preload="auto"
      >
       <source src="/BannerBottomLine.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
    </div>
  )
}
