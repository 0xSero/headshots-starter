import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const images = [
  "/homepage/example0001.png",
  "/homepage/example0002.png",
  "/homepage/example0004.png",
  "/homepage/example0006.png",
]

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Uzyskaj swoje zdjęcia biznesowe AI już dziś
          </h2>
          <p className="max-w-[700px] text-gray-300 text-lg">
            Dołącz do tysięcy profesjonalistów, którzy podnieśli swoją obecność online dzięki naszym zdjęciom generowanym przez AI.
          </p>
          <Link href="/login" className="mt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Stwórz swoje zdjęcia teraz
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid gap-4 grid-cols-2 sm:grid-cols-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <Image
                src={src || "/placeholder.svg"}
                alt="Zdjęcie Biznesowe Wygenerowane przez AI"
                width={300}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}