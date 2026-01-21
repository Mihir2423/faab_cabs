import { Smartphone, CheckCircle2 } from "lucide-react"

const features = [
  "Easy booking in 30 seconds",
  "Real-time driver tracking",
  "Exclusive app-only discounts",
  "Instant booking confirmation",
]

export function AppDownload() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-accent to-accent/90 rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-accent-foreground">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Download the Fab Cabs App
              </h2>
              <p className="text-accent-foreground/90 mb-6">
                Book cabs on the go with our mobile app. Available on Android & iOS.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-accent-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-accent-foreground text-accent px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs opacity-80">Download on the</p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-accent-foreground text-accent px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs opacity-80">Get it on</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-accent-foreground/10 rounded-[3rem] flex items-center justify-center border-4 border-accent-foreground/20">
                  <Smartphone className="h-32 w-32 text-accent-foreground/40" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm">
                  4.8 Rated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
