"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center border border-border">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
          <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {t("thank_you")}
        </h1>

        {/* Message */}
        <p className="text-lg text-muted-foreground mb-2">
          {t("request_submitted")}
        </p>
        
        <div className="flex items-center justify-center gap-2 text-accent mb-8">
          <MessageCircle className="h-5 w-5" />
          <p className="font-medium">
            {t("whatsapp_contact")}
          </p>
        </div>

        {/* Decorative Line */}
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />

        {/* Back Button */}
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12">
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t("back_to_home")}
          </Button>
        </Link>

        {/* Company Info */}
        <p className="text-sm text-muted-foreground mt-8">
          FAB CABS - Bihar's Trusted Car Rental Service
        </p>
      </div>
    </main>
  )
}
