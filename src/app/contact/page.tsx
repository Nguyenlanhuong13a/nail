'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submittedData, setSubmittedData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmittedData(formData) // Lưu data trước khi reset
        setIsSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-pink-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Message Sent!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us! We&apos;ve received your message and will get back to you as soon as possible.
            </p>
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p><strong>Name:</strong> {submittedData.firstName} {submittedData.lastName}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Phone:</strong> {submittedData.phone}</p>
              <p><strong>Subject:</strong> {submittedData.subject}</p>
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p><strong>Message:</strong></p>
                <p className="text-gray-700 mt-1 whitespace-pre-wrap">{submittedData.message}</p>
              </div>
            </div>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
            >
              Send Another Message
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
            Contact Us
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Get in touch with us for any questions, concerns, or to schedule your next appointment. 
            We&apos;re here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <MessageCircle className="w-6 h-6 text-pink-500 mr-2" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What&apos;s this about?"
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={4}
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Get in Touch
                  </CardTitle>
            <p className="text-gray-600">
              We&apos;d love to hear from you. Here&apos;s how you can reach us:
            </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Beauty Street<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+15551234567" className="hover:text-pink-600 transition-colors">
                          (555) 123-4567
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@mynail.com" className="hover:text-pink-600 transition-colors">
                          info@mynail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">Interactive Map</p>
                      <p className="text-sm text-gray-500">123 Beauty Street, New York, NY</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and policies.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do I need to make an appointment?",
                answer: "While walk-ins are welcome, we highly recommend making an appointment to ensure availability and reduce wait times."
              },
              {
                question: "How long do gel manicures last?",
                answer: "Gel manicures typically last 2-3 weeks with proper care. The longevity depends on your nail growth and daily activities."
              },
              {
                question: "What should I do to prepare for my appointment?",
                answer: "Please arrive with clean, dry nails. Remove any existing polish and avoid applying lotion to your hands before your appointment."
              },
              {
                question: "Do you offer group bookings?",
                answer: "Yes! We offer special packages for groups and special occasions. Please contact us in advance to discuss your needs."
              },
              {
                question: "What is your cancellation policy?",
                answer: "We require 24-hour notice for cancellations. Late cancellations may be subject to a fee."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Don&apos;t wait! Schedule your nail care appointment today and experience the difference.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl transition-all duration-200 text-lg px-8 py-6"
          >
            <a href="/booking">Book Now</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
