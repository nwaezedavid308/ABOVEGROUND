"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, Shield, Lightbulb, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)

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

    const elements = [heroRef.current, servicesRef.current, valuesRef.current]
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
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          style={{ animation: "fadeInUp 1s ease-out 0.5s forwards" }}
        >
          <p className="text-lg md:text-xl mb-4 text-slate-200 font-medium">
            REIMAGINING CONSTRUCTION – BUILDING TRUST, QUALITY, AND THE FUTURE
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            BUILDING BEYOND
            <br />
            <span className="text-slate-300">THE SURFACE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
            Where You See It. Trust It. And We Build It.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                See Our Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What We Build</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From residential dreams to commercial landmarks, we craft spaces that stand the test of time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "New Construction",
                description: "Building your vision from the ground up with precision and care",
              },
              {
                icon: Users,
                title: "Renovation",
                description: "Transforming existing spaces into something extraordinary",
              },
              {
                icon: Award,
                title: "Restoration",
                description: "Bringing historic and damaged properties back to life",
              },
              {
                icon: Shield,
                title: "Land Development",
                description: "Creating communities and commercial spaces that matter",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl border-0 shadow-lg opacity-0 translate-y-8"
                style={{ animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s forwards` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-700 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Built on Strong Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every project we take on is guided by principles that ensure excellence, trust, and lasting relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Vision-Driven Innovation",
                description: "We reimagine potential and shape purposeful design that stands out",
              },
              {
                icon: Shield,
                title: "Integrity & Transparency",
                description: "Honest and open in every quote, every project, every conversation",
              },
              {
                icon: Award,
                title: "Quality Without Compromise",
                description: "Excellence from start to finish, no shortcuts, no exceptions",
              },
              {
                icon: Users,
                title: "Client-Centered Collaboration",
                description: "Your vision becomes our blueprint for success",
              },
              {
                icon: Building2,
                title: "Aboveground Excellence",
                description: "Exceeding industry standards through accountability and drive",
              },
              {
                icon: Heart,
                title: "Safety & Sustainability",
                description: "Building responsibly with care for people and our planet",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl border-0 shadow-lg opacity-0 translate-y-8"
                style={{ animation: `fadeInUp 0.8s ease-out ${0.3 + index * 0.1}s forwards` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
            Let's turn your vision into reality. Get in touch with our team today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Learn More About Us
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
