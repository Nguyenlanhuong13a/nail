'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, CheckCircle, Sparkles } from "lucide-react"
import { useState } from "react"
import ClientOnly from "@/components/ClientOnly"

export default function Booking() {
  const [formData, setFormData] = useState({
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { id: 'manicure', name: 'Classic Manicure', price: 35, duration: '45 min' },
    { id: 'gel-manicure', name: 'Gel Manicure', price: 50, duration: '60 min' },
    { id: 'pedicure', name: 'Classic Pedicure', price: 45, duration: '60 min' },
    { id: 'spa-pedicure', name: 'Spa Pedicure', price: 65, duration: '75 min' },
    { id: 'nail-art', name: 'Nail Art Design', price: 25, duration: '30 min' },
    { id: 'extensions', name: 'Nail Extensions', price: 80, duration: '90 min' },
    { id: 'french', name: 'French Manicure', price: 40, duration: '50 min' },
    { id: 'repair', name: 'Nail Repair', price: 20, duration: '20 min' }
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert('Failed to send booking. Please try again or call us directly.')
        console.error('Booking error:', result.message)
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
      alert('Failed to send booking. Please try again or call us directly.')
    }
  }

  const selectedService = services.find(s => s.id === formData.service)

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-pink-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for booking with Mynail! We&apos;ve received your booking via email. We&apos;ll call you at {formData.phone} to confirm your appointment.
            </p>
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Service:</strong> {selectedService?.name}</p>
              <p><strong>Date:</strong> 
                <ClientOnly fallback={formData.date}>
                  {formData.date ? new Date(formData.date).toLocaleDateString() : formData.date}
                </ClientOnly>
              </p>
              <p><strong>Time:</strong> {formData.time}</p>
            </div>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
            >
              Book Another Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Schedule your nail care appointment with our professional technicians. 
            Choose your preferred service, date, and time.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Calendar className="w-6 h-6 text-pink-500 mr-2" />
                    Appointment Details
                  </CardTitle>
                  <p className="text-gray-600">
                    Simply enter your phone number and select your preferred service, date, and time. We&apos;ll receive your booking instantly and call you to confirm!
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Phone Number */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <User className="w-5 h-5 text-pink-500 mr-2" />
                        Contact Information
                      </h3>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number (e.g., 555-123-4567)"
                          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 text-lg py-3"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          We&apos;ll call you to confirm your appointment
                        </p>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
                        Service Selection
                      </h3>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Choose a Service *
                        </label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="border-gray-300 focus:border-pink-500 focus:ring-pink-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.name} - ${service.price} ({service.duration})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Clock className="w-5 h-5 text-pink-500 mr-2" />
                        Date & Time
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <Input
                            id="date"
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => handleInputChange('date', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Time *
                          </label>
                          <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                            <SelectTrigger className="border-gray-300 focus:border-pink-500 focus:ring-pink-500">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Additional Notes
                      </h3>
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requests or Notes
                        </label>
                        <Textarea
                          id="notes"
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          placeholder="Any special requests or notes for your appointment..."
                          rows={3}
                          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-lg py-6"
                    >
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedService ? (
                    <>
                      <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">{selectedService.name}</h4>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Duration:</span>
                          <span>{selectedService.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Price:</span>
                          <span className="font-semibold text-pink-600">${selectedService.price}</span>
                        </div>
                      </div>
                      
                      {formData.date && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Appointment Details</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex justify-between">
                              <span>Date:</span>
                              <span>{new Date(formData.date).toLocaleDateString()}</span>
                            </div>
                            {formData.time && (
                              <div className="flex justify-between">
                                <span>Time:</span>
                                <span>{formData.time}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Select a service to see details</p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Important Notes</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• We&apos;ll call you to confirm</li>
                      <li>• Please arrive 5 minutes early</li>
                      <li>• Bring a valid ID</li>
                      <li>• Cancel 24 hours in advance</li>
                      <li>• Payment due at service</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
