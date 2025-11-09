import { Badge } from "@/components/ui/badge"
import TestimonialCard from "@/components/homepage/testimonial-card"

const testimonials = [
  {
    quote: "Jakość tych zdjęć AI jest niewiarygodna. Zaktualizowałam wszystkie moje profile zawodowe i otrzymałam mnóstwo komplementów.",
    author: "Anna Kowalska",
    role: "Dyrektor Marketingu",
    avatarUrl: "/homepage/example0001.png"
  },
  {
    quote: "Jako freelancer, profesjonalne zdjęcia biznesowe zmieniły moją markę osobistą. Proces był tak szybki i prosty!",
    author: "Piotr Nowak",
    role: "UX Designer",
    avatarUrl: "/homepage/example0002.png"
  },
  {
    quote: "Byłem sceptyczny na początku, ale rezultaty mnie zaskoczyły. Wyglądają lepiej niż profesjonalne zdjęcia, za które zapłaciłem setki złotych.",
    author: "Marek Wiśniewski",
    role: "Inżynier Oprogramowania",
    avatarUrl: "/homepage/example0003.png"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-8">
          <Badge variant="outline" className="mb-2">
            Opinie
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Co Mówią Nasi Użytkownicy</h2>
          <p className="max-w-[700px] text-muted-foreground text-lg">
            Tysiące profesjonalistów przekształciło swoją obecność online dzięki naszym zdjęciom biznesowym AI.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}