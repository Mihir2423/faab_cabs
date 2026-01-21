import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="bg-primary text-primary-foreground font-bold text-xl px-3 py-1 rounded inline-block mb-4">
              FAB CABS
            </div>
            <p className="text-background/70 text-sm mb-4">
              Bihar's trusted inter-city car rental service with 50+ cities and 500+ routes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="#" className="hover:text-primary transition-colors">Outstation Cabs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Local Rentals</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Airport Transfer</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">One Way Cabs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Tempo Traveller</Link></li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className="font-semibold mb-4">Popular Cities</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="#" className="hover:text-primary transition-colors">Patna</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Gaya</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Muzaffarpur</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Bhagalpur</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Darbhanga</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">9876-543-210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:support@fabcabs.com" className="hover:text-primary transition-colors">support@fabcabs.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Patna, Bihar, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2026 Fab Cabs Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-background/60">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Refund Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
