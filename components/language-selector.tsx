"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

interface LanguageSelectorProps {
  scrolled?: boolean
}

export function LanguageSelector({ scrolled = true }: LanguageSelectorProps) {
  const [language, setLanguage] = useState("Español")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("gap-1", !scrolled && "text-white hover:bg-white/10 hover:text-white")}
        >
          <Globe className="h-4 w-4" />
          <span>{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("Español")}>Español</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("Português")}>Português</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
