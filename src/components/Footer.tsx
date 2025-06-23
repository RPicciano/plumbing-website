import React from 'react';
import { Phone, Mail, MapPin, Clock, Wrench, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Matt Barron</h3>
                <p className="text-gray-300">Plumbing & Heating</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Serving Bloomfield and surrounding communities with reliable, professional 
              plumbing and heating services for over 15 years. Licensed, insured, and 
              committed to your satisfaction.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-1 bg-green-900 px-3 py-1 rounded-full text-sm">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-1 bg-blue-900 px-3 py-1 rounded-full text-sm">
                <Clock className="h-4 w-4" />
                <span>24/7 Emergency</span>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-900 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-5 w-5 text-red-300" />
                <span className="font-semibold text-red-100">Emergency Service</span>
              </div>
              <a 
                href="tel:9733319236" 
                className="text-2xl font-bold text-white hover:text-red-200 transition-colors"
              >
                (973) 331-9236
              </a>
              <p className="text-red-200 text-sm mt-1">Available 24 hours a day, 7 days a week</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Service Address</p>
                  <p className="text-gray-300 text-sm">56 Ridge Ave</p>
                  <p className="text-gray-300 text-sm">Bloomfield, NJ 07003</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:9733319236" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    (973) 331-9236
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:info@mattbarronplumbing.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@mattbarronplumbing.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Emergency Plumbing Repairs</li>
              <li>Water Heater Installation</li>
              <li>Boiler Service & Repair</li>
              <li>Drain Cleaning</li>
              <li>HVAC Services</li>
              <li>Bathroom Renovations</li>
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-6">Business Hours</h4>
            <div className="space-y-1 text-gray-300 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7 AM - 8 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8 AM - 6 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Emergency Only</span>
              </div>
              <div className="text-yellow-400 font-medium mt-2">
                24/7 Emergency Service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Matt Barron Plumbing and Heating. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>NJ License #12345</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;