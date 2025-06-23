import React from 'react';
import { Phone, Star, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">5-Star Local Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reliable Plumbing & Heating Services in 
              <span className="text-yellow-400"> Bloomfield, NJ</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Your trusted neighborhood expert for emergency repairs, installations, and maintenance. 
              Licensed, insured, and available 24/7.
            </p>

            {/* Emergency Badge */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-8">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold text-yellow-400">24/7 Emergency Service Available</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="tel:9733319236" 
                className="inline-flex items-center justify-center space-x-2 bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: (973) 331-9236</span>
              </a>
              
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Get Free Estimate
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-blue-100">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Upfront Pricing</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional plumber working on pipes in Bloomfield, NJ"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Professional Service</h3>
                <p className="text-blue-100 mb-4">Serving Bloomfield and surrounding areas for over 15 years</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">500+</div>
                    <div className="text-sm text-blue-100">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">15+</div>
                    <div className="text-sm text-blue-100">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;