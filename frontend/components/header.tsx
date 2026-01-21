"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground font-bold text-xl md:text-2xl px-3 py-1 rounded">
              FAB CABS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="group relative">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Outstation Cabs <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-card rounded-lg shadow-lg p-4 min-w-48 border border-border">
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">One Way Cabs</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">Round Trip</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">Multi-City</Link>
                </div>
              </div>
            </div>
            <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Local Rentals
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Airport Transfer
            </Link>
            <div className="group relative">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Car Types <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-card rounded-lg shadow-lg p-4 min-w-48 border border-border">
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">Sedan</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">SUV</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">Luxury</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">Tempo Traveller</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Contact & Login */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">9876-543-210</span>
            </a>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Outstation Cabs
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Local Rentals
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Airport Transfer
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Car Types
              </Link>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors py-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">9876-543-210</span>
              </a>
              <Button className="w-full bg-primary text-primary-foreground">
                Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
