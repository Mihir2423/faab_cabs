"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X, Phone, ChevronDown, Globe } from "lucide-react"

export function Header() {
  const { t, language, setLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLangDropdown, setShowLangDropdown] = useState(false)

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
                {t("outstation_cabs")} <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-card rounded-lg shadow-lg p-4 min-w-48 border border-border">
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">{t("one_way_cabs")}</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">{t("round_trip")}</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">{t("multi_city")}</Link>
                </div>
              </div>
            </div>
            <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("local_rentals")}
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("airport_transfer")}
            </Link>
            <div className="group relative">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                {t("car_types")} <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-card rounded-lg shadow-lg p-4 min-w-48 border border-border">
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">{t("sedan")}</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">{t("suv")}</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">{t("luxury")}</Link>
                  <Link href="#" className="block py-2 hover:text-primary transition-colors">{t("tempo_traveller")}</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Contact & Language */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">9876-543-210</span>
            </a>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="font-medium">{language === "en" ? "EN" : "हि"}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showLangDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-lg border border-border min-w-32 z-50">
                  <button
                    onClick={() => {
                      setLanguage("en")
                      setShowLangDropdown(false)
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-secondary/50 flex items-center gap-2 ${language === "en" ? "text-primary font-medium" : ""}`}
                  >
                    <span>🇺🇸</span> English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("hi")
                      setShowLangDropdown(false)
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-secondary/50 flex items-center gap-2 ${language === "hi" ? "text-primary font-medium" : ""}`}
                  >
                    <span>🇮🇳</span> हिंदी
                  </button>
                </div>
              )}
            </div>
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
                {t("outstation_cabs")}
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                {t("local_rentals")}
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                {t("airport_transfer")}
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                {t("car_types")}
              </Link>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors py-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">9876-543-210</span>
              </a>
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 py-2">
                <Globe className="h-4 w-4" />
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded ${language === "en" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-3 py-1 rounded ${language === "hi" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
                >
                  हिंदी
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
