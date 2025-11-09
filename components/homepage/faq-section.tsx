"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      className="border-b last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-primary"
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-muted-foreground">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Jak działa generowanie zdjęć biznesowych przez AI?",
      answer:
        "Nasza technologia AI analizuje przesłane selfie, aby zrozumieć Twoje cechy twarzy, wyrażenia i styl. Następnie generuje profesjonalne zdjęcia biznesowe, które zachowują Twoje podobieństwo, poprawiając jednocześnie jakość, oświetlenie i tło. Cały proces trwa około 20 minut od przesłania do dostarczenia.",
    },
    {
      question: "Jakie zdjęcia powinienem przesłać?",
      answer:
        "Aby uzyskać najlepsze rezultaty, prześlij co najmniej 4 selfie wysokiej jakości z dobrym oświetleniem. Zdjęcia powinny być wykonane en face, z jedną osobą w kadrze. Unikaj okularów i czapek, staraj się uchwycić różne wyrażenia twarzy i kąty dla większej różnorodności wyników.",
    },
    {
      question: "Czy mogę używać tych zdjęć profesjonalnie?",
      answer:
        "Wszystkie nasze pakiety zawierają prawa do użytku komercyjnego. Możesz używać swoich zdjęć wygenerowanych przez AI na LinkedIn, stronach firmowych, mediach społecznościowych, CV, portfolio i do każdego innego celu profesjonalnego.",
    },
    {
      question: "Ile różnych stylów mogę otrzymać?",
      answer:
        "Liczba stylów zależy od wybranego pakietu. Pakiety Podstawowy i Premium zawierają wiele opcji stylów, takich jak profesjonalny, korporacyjny, kreatywny, casualowy i specyficzne dla branży. Możesz podejrzeć wszystkie dostępne style przed dokonaniem ostatecznego wyboru.",
    },
    {
      question: "Co jeśli nie będę zadowolony z rezultatów?",
      answer:
        "Stoimy za naszą technologią AI i chcemy, abyś był w pełni zadowolony. Jeśli nie jesteś usatysfakcjonowany swoimi zdjęciami, skontaktuj się z naszym zespołem wsparcia w ciągu 7 dni od dostarczenia, a wspólnie poprawimy wyniki lub zapewnimy zwrot pieniędzy.",
    },
    {
      question: "Jak szybko otrzymam swoje zdjęcia?",
      answer:
        "Standardowy czas przetwarzania wynosi około 20 minut. Użytkownicy pakietu Premium otrzymują priorytetowe przetwarzanie. Gdy Twoje zdjęcia będą gotowe, otrzymasz powiadomienie e-mail z linkiem do podglądu i pobrania zdjęć.",
    },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  )
}

