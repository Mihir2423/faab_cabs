"use client"

import { useLanguage } from "@/contexts/language-context"
import { ArrowRight, Car, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const popularRoutes = [
  { from: "Jamui", to: "Patna", distance: "360 km", price: "₹2,799", duration: "3h", rating: 4.8 },
  { from: "Bhagalpur", to: "Deoghar", distance: "270 km", price: "₹1,999", duration: "1h 40m", rating: 4.8 },
  { from: "Jamui", to: "Ayodhya", distance: "1200 km", price: "₹9,999", duration: "8h 30m", rating: 4.7 },
  { from: "Lakhisarai", to: "Patna", distance: "270 km", price: "1,999", duration: "2h 20m", rating: 4.9 },
  { from: "Jamshedpur", to: "Ranchi", distance: "120 km", price: "₹1,499", duration: "1h 40m", rating: 4.7 },
  { from: "Jamui", to: "Deoghar", distance: "200 km", price: "₹1,499", duration: "2h", rating: 4.9 },
]

export function PopularRoutes() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("popular_routes")}
            </h2>
          </div>
          <Button variant="outline" className="w-fit border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent">
            {t("view_all_routes")} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all group"
            >
              <div className="bg-gradient-to-r from-primary/30 to-primary/10 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{route.from}</p>
                    <p className="text-xs text-muted-foreground">Pickup</p>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <div className="w-8 h-px bg-accent" />
                    <Car className="h-5 w-5" />
                    <div className="w-8 h-px bg-accent" />
                  </div>
                  <div className="flex-1 text-right">
                    <p className="font-semibold text-foreground">{route.to}</p>
                    <p className="text-xs text-muted-foreground">Drop</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{route.distance}</span>
                    <span>•</span>
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{route.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">{t("starting_from")}</span>
                    <p className="text-xl font-bold text-accent">{route.price}</p>
                  </div>
                  <Link href="/thank-you">
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      {t("book_now")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
