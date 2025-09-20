import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-50 to-rose-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Mynail
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Professional nail care services with a touch of elegance. 
              Your beauty is our passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Manicure</li>
              <li className="text-gray-600 text-sm">Pedicure</li>
              <li className="text-gray-600 text-sm">Nail Art</li>
              <li className="text-gray-600 text-sm">Gel Polish</li>
              <li className="text-gray-600 text-sm">Nail Extensions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-pink-500" />
                <span className="text-gray-600 text-sm">
                  123 Beauty Street<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-pink-500" />
                <span className="text-gray-600 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-pink-500" />
                <span className="text-gray-600 text-sm">info@mynail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-pink-500" />
                <span className="text-gray-600 text-sm">
                  Mon-Sat: 9AM-7PM<br />
                  Sun: 10AM-5PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 Mynail. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-pink-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-600 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
