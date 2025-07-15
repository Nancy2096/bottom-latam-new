import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MapPin, DollarSign, Clock, Users, AlertCircle } from "lucide-react"

interface InvestmentCardProps {
  image: string
  title: string
  location: string
  return: string
  minimum: string
  term: string
  funded: number
  remaining: string
}

export function InvestmentCard({
  image,
  title,
  location,
  return: returnValue,
  minimum,
  term,
  funded,
  remaining,
}: InvestmentCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64 md:h-72">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {funded >= 75 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            ¡Casi completo!
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="space-y-4">
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 text-primary mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 text-primary mr-2" />
            <span>Rendimiento: {returnValue}</span>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 text-primary mr-2" />
            <span>Inversión mínima: {minimum}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 text-primary mr-2" />
            <span>Plazo estimado: {term}</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Recaudado: {funded}%</span>
              <span className="text-muted-foreground">Cierra en {remaining}</span>
            </div>
            <Progress value={funded} className="h-2" />
            <div className="flex items-center text-sm">
              <Users className="h-4 w-4 text-primary mr-2" />
              <span>{Math.floor(funded * 0.8)} inversionistas participando</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Invertir ahora</Button>
      </CardFooter>
    </Card>
  )
}
