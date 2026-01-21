import { Shield, CreditCard, Headphones, MapPin, Clock, Award } from "lucide-react"

const features = [
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "All-inclusive fares with no hidden charges. Fuel, tolls, taxes & driver allowance included.",
  },
  {
    icon: Shield,
    title: "Safe & Verified",
    description: "30-point verification for all cars & drivers. GPS-enabled vehicles for your safety.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you before, during & after your trip.",
  },
  {
    icon: MapPin,
    title: "Bihar-Wide Coverage",
    description: "Available across 50+ cities covering 500+ routes throughout Bihar.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "Punctual pickups with real-time tracking. Never miss your train or meeting.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Clean, sanitized & well-maintained vehicles with professional chauffeurs.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Fab Cabs?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with Bihar's most trusted car rental service
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
              <p className="text-primary-foreground/80 text-sm mt-1">Cities Covered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Routes Available</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">50K+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">4.8</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
