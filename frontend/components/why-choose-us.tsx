"use client"

import { useLanguage } from "@/contexts/language-context"
import { Shield, CreditCard, Headphones, MapPin, Clock, Award } from "lucide-react"

export function WhyChooseUs() {
  const { t } = useLanguage()

  const features = [
    {
      icon: CreditCard,
      title: t("transparent_pricing"),
      description: t("transparent_desc"),
    },
    {
      icon: Shield,
      title: t("verified_drivers"),
      description: t("verified_desc"),
    },
    {
      icon: Headphones,
      title: t("support_24_7"),
      description: t("support_desc"),
    },
    {
      icon: MapPin,
      title: t("cities_covered"),
      description: "50+ cities, 500+ routes",
    },
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description: "Punctual pickups with real-time tracking.",
    },
    {
      icon: Award,
      title: t("flexible_booking"),
      description: t("flexible_desc"),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t("why_choose_us")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("why_choose_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/30 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">50+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{t("cities_covered")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{t("routes")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">50K+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{t("happy_customers")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">4.8</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
