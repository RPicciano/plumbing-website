import React from 'react';
import { Award, Shield, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Matt Barron
              </h2>
              <div className="w-20 h-1 bg-blue-900 rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With over 15 years of experience serving the Bloomfield community, Matt Barron has built 
                a reputation for honest, reliable, and high-quality plumbing and heating services. What 
                started as a one-man operation has grown into the area's most trusted local service company.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Matt believes in treating every customer like family, providing upfront pricing, and 
                never cutting corners on quality. Whether it's a midnight emergency or a planned installation, 
                you can count on professional service that gets the job done right the first time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "I'm not just fixing pipes - I'm helping families stay comfortable in their homes. 
                That's what drives me every day." - Matt Barron
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-900">A+</div>
                <div className="text-sm text-gray-600">BBB Rating</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-900">100%</div>
                <div className="text-sm text-gray-600">Licensed</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-blue-900 rounded-2xl p-8 transform rotate-3">
              <div className="bg-white rounded-xl transform -rotate-3">
                <img 
                  src="https://images.pexels.com/photos/4246208/pexels-photo-4246208.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Matt Barron, professional plumber in Bloomfield, NJ"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-blue-900 p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-1" />
                <div className="font-bold text-sm">Licensed &</div>
                <div className="font-bold text-sm">Insured</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Matt Barron Plumbing?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another plumbing company. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Fast Response Times</h4>
              <p className="text-gray-600">
                We understand that plumbing problems can't wait. That's why we offer same-day service 
                and 24/7 emergency repairs to get your life back to normal quickly.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Affordable Rates</h4>
              <p className="text-gray-600">
                Quality service doesn't have to break the bank. We offer competitive pricing with 
                upfront estimates, so you'll never be surprised by hidden fees.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h4>
              <p className="text-gray-600">
                Your peace of mind is our priority. We're fully licensed and insured, giving you 
                confidence that every job is done safely and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;