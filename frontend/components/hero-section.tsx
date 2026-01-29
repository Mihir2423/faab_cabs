"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Calendar, Clock, ArrowRight, Car, Plane, RotateCcw, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type TripType = "outstation" | "local" | "airport"
type OutstationType = "oneway" | "roundtrip"
type AirportType = "pickup" | "drop"

const carTypes = [
  { id: "sedan", name: "Sedan", nameHi: "सेडान", maxPassengers: 4 },
  { id: "suv", name: "SUV", nameHi: "एसयूवी", maxPassengers: 6 },
  { id: "innova_crysta", name: "Innova Crysta", nameHi: "इनोवा क्रिस्टा", maxPassengers: 7 },
  { id: "tempo", name: "Tempo Traveller", nameHi: "टेम्पो ट्रैवलर", maxPassengers: 12 },
]

const LOCAL_PACKAGES = ["4 hrs / 40 km", "8 hrs / 80 km", "12 hrs / 120 km"] as const

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

export function HeroSection() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const [tripType, setTripType] = useState<TripType>("outstation")
  const [outstationType, setOutstationType] = useState<OutstationType>("oneway")
  const [airportType, setAirportType] = useState<AirportType>("pickup")
  const [selectedCar, setSelectedCar] = useState("")
  const [showCarDropdown, setShowCarDropdown] = useState(false)
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [airportName, setAirportName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("10:00")
  const [returnDate, setReturnDate] = useState("")
  const [localPackage, setLocalPackage] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const selectedCarData = carTypes.find(car => car.id === selectedCar)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setIsSubmitting(true)
    try {
      const carDisplay = selectedCarData ? (language === "hi" ? selectedCarData.nameHi : selectedCarData.name) : ""
      const payload = {
        tripType,
        outstationType: tripType === "outstation" ? outstationType : undefined,
        airportType: tripType === "airport" ? airportType : undefined,
        fromCity: tripType === "airport" ? "" : fromCity,
        toCity: tripType === "airport" ? "" : toCity,
        airportName: tripType === "airport" ? airportName : undefined,
        date,
        time,
        returnDate: tripType === "outstation" && outstationType === "roundtrip" ? returnDate : undefined,
        localPackage: tripType === "local" ? localPackage : undefined,
        phone,
        carType: carDisplay || selectedCar,
      }
      const res = await fetch(`${API_BASE}/api/booking-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setSubmitError(data?.error || data?.detail || `Request failed (${res.status})`)
        return
      }
      router.push("/thank-you")
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero_section_2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Gradient Overlay - fades to black on right, with overall transparency */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-background/60 to-black/90" />
      
      {/* Additional overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-background/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-primary text-primary-foreground font-bold text-xl md:text-2xl px-3 py-1 rounded">
                  FAAB CABS
                </div>
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t("hero_title")} <span className="text-accent">{t("hero_highlight")}</span> {t("hero_title_end")}
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Image
                src="/bihar_govt.png"
                alt="Bihar Government Logo"
                width={64}
                height={64}
                className="object-contain"
              />
              <p className="text-muted-foreground text-sm md:text-base">
                {t("recognized_by")}{" "}
                <span className="font-semibold text-foreground bg-accent/10 px-2 py-0.5 rounded-md border border-accent/20">
                  {t("bihar_govt_startup_scheme")}
                </span>
              </p>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl mb-6">
              {t("hero_subtitle")}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">28+</span>
                </div>
                <span className="text-muted-foreground">{t("cities")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">100+</span>
                </div>
                <span className="text-muted-foreground">{t("routes")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">2.5K+</span>
                </div>
                <span className="text-muted-foreground">{t("happy_customers")}</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border relative">
            {/* Discount Badge - Starburst */}
            <div className="absolute -top-4 -right-4 z-20 flex flex-col items-center">
              {/* Grouped Star Container */}
              <div className="relative -mt-2">
                {/* Outer stroke layer */}
                <div
                  className="w-[116px] h-[116px] bg-red-700 absolute top-0 left-1/2 -translate-x-1/2"
                  style={{
                    clipPath:
                      'polygon(50% 0%, 60% 10%, 75% 5%, 80% 20%, 95% 25%, 85% 40%, 100% 50%, 85% 60%, 95% 75%, 80% 80%, 75% 95%, 60% 90%, 50% 100%, 40% 90%, 25% 95%, 20% 80%, 5% 75%, 15% 60%, 0% 50%, 15% 40%, 5% 25%, 20% 20%, 25% 5%, 40% 10%)',
                    filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.5))'
                  }}
                />
                {/* Inner fill layer */}
                <div
                  className="w-28 h-28 bg-red-500 flex items-center justify-center text-white relative"
                  style={{
                    clipPath:
                      'polygon(50% 0%, 60% 10%, 75% 5%, 80% 20%, 95% 25%, 85% 40%, 100% 50%, 85% 60%, 95% 75%, 80% 80%, 75% 95%, 60% 90%, 50% 100%, 40% 90%, 25% 95%, 20% 80%, 5% 75%, 15% 60%, 0% 50%, 15% 40%, 5% 25%, 20% 20%, 25% 5%, 40% 10%)',
                    filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.5))'
                  }}
                >
                  <div className="text-center font-extrabold">
                    <div className="text-xs">upto</div>
                    <div className="text-xl">50%</div>
                    <div className="text-xs">OFF</div>
                  </div>
                </div>
              </div>
              
              {/* Text box below star */}
              <div className="mt-2 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded whitespace-nowrap shadow-md z-30">
                First Booking
              </div>
            </div>
            
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
                  <>
                    {/* Pickup/Drop Selection */}
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setAirportType("pickup")}
                        className={cn(
                          "flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all",
                          airportType === "pickup"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        )}
                      >
                        {t("pickup")}
                      </button>
                      <button
                        type="button"
                        onClick={() => setAirportType("drop")}
                        className={cn(
                          "flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all",
                          airportType === "drop"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        )}
                      >
                        {t("drop")}
                      </button>
                    </div>
                    <div className="relative">
                      <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                      <Input
                        placeholder={t("enter_airport")}
                        className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                        value={airportName}
                        onChange={(e) => setAirportName(e.target.value)}
                        required={tripType === "airport"}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                      <Input
                        placeholder={t("enter_city")}
                        className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
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
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
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
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="time"
                      className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
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
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      required
                    />
                  </div>
                )}

                {tripType === "local" && (
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">{t("select_package")}</p>
                    <div className="grid grid-cols-3 gap-2">
                      {LOCAL_PACKAGES.map((pkg) => (
                        <button
                          type="button"
                          key={pkg}
                          onClick={() => setLocalPackage(pkg)}
                          className={cn(
                            "text-xs md:text-sm py-2 px-3 rounded-lg border transition-colors",
                            localPackage === pkg
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary hover:bg-primary/5"
                          )}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

                {submitError && (
                  <p className="text-sm text-destructive text-center">{submitError}</p>
                )}
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Sending…
                    </span>
                  ) : (
                    <>
                      {t("submit_request")} <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
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
