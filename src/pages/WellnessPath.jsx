import { CheckCircle, ArrowRight } from 'lucide-react';
import './WellnessPath.css';

const WellnessPath = () => {
  const steps = [
    {
      number: 1,
      title: 'Consultation',
      description: 'Meet with Dr. Shreelakshmi for a personalized assessment',
      benefits: ['Constitution analysis', 'Health history review', 'Custom plan']
    },
    {
      number: 2,
      title: 'Assessment',
      description: 'Detailed evaluation of your dosha and imbalances',
      benefits: ['Pulse examination', 'Lifestyle analysis', 'Treatment plan']
    },
    {
      number: 3,
      title: 'Preparation',
      description: 'Pre-treatment therapies to prepare your body',
      benefits: ['Herbal therapy', 'Dietary guidance', 'Lifestyle changes']
    },
    {
      number: 4,
      title: 'Treatment',
      description: 'Personalized therapies tailored to your needs',
      benefits: ['Panchakarma', 'Massage therapy', 'Herbal remedies']
    },
    {
      number: 5,
      title: 'Recovery',
      description: 'Post-treatment rejuvenation and integration',
      benefits: ['Rasayana therapy', 'Nutrition plan', 'Follow-up care']
    },
    {
      number: 6,
      title: 'Wellness',
      description: 'Long-term health maintenance and prevention',
      benefits: ['Routine guidance', 'Seasonal care', 'Preventive measures']
    }
  ];

  return (
    <section id="wellness-path" className="py-20 bg-gradient-to-br from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Your Wellness Journey</h2>
          <p className="text-xl text-gray-700">Six steps to lasting health and vitality</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto mt-4"></div>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-amber-400 to-green-300 transform -translate-y-1/2"></div>

            {/* Steps */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="wellness-step group">
                  <div className="mb-8">
                    {/* Circle with number */}
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-700 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-xl shadow-lg p-6 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-green-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{step.description}</p>

                    <div className="space-y-2">
                      {step.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="wellness-step-mobile">
              <div className="flex gap-6">
                {/* Left side - circles and line */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-amber-400 mt-2"></div>
                  )}
                </div>

                {/* Right side - card */}
                <div className="bg-white rounded-xl shadow-lg p-6 flex-1 mb-4">
                  <h3 className="text-lg font-bold text-green-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 mb-3 text-sm">{step.description}</p>
                  <div className="space-y-2">
                    {step.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">Ready to start your wellness journey?</p>
          <a href="/contact#contact" className="btn btn-lg btn-primary">
            Schedule Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WellnessPath;
