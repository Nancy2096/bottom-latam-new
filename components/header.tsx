"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector" 
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
  className={cn(
    "sticky top-0 z-50 w-full transition-colors duration-300",
    scrolled
      ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      : "bg-transparent text-white",
  )}
>
  <div className="container flex h-16 items-center justify-between">
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={scrolled ? "/logoNegro.png" : "/logoBlanco.png"}
          alt="Investment Firm"
          width={55}
          height={55}
          className="mx-auto transition-all duration-300"
        />
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="#opportunities"
          className={cn(
            "text-sm font-medium transition-colors",
            scrolled ? "hover:text-primary" : "hover:text-white/80",
          )}
        >
          Oportunidades
        </Link>
        <Link
          href="#benefits"
          className={cn(
            "text-sm font-medium transition-colors",
            scrolled ? "hover:text-primary" : "hover:text-white/80",
          )}
        >
          Beneficios
        </Link>
        <Link
          href="#portfolio"
          className={cn(
            "text-sm font-medium transition-colors",
            scrolled ? "hover:text-primary" : "hover:text-white/80",
          )}
        >
          Portafolio
        </Link>
        <Link
          href="#programs"
          className={cn(
            "text-sm font-medium transition-colors",
            scrolled ? "hover:text-primary" : "hover:text-white/80",
          )}
        >
          Programas
        </Link>
        <Link
          href="#contact"
          className={cn(
            "text-sm font-medium transition-colors",
            scrolled ? "hover:text-primary" : "hover:text-white/80",
          )}
        >
          Contacto
        </Link>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <Button
        asChild
        variant={scrolled ? "default" : "secondary"}
        className={scrolled ? "" : "bg-white text-primary hover:bg-white/90"}
      >
        <Link href="#register">Regístrese Gratis</Link>
      </Button>
    </div>
  </div>
</header>

  )
}
