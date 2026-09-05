import { useEffect, useState } from 'react';
import { Sparkles, Droplets, Wind, Leaf, Heart, Brain, X } from 'lucide-react';
import panchakarmaImg from '../images/IMG_1860.jpg';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      name: 'Panchakarma',
      description: 'Ancient detoxification therapy to eliminate deep-rooted toxins and restore dosha balance',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-600',
      benefits: ['Deep Detox', 'Rejuvenation', 'Immune Boost'],
      details: 'A guided program combining preparatory therapies, cleansing procedures, and rejuvenation care based on your constitution and health goals.',
      image: panchakarmaImg
    },
    {
      name: 'Yoga & Wellness',
      description: 'Integrated yoga sessions teaching holistic lifestyle habits inspired by ancient wisdom',
      icon: Wind,
      color: 'from-amber-500 to-orange-600',
      benefits: ['Flexibility', 'Mental Clarity', 'Inner Peace'],
      details: 'Personalized yoga practices help improve mobility, breathing, focus, and daily energy at a pace suited to your experience level.',
    },
    {
      name: 'Herbal Treatments',
      description: 'Personalized herbal remedies and therapies designed for your unique constitution',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      benefits: ['Natural Healing', 'Personalized', 'Holistic'],
      details: 'Receive practitioner-guided herbal support selected around your constitution, lifestyle, and individual wellness needs.',
    },
    {
      name: 'Meditation & Mindfulness',
      description: 'Guided practices to calm the mind, reduce stress, and enhance spiritual well-being',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      benefits: ['Stress Relief', 'Mental Health', 'Spiritual Growth'],
      details: 'Learn calming breathwork and meditation techniques that can support steadier attention, restful sleep, and emotional balance.',
    },
    {
      name: 'Lifestyle Counseling',
      description: 'Personalized guidance on diet, daily routines, and lifestyle modifications',
      icon: Heart,
      color: 'from-red-500 to-rose-600',
      benefits: ['Diet Plans', 'Routine Design', 'Long-term Health'],
      details: 'Build practical routines for food, sleep, movement, and self-care that fit your constitution and can be sustained at home.',
    },
    {
      name: 'Specialized Therapies',
      description: 'Targeted treatments including Abhyanga, Shirodhara, and other traditional methods',
      icon: Sparkles,
      color: 'from-indigo-500 to-purple-600',
      benefits: ['Pain Relief', 'Deep Relaxation', 'Renewal'],
      details: 'Explore traditional therapies such as Abhyanga and Shirodhara, selected after a consultation to support relaxation and recovery.',
    }
  ];

  useEffect(() => {
    if (!activeService) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveService(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeService]);

  return (
    <section id="services" className="py-14 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-700 mb-8">Comprehensive Ayurvedic wellness solutions tailored to your needs</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-8 services-tile-grid">
          {services.map((service, index) => {
            return (
              <button
                key={index}
                type="button"
                className="service-tile group text-left"
                onClick={() => setActiveService(service)}
                aria-haspopup="dialog"
              >
                <h3 className="service-tile-title">{service.name}</h3>
                <p className="service-tile-description">{service.description}</p>

                <div className="service-tile-benefits">
                  {service.benefits.map((benefit, idx) => (
                    <span key={idx} className="service-tile-chip">
                      {benefit}
                    </span>
                  ))}
                </div>

                <span className="service-tile-cta">View Details <span className="service-tile-cta-arrow">→</span></span>
              </button>
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
              href="/contact#contact"
              className="inline-block btn-primary bg-white text-green-700 hover:bg-green-50"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>

      {activeService && (
        <div
          className="service-modal-overlay"
          role="presentation"
          onClick={() => setActiveService(null)}
        >
          <div
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeService.name}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="service-modal-close"
              aria-label="Close"
              onClick={() => setActiveService(null)}
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {activeService.image && (
              <img src={activeService.image} alt={activeService.name} className="service-modal-image" />
            )}

            <div className="service-modal-body">
              <div className={`service-modal-icon bg-gradient-to-br ${activeService.color}`}>
                {(() => {
                  const Icon = activeService.icon;
                  return <Icon className="w-7 h-7" aria-hidden="true" />;
                })()}
              </div>
              <h3 className="service-modal-title">{activeService.name}</h3>
              <p className="service-modal-description">{activeService.description}</p>

              <div className="service-tile-benefits mb-5">
                {activeService.benefits.map((benefit, idx) => (
                  <span key={idx} className="service-tile-chip service-tile-chip--solid">
                    {benefit}
                  </span>
                ))}
              </div>

              <p className="service-modal-details">{activeService.details}</p>

              <a href="/contact#contact" className="btn btn-primary mt-6">
                Book This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

