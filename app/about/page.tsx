"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Globe, Target, Eye } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const visionRef = useRef<HTMLElement>(null)

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

    const elements = [heroRef.current, storyRef.current, visionRef.current]
    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Aboveground</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Building trust, quality, and the future - one project at a time
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Aboveground Renovation and Construction Corp was born from a simple belief: construction should be
                  about more than just building structures. It should be about building trust, relationships, and a
                  better future.
                </p>
                <p>
                  Based in the heart of Vancouver, BC, we've made it our mission to reimagine what construction means.
                  We don't just build - we craft experiences, create lasting value, and exceed expectations at every
                  turn.
                </p>
                <p>
                  Our approach is different. We believe in transparency from the first quote to the final walkthrough.
                  We believe in quality that doesn't compromise. And we believe in building relationships that last long
                  after the project is complete.
                </p>
              </div>
            </div>
            <div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <Card className="rounded-2xl shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8 bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-slate-600" />
                      <div>
                        <h3 className="font-bold text-slate-800">Location</h3>
                        <p className="text-slate-600">Vancouver, British Columbia, Canada</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Globe className="w-6 h-6 text-slate-600" />
                      <div>
                        <h3 className="font-bold text-slate-800">Industry</h3>
                        <p className="text-slate-600">Construction & Real Estate Development</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-slate-600" />
                      <div>
                        <h3 className="font-bold text-slate-800">Contact</h3>
                        <p className="text-slate-600">u.anitherealtor@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={visionRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="rounded-2xl shadow-xl border-0 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  "Aboveground: Where You See It. Trust It. And We Build It — Beyond the Surface."
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-xl border-0 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become a globally recognized construction brand operating across continents, redefining modern
                  construction for future generations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Who We Serve */}
          <div className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h3 className="text-3xl font-bold text-slate-800 mb-8">Who We Serve</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "The Elder Generation",
                "Business Owners",
                "Property Managers",
                "Government & Industries",
                "Schools & Institutions",
                "Hotels & Hospitality",
              ].map((client, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-slate-700 font-medium">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
            Experience the Aboveground difference. Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get In Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Our Services
              </Button>
            </Link>
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
