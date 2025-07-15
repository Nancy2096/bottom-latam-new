import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bottom Line LATAM - Inversiones Inmobiliarias Premium en Estados Unidos",
  description:
    "Plataforma premium de inversión inmobiliaria para latinoamericanos que desean acceder al mercado de bienes raíces en Estados Unidos con rendimientos exclusivos y gestión de clase mundial.",
    generator: 'v0.dev',
    icons: {
      icon: "/favico.png",
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Añadimos un meta tag para evitar que el navegador intente cargar extensiones */}
        <meta name="web3-support" content="false" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
