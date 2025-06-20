"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const heroRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)

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

    const elements = [heroRef.current, projectsRef.current, statsRef.current]
    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Vancouver Luxury Condominiums",
      category: "New Construction",
      location: "Downtown Vancouver, BC",
      year: "2024",
      description: "A stunning 24-story residential tower featuring modern amenities and sustainable design elements.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Residential", "High-Rise", "Sustainable"],
    },
    {
      title: "Heritage Building Restoration",
      category: "Restoration",
      location: "Gastown, Vancouver, BC",
      year: "2023",
      description:
        "Careful restoration of a 1920s heritage building, preserving historical character while adding modern functionality.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Heritage", "Commercial", "Historic"],
    },
    {
      title: "Modern Office Complex",
      category: "Commercial Construction",
      location: "Richmond, BC",
      year: "2024",
      description:
        "State-of-the-art office complex designed for the future of work with flexible spaces and green technology.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Commercial", "Modern", "Tech-Forward"],
    },
    {
      title: "Residential Community Development",
      category: "Land Development",
      location: "Surrey, BC",
      year: "2023",
      description: "Master-planned community featuring 150 homes with parks, walking trails, and community amenities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Community", "Residential", "Master-Planned"],
    },
    {
      title: "Boutique Hotel Renovation",
      category: "Renovation",
      location: "Yaletown, Vancouver, BC",
      year: "2024",
      description: "Complete transformation of a dated hotel into a modern boutique experience with luxury finishes.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Hospitality", "Luxury", "Boutique"],
    },
    {
      title: "Educational Facility Expansion",
      category: "Institutional",
      location: "Burnaby, BC",
      year: "2023",
      description: "Expansion of a local school with new classrooms, laboratory spaces, and recreational facilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Education", "Institutional", "Community"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Showcasing excellence in construction across Vancouver and beyond
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            {[
              { icon: Building, number: "150+", label: "Projects Completed" },
              { icon: Users, number: "500+", label: "Happy Clients" },
              { icon: Calendar, number: "15+", label: "Years Experience" },
              { icon: MapPin, number: "25+", label: "Locations Served" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="rounded-2xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each project tells a story of craftsmanship, innovation, and client satisfaction
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl border-0 shadow-lg overflow-hidden opacity-0 translate-y-8"
                style={{ animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s forwards` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slate-600 text-white hover:bg-slate-700 rounded-lg px-3 py-1">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <div className="flex items-center text-slate-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                    <Calendar className="w-4 h-4 ml-4 mr-2" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="rounded-lg border-slate-300 text-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Aboveground exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched.",
                author: "Sarah Chen",
                role: "Property Developer",
              },
              {
                quote:
                  "From start to finish, the team was professional, transparent, and delivered exactly what they promised.",
                author: "Michael Rodriguez",
                role: "Business Owner",
              },
              {
                quote:
                  "The renovation of our heritage building was handled with such care and expertise. Truly impressive work.",
                author: "Jennifer Walsh",
                role: "Property Manager",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="rounded-2xl shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <p className="text-slate-600 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-slate-800">{testimonial.author}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let's create something amazing together.
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
