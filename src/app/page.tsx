import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Sparkles, Heart, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fce7f3' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Beautiful Nails,
                  <span className="block bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                    Beautiful You
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience luxury nail care with our professional services. 
                  From classic manicures to stunning nail art, we bring your vision to life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-lg px-8 py-6"
                >
                  <Link href="/booking">Book Appointment</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-pink-400 text-pink-700 hover:bg-pink-50 hover:border-pink-500 text-lg px-8 py-6"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-pink-500" />
                  <span>500+ Happy Clients</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mx-auto flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Premium Nail Care</h3>
                    <p className="text-gray-600">Professional services with attention to detail</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mynail?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine professional expertise with a relaxing atmosphere to give you the perfect nail care experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
                <p className="text-gray-600">
                  We use only the finest products and techniques to ensure your nails look and feel amazing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Book appointments that fit your schedule with our convenient online booking system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe & Clean</h3>
                <p className="text-gray-600">
                  Your health and safety are our top priority. We maintain the highest hygiene standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From classic manicures to stunning nail art, we offer a full range of professional nail services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Manicure", price: "From $35", description: "Classic nail care and polish" },
              { name: "Pedicure", price: "From $45", description: "Complete foot care treatment" },
              { name: "Nail Art", price: "From $25", description: "Creative designs and patterns" },
              { name: "Gel Polish", price: "From $40", description: "Long-lasting color and shine" }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{service.name[0]}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-pink-600 font-semibold mb-2">{service.price}</p>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Pamper Yourself?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Book your appointment today and experience the difference professional nail care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl transition-all duration-200 text-lg px-8 py-6"
            >
              <Link href="/booking">Book Now</Link>
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