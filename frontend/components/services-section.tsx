import { Car, Plane, Clock, Users, Sparkles, Shield } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Outstation Cabs",
    description: "One-way & round trip cabs to 7500+ destinations across India",
    highlight: "Starting ₹9/km",
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description: "Reliable airport pickup & drop services across all major airports",
    highlight: "On-time guarantee",
  },
  {
    icon: Clock,
    title: "Local Rentals",
    description: "Hourly rental packages for local city travel needs",
    highlight: "4hr, 8hr, 12hr packs",
  },
  {
    icon: Users,
    title: "Tempo Traveller",
    description: "12-26 seater vehicles for group travel and family trips",
    highlight: "From ₹21/km",
  },
  {
    icon: Sparkles,
    title: "Luxury Cars",
    description: "Premium sedans & SUVs for corporate & special occasions",
    highlight: "Innova, Fortuner & more",
  },
  {
    icon: Shield,
    title: "Safe & Sanitized",
    description: "All vehicles undergo 30-point verification & sanitization",
    highlight: "100% verified drivers",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from a wide range of car rental services tailored to meet all your travel needs
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
