import React from 'react';
import { 
  Wrench, 
  Zap, 
  Droplets, 
  Thermometer, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  Phone
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: AlertTriangle,
      title: 'Emergency Repairs',
      description: 'Available 24/7 for urgent plumbing and heating emergencies that can\'t wait.',
      features: ['Burst pipes', 'No hot water', 'Flooding', 'Gas leaks'],
      color: 'red'
    },
    {
      icon: Wrench,
      title: 'Residential Plumbing',
      description: 'Complete plumbing services for your home, from minor repairs to major installations.',
      features: ['Leak repairs', 'Pipe replacement', 'Fixture installation', 'Bathroom renovations'],
      color: 'blue'
    },
    {
      icon: Droplets,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning services to keep your plumbing flowing smoothly.',
      features: ['Clogged drains', 'Sewer line cleaning', 'Root removal', 'Preventive maintenance'],
      color: 'green'
    },
    {
      icon: Thermometer,
      title: 'Water Heater Service',
      description: 'Expert water heater repair, replacement, and maintenance for consistent hot water.',
      features: ['Tank replacement', 'Tankless systems', 'Repair service', 'Energy efficiency'],
      color: 'orange'
    },
    {
      icon: Settings,
      title: 'Boiler Installation',
      description: 'Professional boiler installation and service to keep your home warm and comfortable.',
      features: ['New installations', 'System upgrades', 'Repair service', 'Annual maintenance'],
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'HVAC Services',
      description: 'Complete heating and cooling services for year-round comfort in your home.',
      features: ['System installation', 'Repair service', 'Maintenance plans', 'Energy audits'],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      red: 'bg-red-100 text-red-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      purple: 'bg-purple-100 text-purple-600',
      teal: 'bg-teal-100 text-teal-600'
    };
    return colors[color] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Plumbing & Heating Services
          </h2>
          <div className="w-20 h-1 bg-blue-900 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From emergency repairs to planned installations, we handle all your plumbing and heating needs 
            with professional expertise and reliable service you can trust.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group"
              >
                <div className={`w-16 h-16 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Service Areas */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h3>
            <p className="text-gray-600">
              Proudly serving Bloomfield and surrounding communities in Essex County, NJ
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Bloomfield', 'Montclair', 'Glen Ridge', 'Belleville', 
              'Nutley', 'Clifton', 'Newark', 'East Orange',
              'Orange', 'West Orange', 'Verona', 'Cedar Grove'
            ].map((city, index) => (
              <div key={index} className="text-gray-700 font-medium">
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white text-center">
          <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Plumbing emergencies don't wait for business hours. Our emergency service is available 24/7 
            to handle urgent repairs when you need them most.
          </p>
          <a 
            href="tel:9733319236" 
            className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>Call Emergency Line: (973) 331-9236</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;