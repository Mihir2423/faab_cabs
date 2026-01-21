import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Patna",
    rating: 5,
    text: "Excellent service! The driver was punctual, professional, and the car was immaculate. Booking was seamless and the pricing was exactly as quoted. Highly recommend Fab Cabs!",
    trip: "Patna to Gaya",
  },
  {
    name: "Sunita Devi",
    location: "Muzaffarpur",
    rating: 5,
    text: "Used Fab Cabs for my airport pickup at Patna. The driver was waiting when I landed and helped with luggage. Very comfortable ride. Will definitely use again!",
    trip: "Patna Airport Transfer",
  },
  {
    name: "Amit Singh",
    location: "Bhagalpur",
    rating: 5,
    text: "Booked a round trip from Patna to Varanasi for a family pilgrimage. Great experience! Clean car, safe driving, and transparent pricing with no surprises.",
    trip: "Patna to Varanasi",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy travelers who trust Fab Cabs for their journeys across Bihar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 text-sm leading-relaxed">
                {`"${testimonial.text}"`}
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-xs text-accent mt-1">{testimonial.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
