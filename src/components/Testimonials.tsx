import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Bloomfield, NJ',
      service: 'Emergency Plumbing Repair',
      rating: 5,
      text: 'Matt saved the day when our basement started flooding at 2 AM. He was here within 30 minutes and had everything fixed by morning. Professional, honest, and reasonably priced. Highly recommend!',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      location: 'Montclair, NJ',
      service: 'Water Heater Installation',
      rating: 5,
      text: 'Excellent service from start to finish. Matt explained all my options, gave a fair quote, and completed the installation quickly. My new water heater works perfectly and the price was very competitive.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jennifer Chen',
      location: 'Glen Ridge, NJ',
      service: 'Boiler Maintenance',
      rating: 5,
      text: 'Matt has been servicing our boiler for 3 years now. He\'s always on time, thorough, and explains what he\'s doing. It\'s great to have a plumber you can trust. Our heating bills have actually gone down!',
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Belleville, NJ',
      service: 'Bathroom Renovation',
      rating: 5,
      text: 'Matt completely renovated our master bathroom and the results are amazing. The work was done cleanly, on time, and within budget. He even helped us pick out fixtures that fit our style and budget.',
      date: '6 weeks ago'
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      location: 'Nutley, NJ',
      service: 'Drain Cleaning',
      rating: 5,
      text: 'Had a persistent clog that other companies couldn\'t fix. Matt solved it in one visit and showed me how to prevent it from happening again. Fair pricing and great customer service!',
      date: '2 months ago'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-blue-900 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about 
            our plumbing and heating services.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div 
          className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote Icon */}
          <Quote className="h-12 w-12 text-blue-900 opacity-20 absolute top-6 left-6" />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="font-bold text-gray-900 text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-600 mb-2">
                {testimonials[currentIndex].location}
              </div>
              <div className="inline-flex items-center space-x-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].service}
                </span>
                <span className="text-gray-500 text-sm">
                  • {testimonials[currentIndex].date}
                </span>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-900' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
            <div className="text-gray-600">Satisfied Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;