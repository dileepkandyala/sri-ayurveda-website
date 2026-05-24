import { Sparkles, Droplets, Wind, Leaf, Heart, Brain } from 'lucide-react';
import panchakarmaImg from '../images/IMG_1860.jpg';
import './Services.css';

const Services = () => {
  const services = [
    {
      name: 'Panchakarma',
      description: 'Ancient detoxification therapy to eliminate deep-rooted toxins and restore dosha balance',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-600',
      benefits: ['Deep Detox', 'Rejuvenation', 'Immune Boost'],
      image: panchakarmaImg
    },
    {
      name: 'Yoga & Wellness',
      description: 'Integrated yoga sessions teaching holistic lifestyle habits inspired by ancient wisdom',
      icon: Wind,
      color: 'from-amber-500 to-orange-600',
      benefits: ['Flexibility', 'Mental Clarity', 'Inner Peace'],
    },
    {
      name: 'Herbal Treatments',
      description: 'Personalized herbal remedies and therapies designed for your unique constitution',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      benefits: ['Natural Healing', 'Personalized', 'Holistic'],
    },
    {
      name: 'Meditation & Mindfulness',
      description: 'Guided practices to calm the mind, reduce stress, and enhance spiritual well-being',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      benefits: ['Stress Relief', 'Mental Health', 'Spiritual Growth'],
    },
    {
      name: 'Lifestyle Counseling',
      description: 'Personalized guidance on diet, daily routines, and lifestyle modifications',
      icon: Heart,
      color: 'from-red-500 to-rose-600',
      benefits: ['Diet Plans', 'Routine Design', 'Long-term Health'],
    },
    {
      name: 'Specialized Therapies',
      description: 'Targeted treatments including Abhyanga, Shirodhara, and other traditional methods',
      icon: Sparkles,
      color: 'from-indigo-500 to-purple-600',
      benefits: ['Pain Relief', 'Deep Relaxation', 'Renewal'],
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-green-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-700 mb-8">Comprehensive Ayurvedic wellness solutions tailored to your needs</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group"
              >
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 text-white relative overflow-hidden`}>
                  {/* Background decoration */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-white opacity-10 rounded-full group-hover:opacity-20 transition"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-3">
                      <Icon className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                    </div>

                    <p className="text-white text-opacity-90 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {service.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold bg-white bg-opacity-20 px-3 py-2 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <button className="btn btn-sm btn-ghost">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-12 md:p-16 text-white shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Health?</h3>
            <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with Dr. Shreelakshmi to discover which services are perfect for your unique constitution and health goals.
            </p>
            <a
              href="#contact"
              className="inline-block btn-primary bg-white text-green-700 hover:bg-green-50"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
