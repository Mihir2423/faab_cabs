"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage, t, hasSelectedLanguage, setHasSelectedLanguage } = useLanguage()

  if (hasSelectedLanguage) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4 border border-border">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t("select_language")}
          </h1>
          <p className="text-muted-foreground">भाषा चुनें / Select Language</p>
        </div>

        <div className="space-y-3 mb-8">
          <button
            onClick={() => setLanguage("en")}
            className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
              language === "en"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇬🇧</span>
              <div className="text-left">
                <p className="font-semibold text-foreground">English</p>
                <p className="text-sm text-muted-foreground">Continue in English</p>
              </div>
            </div>
            {language === "en" && (
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>

          <button
            onClick={() => setLanguage("hi")}
            className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
              language === "hi"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div className="text-left">
                <p className="font-semibold text-foreground">हिंदी</p>
                <p className="text-sm text-muted-foreground">हिंदी में जारी रखें</p>
              </div>
            </div>
            {language === "hi" && (
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        </div>

        <Button
          onClick={() => setHasSelectedLanguage(true)}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
        >
          {t("continue")}
        </Button>

        <p className="text-center text-xs text-muted-foreground mt-4">
          FAB CABS - Bihar's Trusted Car Rental Service
        </p>
      </div>
    </div>
  )
}
