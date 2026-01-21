"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Calendar, Clock, ArrowRight, Car, Plane, RotateCcw, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type TripType = "outstation" | "local" | "airport"
type OutstationType = "oneway" | "roundtrip"

const carTypes = [
  { id: "sedan", name: "Sedan", nameHi: "सेडान", maxPassengers: 4 },
  { id: "suv", name: "SUV", nameHi: "एसयूवी", maxPassengers: 6 },
  { id: "innova", name: "Innova", nameHi: "इनोवा", maxPassengers: 7 },
  { id: "innova_crysta", name: "Innova Crysta", nameHi: "इनोवा क्रिस्टा", maxPassengers: 7 },
  { id: "tempo", name: "Tempo Traveller", nameHi: "टेम्पो ट्रैवलर", maxPassengers: 12 },
  { id: "luxury", name: "Luxury Car", nameHi: "लग्जरी कार", maxPassengers: 4 },
]

export function HeroSection() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const [tripType, setTripType] = useState<TripType>("outstation")
  const [outstationType, setOutstationType] = useState<OutstationType>("oneway")
  const [selectedCar, setSelectedCar] = useState("")
  const [showCarDropdown, setShowCarDropdown] = useState(false)

  const selectedCarData = carTypes.find(car => car.id === selectedCar)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/thank-you")
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t("hero_title")} <span className="text-accent">{t("hero_highlight")}</span> {t("hero_title_end")}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-6">
              {t("hero_subtitle")}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">50+</span>
                </div>
                <span className="text-muted-foreground">{t("cities")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">500+</span>
                </div>
                <span className="text-muted-foreground">{t("routes")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">50K+</span>
                </div>
                <span className="text-muted-foreground">{t("happy_customers")}</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
            <form onSubmit={handleSubmit}>
              {/* Trip Type Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                <button
                  type="button"
                  onClick={() => setTripType("outstation")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap",
                    tripType === "outstation"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  <Car className="h-4 w-4" />
                  {t("outstation")}
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("local")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap",
                    tripType === "local"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  <Clock className="h-4 w-4" />
                  {t("local_rentals")}
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("airport")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap",
                    tripType === "airport"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  <Plane className="h-4 w-4" />
                  {t("airport")}
                </button>
              </div>

              {/* Outstation Sub-tabs */}
              {tripType === "outstation" && (
                <div className="flex gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setOutstationType("oneway")}
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium transition-colors",
                      outstationType === "oneway" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <div className={cn(
                      "h-4 w-4 rounded-full border-2",
                      outstationType === "oneway" ? "border-primary bg-primary" : "border-muted-foreground"
                    )} />
                    {t("one_way")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOutstationType("roundtrip")}
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium transition-colors",
                      outstationType === "roundtrip" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <div className={cn(
                      "h-4 w-4 rounded-full border-2",
                      outstationType === "roundtrip" ? "border-primary bg-primary" : "border-muted-foreground"
                    )} />
                    {t("round_trip")}
                  </button>
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Airport-specific field */}
                {tripType === "airport" ? (
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                    <Input
                      placeholder={t("enter_airport")}
                      className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                ) : (
                  <>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                      <Input
                        placeholder={t("enter_city")}
                        className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                        required
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-10">
                        <div className="bg-primary text-primary-foreground p-1 rounded-full">
                          <RotateCcw className="h-4 w-4" />
                        </div>
                      </div>
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
                      <Input
                        placeholder={t("enter_city")}
                        className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                        required
                      />
                    </div>
                  </>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="date"
                      className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="time"
                      defaultValue="10:00"
                      className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                {tripType === "outstation" && outstationType === "roundtrip" && (
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="date"
                      placeholder="Return Date"
                      className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                )}

                {tripType === "local" && (
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">{t("select_package")}</p>
                    <div className="grid grid-cols-3 gap-2">
                      {["4 hrs / 40 km", "8 hrs / 80 km", "12 hrs / 120 km"].map((pkg) => (
                        <button
                          type="button"
                          key={pkg}
                          className="text-xs md:text-sm py-2 px-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                        >
                          {pkg}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Phone Number */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder={t("enter_phone")}
                    className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                </div>

                {/* Car Type Dropdown */}
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <button
                    type="button"
                    onClick={() => setShowCarDropdown(!showCarDropdown)}
                    className="w-full pl-10 pr-10 h-12 bg-secondary/50 border border-border rounded-md text-left flex items-center justify-between focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <span className={selectedCar ? "text-foreground" : "text-muted-foreground"}>
                      {selectedCarData 
                        ? `${language === "hi" ? selectedCarData.nameHi : selectedCarData.name} (${t("max_passengers")}: ${selectedCarData.maxPassengers})`
                        : t("select_car")
                      }
                    </span>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </button>
                  
                  {showCarDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                      {carTypes.map((car) => (
                        <button
                          type="button"
                          key={car.id}
                          onClick={() => {
                            setSelectedCar(car.id)
                            setShowCarDropdown(false)
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-secondary/50 flex justify-between items-center border-b border-border last:border-b-0"
                        >
                          <span className="font-medium">{language === "hi" ? car.nameHi : car.name}</span>
                          <span className="text-sm text-muted-foreground">{t("max_passengers")}: {car.maxPassengers}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <Button 
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
                >
                  {t("submit_request")} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-4">
              {t("no_hidden_charges")}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
    </section>
  )
}
