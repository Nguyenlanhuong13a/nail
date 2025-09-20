import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Clock, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Classic Manicure",
      price: 35,
      duration: "45 min",
      description: "Traditional nail care with cuticle treatment, shaping, and polish application.",
      features: ["Cuticle care", "Nail shaping", "Hand massage", "Polish application"],
      popular: false
    },
    {
      id: 2,
      name: "Gel Manicure",
      price: 50,
      duration: "60 min",
      description: "Long-lasting gel polish that stays chip-free for up to 3 weeks.",
      features: ["Gel base coat", "Color application", "UV curing", "Top coat"],
      popular: true
    },
    {
      id: 3,
      name: "Classic Pedicure",
      price: 45,
      duration: "60 min",
      description: "Complete foot care treatment including exfoliation and nail care.",
      features: ["Foot soak", "Exfoliation", "Cuticle care", "Polish application"],
      popular: false
    },
    {
      id: 4,
      name: "Spa Pedicure",
      price: 65,
      duration: "75 min",
      description: "Luxurious pedicure with extended massage and premium treatments.",
      features: ["Extended foot soak", "Exfoliation", "Foot massage", "Paraffin treatment"],
      popular: true
    },
    {
      id: 5,
      name: "Nail Art Design",
      price: 25,
      duration: "30 min",
      description: "Creative nail art designs to express your unique style.",
      features: ["Custom design", "Hand-painted details", "Glitter accents", "3D elements"],
      popular: false
    },
    {
      id: 6,
      name: "Nail Extensions",
      price: 80,
      duration: "90 min",
      description: "Professional nail extensions for length and strength.",
      features: ["Extension application", "Shaping", "Filing", "Polish application"],
      popular: false
    },
    {
      id: 7,
      name: "French Manicure",
      price: 40,
      duration: "50 min",
      description: "Classic French manicure with white tips and nude base.",
      features: ["Nude base coat", "White tip application", "Top coat", "Hand massage"],
      popular: false
    },
    {
      id: 8,
      name: "Nail Repair",
      price: 20,
      duration: "20 min",
      description: "Quick repair for broken or damaged nails.",
      features: ["Nail assessment", "Repair application", "Shaping", "Buffing"],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Professional nail care services designed to make you look and feel beautiful. 
            Choose from our range of treatments tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 ${
                  service.popular ? 'ring-2 ring-pink-300' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.name}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    ${service.price}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${
                      service.popular 
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600' 
                        : 'bg-pink-100 text-pink-700 hover:bg-pink-200 hover:text-pink-800'
                    }`}
                  >
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We pride ourselves on delivering exceptional nail care with attention to detail and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Products</h3>
              <p className="text-gray-600">
                We use only the highest quality, professional-grade products from trusted brands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Technicians</h3>
              <p className="text-gray-600">
                Our licensed professionals have years of experience and stay updated with the latest techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee on all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Schedule your appointment today and experience the difference professional nail care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl transition-all duration-200 text-lg px-8 py-6"
            >
              <Link href="/booking">Book Appointment</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-pink-300 hover:bg-white hover:text-pink-600 text-lg px-8 py-6 font-semibold shadow-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
