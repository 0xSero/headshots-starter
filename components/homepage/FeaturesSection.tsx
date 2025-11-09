import { Camera, Clock, Shield, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Wiele Stylów",
    description: "Wybierz spośród różnych profesjonalnych stylów i teł",
    icon: <Camera className="h-6 w-6" />
  },
  {
    title: "Wysoka Rozdzielczość",
    description: "Otrzymaj zdjęcia gotowe do druku w oszałamiającej jakości 4K",
    icon: <Camera className="h-6 w-6" />
  },
  {
    title: "Szybka Dostawa",
    description: "Odbierz swoje zdjęcia w zaledwie 20 minut",
    icon: <Clock className="h-6 w-6" />
  },
  {
    title: "Licencja Komercyjna",
    description: "Używaj swoich zdjęć wszędzie, również w celach komercyjnych",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Naturalne Rezultaty AI",
    description: "Zaawansowana technologia AI dla autentycznie wyglądających wyników",
    icon: <Star className="h-6 w-6" />
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Funkcje</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Wszystko Czego Potrzebujesz do Idealnych Zdjęć Biznesowych
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-background border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}