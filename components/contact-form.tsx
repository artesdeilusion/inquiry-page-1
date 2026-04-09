"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mb-6 text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false)
            setFormData({ name: "", email: "", subject: "", message: "" })
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup className="grid gap-6 sm:grid-cols-2">
        <Field>
          <FieldLabel htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-foreground">
            Name
          </FieldLabel>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-2 border-border bg-background pl-10 transition-all focus:border-primary focus:ring-0"
            />
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-foreground">
            Email
          </FieldLabel>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-2 border-border bg-background pl-10 transition-all focus:border-primary focus:ring-0"
            />
          </div>
        </Field>
      </FieldGroup>

      <Field>
        <FieldLabel htmlFor="subject" className="text-xs font-semibold uppercase tracking-wide text-foreground">
          Subject
        </FieldLabel>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border-2 border-border bg-background pl-10 transition-all focus:border-primary focus:ring-0"
          />
        </div>
      </Field>

      <Field>
        <FieldLabel htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-foreground">
          Message
        </FieldLabel>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="resize-none border-2 border-border bg-background transition-all focus:border-primary focus:ring-0"
        />
      </Field>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Spinner size="sm" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
