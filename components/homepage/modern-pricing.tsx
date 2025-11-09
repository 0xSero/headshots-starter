"use client"

import Link from "next/link"
import type React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PricingFeature {
  icon: React.ReactNode
  text: string
  tooltip?: string
}

interface PricingTier {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
  bestValue?: boolean
}

export default function ModernPricing() {
  const tiers: PricingTier[] = [
    {
      title: "Start",
      price: "1 Kredyt",
      description: "Idealne dla osób chcących poprawić swoją obecność online.",
      features: ["4 Zdjęcia AI"],
      buttonText: "Wybierz Start",
    },
    {
      title: "Podstawowy",
      price: "3 Kredyty",
      description: "Idealny dla profesjonalistów wymagających częstych aktualizacji profilu.",
      features: ["12 Zdjęć AI"],
      buttonText: "Wybierz Podstawowy",
      popular: true,
    },
    {
      title: "Premium",
      price: "5 Kredytów",
      description: "Najlepsza wartość z nieograniczonymi możliwościami.",
      features: ["20 Zdjęć AI"],
      buttonText: "Wybierz Premium",
      bestValue: true,
    },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Pricing Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={cn(
                "pricing-card",
                tier.popular && "pricing-card-popular"
              )}
            >
              {tier.popular && (
                <div className="pricing-badge">
                  Najpopularniejszy
                </div>
              )}

              {tier.bestValue && (
                <div className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white dark:bg-blue-500">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Najlepsza Wartość
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold">{tier.title}</h3>

              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold">{tier.price}</span>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>

              <ul className="my-6 space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="pricing-feature">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/login" className="mt-8 block w-full" aria-label={`Select ${tier.title} plan`}>
                <Button
                  className={cn(
                    "w-full",
                    tier.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  )}
                  aria-label={`Select ${tier.title} plan`}
                >
                  {tier.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Wszystkie pakiety zawierają 7-dniową gwarancję satysfakcji. Potrzebujesz niestandardowego planu?{" "}
          <Link
            href="/contact"
            className="text-primary hover:underline"
            aria-label="Skontaktuj się z naszym zespołem sprzedaży">
            Skontaktuj się
          </Link>
        </p>
      </div>
    </div>
  )
}



