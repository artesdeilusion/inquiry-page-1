"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function DomainPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setIsSubmitted(true)
    } catch (err) {
      setError("Failed to send message. Please try again.")
      console.error("EmailJS error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "aydeed.com",
    "description": "Premium domain name aydeed.com available for purchase. Short, memorable, and brandable domain perfect for tech startups, SaaS products, or digital ventures.",
    "category": "Domain Name",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "description": "Contact for pricing - Premium domain for sale"
    },
    "brand": {
      "@type": "Brand",
      "name": "aydeed"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
       
        {/* Domain Name */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
          aydeed
          <span className="text-primary">.com</span>
        </h1>

        <p className="text-muted-foreground text-lg mb-12">
          This premium domain is available for acquisition
        </p>

        {/* Inquiry Form */}
        {isSubmitted ? (
          <div className="border border-primary/30 bg-primary/5 p-8">
            <div className="w-12 h-12 border border-primary mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif text-foreground mb-2">
              Thank You
            </h3>
            <p className="text-muted-foreground">
              We&apos;ll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
            />
            <Input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
            />
            <Textarea
              name="message"
              placeholder="Your Offer or Message"
              rows={4}
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground resize-none"
            />
            {error && (
              <p className="text-destructive text-sm">{error}</p>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-base font-medium"
            >
              {isSubmitting ? (
                <>
                  <Spinner className="mr-2" />
                  Sending...
                </>
              ) : (
                "Make an Inquiry"
              )}
            </Button>
          </form>
        )}

        <p className="text-muted-foreground/60 text-sm mt-8">
          Secure transaction via escrow service
        </p>
      </div>
    </main>
    </>
  )
}
