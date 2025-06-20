"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Home, Wrench, TreePine, Hammer, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const processRef = useRef<HTMLElement>(null)

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

    const elements = [heroRef.current, servicesRef.current, processRef.current]
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your vision and needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What We Do Best</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to completion, we deliver excellence in every aspect of construction
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                icon: Building2,
                title: "New Construction",
                description:
                  "Building your dreams from the ground up with precision, quality, and attention to every detail. Whether it's residential or commercial, we create structures that stand the test of time.",
                features: [
                  "Custom Design Build",
                  "Commercial Construction",
                  "Residential Homes",
                  "Multi-Unit Developments",
                ],
              },
              {
                icon: Home,
                title: "Residential & Commercial Renovation",
                description:
                  "Transform your existing space into something extraordinary. We breathe new life into homes and businesses, maximizing potential while respecting your budget and timeline.",
                features: [
                  "Kitchen & Bathroom Remodels",
                  "Office Renovations",
                  "Whole Home Makeovers",
                  "Retail Space Updates",
                ],
              },
              {
                icon: Wrench,
                title: "Property Restoration",
                description:
                  "Bringing damaged or historic properties back to their former glory. Our restoration experts combine traditional craftsmanship with modern techniques.",
                features: ["Historic Preservation", "Damage Repair", "Heritage Buildings", "Insurance Restorations"],
              },
              {
                icon: TreePine,
                title: "Land Development",
                description:
                  "Creating communities and commercial spaces that matter. We handle everything from site preparation to infrastructure development.",
                features: [
                  "Site Planning",
                  "Infrastructure Development",
                  "Community Planning",
                  "Commercial Developments",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl border-0 shadow-lg opacity-0 translate-y-8"
                style={{ animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s forwards` }}
              >
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-slate-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section ref={processRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven process ensures your project runs smoothly from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                step: "01",
                title: "Consultation",
                description: "We listen to your vision, assess your needs, and provide honest, transparent guidance.",
              },
              {
                icon: Hammer,
                step: "02",
                title: "Planning",
                description: "Detailed planning and design phase where we turn your vision into actionable blueprints.",
              },
              {
                icon: Clock,
                step: "03",
                title: "Execution",
                description: "Skilled craftsmen bring your project to life with precision and attention to detail.",
              },
              {
                icon: Award,
                step: "04",
                title: "Completion",
                description: "Final walkthrough, quality assurance, and ongoing support for your satisfaction.",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl border-0 shadow-lg opacity-0 translate-y-8"
                style={{ animation: `fadeInUp 0.8s ease-out ${0.3 + index * 0.1}s forwards` }}
              >
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-slate-300 mb-4">{step.step}</div>
                  <div className="w-14 h-14 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Why Choose Aboveground?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Transparency First",
                description:
                  "No hidden costs, no surprises. We believe in honest communication from quote to completion.",
              },
              {
                title: "Quality Guaranteed",
                description: "We stand behind our work with comprehensive warranties and ongoing support.",
              },
              {
                title: "On Time, On Budget",
                description: "Efficient planning and execution means your project gets done right, when promised.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with quality, transparency, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Free Quote
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                View Our Work
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
