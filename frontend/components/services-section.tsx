"use client"

import { useLanguage } from "@/contexts/language-context"
import { Car, Plane, Clock, Users, Sparkles, Shield } from "lucide-react"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Car,
      title: t("outstation_cabs"),
      description: t("outstation_desc"),
      highlight: "₹9/km",
    },
    {
      icon: Plane,
      title: t("airport_transfer"),
      description: t("airport_desc"),
      highlight: "On-time",
    },
    {
      icon: Clock,
      title: t("local_rentals"),
      description: t("local_desc"),
      highlight: "4hr, 8hr, 12hr",
    },
    {
      icon: Users,
      title: t("tempo_traveller"),
      description: t("tempo_desc"),
      highlight: "₹21/km",
    },
    {
      icon: Sparkles,
      title: t("luxury"),
      description: t("luxury_desc"),
      highlight: "Premium",
    },
    {
      icon: Shield,
      title: t("safe_travel"),
      description: t("safe_desc"),
      highlight: "100%",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t("our_services")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services_subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {service.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
