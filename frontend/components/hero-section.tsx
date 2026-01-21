"use client"

import { useState } from "react"
import { MapPin, Calendar, Clock, ArrowRight, Car, Plane, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type TripType = "outstation" | "local" | "airport"
type OutstationType = "oneway" | "roundtrip"

export function HeroSection() {
  const [tripType, setTripType] = useState<TripType>("outstation")
  const [outstationType, setOutstationType] = useState<OutstationType>("oneway")

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Bihar's Trusted <span className="text-accent">Inter-City</span> Car Rental Service
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-6">
              Book cabs across Bihar with transparent pricing, verified drivers & 24/7 support
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">50+</span>
                </div>
                <span className="text-muted-foreground">Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">500+</span>
                </div>
                <span className="text-muted-foreground">Routes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">50K+</span>
                </div>
                <span className="text-muted-foreground">Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
            {/* Trip Type Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              <button
                onClick={() => setTripType("outstation")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap",
                  tripType === "outstation"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <Car className="h-4 w-4" />
                Outstation
              </button>
              <button
                onClick={() => setTripType("local")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap",
                  tripType === "local"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <Clock className="h-4 w-4" />
                Local Rentals
              </button>
              <button
                onClick={() => setTripType("airport")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap",
                  tripType === "airport"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <Plane className="h-4 w-4" />
                Airport
              </button>
            </div>

            {/* Outstation Sub-tabs */}
            {tripType === "outstation" && (
              <div className="flex gap-4 mb-6">
                <button
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
                  One Way
                </button>
                <button
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
                  Round Trip
                </button>
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                <Input
                  placeholder="From - Enter city or airport"
                  className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
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
                  placeholder="To - Enter city or airport"
                  className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="date"
                    className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="time"
                    defaultValue="10:00"
                    className="pl-10 h-12 bg-secondary/50 border-border focus:border-primary"
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
                  />
                </div>
              )}

              {tripType === "local" && (
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Select Package</p>
                  <div className="grid grid-cols-3 gap-2">
                    {["4 hrs / 40 km", "8 hrs / 80 km", "12 hrs / 120 km"].map((pkg) => (
                      <button
                        key={pkg}
                        className="text-xs md:text-sm py-2 px-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        {pkg}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg">
                Explore Cabs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4">
              No hidden charges. All prices inclusive of taxes, tolls & driver allowance
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
