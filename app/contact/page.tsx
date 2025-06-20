"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const heroRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLElement>(null)
  const infoRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = [heroRef.current, formRef.current, infoRef.current]
    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss how we can bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <Card className="rounded-2xl shadow-2xl border-0">
                <CardContent className="p-10">
                  <h2 className="text-3xl font-bold text-slate-800 mb-8">Start Your Project Today</h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                      <p className="text-slate-600">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-slate-700 font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="mt-2 rounded-xl border-slate-300 focus:border-slate-600 focus:ring-slate-600"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-slate-700 font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="mt-2 rounded-xl border-slate-300 focus:border-slate-600 focus:ring-slate-600"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="text-slate-700 font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="mt-2 rounded-xl border-slate-300 focus:border-slate-600 focus:ring-slate-600"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service" className="text-slate-700 font-medium">
                            Service Needed
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("service", value)}>
                            <SelectTrigger className="mt-2 rounded-xl border-slate-300 focus:border-slate-600 focus:ring-slate-600">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new-construction">New Construction</SelectItem>
                              <SelectItem value="renovation">Renovation</SelectItem>
                              <SelectItem value="restoration">Restoration</SelectItem>
                              <SelectItem value="land-development">Land Development</SelectItem>
                              <SelectItem value="consultation">Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-slate-700 font-medium">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          rows={6}
                          className="mt-2 rounded-xl border-slate-300 focus:border-slate-600 focus:ring-slate-600"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">Let's Connect</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    We're here to answer your questions and help you get started on your next project. Reach out to us
                    through any of the methods below.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Location",
                      info: "Vancouver, British Columbia, Canada",
                      description: "Serving the Greater Vancouver Area",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      info: "u.anitherealtor@gmail.com",
                      description: "We'll respond within 24 hours",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      info: "Coming Soon",
                      description: "Available Monday - Friday, 8AM - 6PM",
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      info: "Monday - Friday: 8AM - 6PM",
                      description: "Saturday: 9AM - 4PM",
                    },
                  ].map((contact, index) => (
                    <Card
                      key={index}
                      className="rounded-2xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-800 mb-1">{contact.title}</h3>
                            <p className="text-slate-800 font-medium mb-1">{contact.info}</p>
                            <p className="text-slate-600 text-sm">{contact.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-slate-50 to-slate-100">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Emergency Services</h3>
                    <p className="text-slate-600 mb-4">
                      Need urgent construction or restoration services? We're here to help.
                    </p>
                    <Button className="bg-slate-600 hover:bg-slate-700 text-white rounded-xl">Emergency Contact</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How do I get a quote for my project?",
                answer:
                  "Simply fill out our contact form or email us directly. We'll schedule a consultation to discuss your project and provide a detailed, transparent quote.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We primarily serve the Greater Vancouver Area, including Vancouver, Richmond, Burnaby, Surrey, and surrounding communities.",
              },
              {
                question: "Do you handle both residential and commercial projects?",
                answer:
                  "Yes! We work on both residential and commercial projects, from single-family homes to large commercial developments.",
              },
              {
                question: "What makes Aboveground different?",
                answer:
                  "Our commitment to transparency, quality without compromise, and building relationships that last. We believe in doing things right the first time.",
              },
            ].map((faq, index) => (
              <Card key={index} className="rounded-2xl shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
