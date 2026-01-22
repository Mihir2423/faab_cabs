"use client"

import { useLanguage } from "@/contexts/language-context"
import { Shield, CreditCard, Headphones, MapPin, Clock, Award, Star, Gift } from "lucide-react"

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
      description: t("cities_desc"),
    },
    {
      icon: Clock,
      title: t("on_time_guarantee"),
      description: t("on_time_desc"),
    },
    {
      icon: Award,
      title: t("flexible_booking"),
      description: t("flexible_desc"),
    },
    {
      icon: Gift,
      title: "Refer Ride Earn • Move More Earn More",
      description: "",
      isCentered: true,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t("why_choose_us")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={feature.isCentered ? 'md:col-span-2 lg:col-span-3 flex justify-center' : 'flex gap-4'}
            >
              {feature.isCentered ? (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">28+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{t("cities_covered")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">100+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{t("routes")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">2.5K+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{t("happy_customers")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">5L+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{t("distance_travelled")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">2.5K+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{t("total_trips")}</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">4.9</p>
                <Star className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
              </div>
              <p className="text-primary-foreground/80 text-sm mt-1">{t("rating")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
