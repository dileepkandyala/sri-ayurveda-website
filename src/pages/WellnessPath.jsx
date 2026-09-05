import { ArrowRight, Stethoscope, ClipboardList, FlaskConical, HeartPulse, Sunrise, Flag } from 'lucide-react';
import './WellnessPath.css';

const WellnessPath = () => {
  const steps = [
    {
      icon: Stethoscope,
      title: 'Consultation',
      description: 'Meet with Dr. Shreelakshmi for a personalized assessment',
      benefits: ['Constitution analysis', 'Health history review', 'Custom plan']
    },
    {
      icon: ClipboardList,
      title: 'Assessment',
      description: 'Detailed evaluation of your dosha and imbalances',
      benefits: ['Pulse examination', 'Lifestyle analysis', 'Treatment plan']
    },
    {
      icon: FlaskConical,
      title: 'Preparation',
      description: 'Pre-treatment therapies to prepare your body',
      benefits: ['Herbal therapy', 'Dietary guidance', 'Lifestyle changes']
    },
    {
      icon: HeartPulse,
      title: 'Treatment',
      description: 'Personalized therapies tailored to your needs',
      benefits: ['Panchakarma', 'Massage therapy', 'Herbal remedies']
    },
    {
      icon: Sunrise,
      title: 'Recovery',
      description: 'Post-treatment rejuvenation and integration',
      benefits: ['Rasayana therapy', 'Nutrition plan', 'Follow-up care']
    },
    {
      icon: Flag,
      title: 'Wellness',
      description: 'Long-term health maintenance and prevention',
      benefits: ['Routine guidance', 'Seasonal care', 'Preventive measures']
    }
  ];

  return (
    <section id="wellness-path" className="wellness-path py-16 bg-gradient-to-br from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Your Wellness Journey</h2>
          <p className="text-xl text-gray-700">Six steps to lasting health and vitality</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto mt-4"></div>
        </div>

        {/* Timeline Desktop */}
        <div className="wellness-timeline-desktop">
          <div className="relative">
            {/* Milestones */}
            <div className="grid grid-cols-2 gap-8 relative z-10 wellness-steps-grid">
              {steps.map((step, index) => {
                const MarkerIcon = step.icon;
                return (
                  <div key={index} className="wellness-step group">
                    <div className="mb-12">
                      <div className="wellness-marker">
                        <MarkerIcon aria-hidden="true" />
                      </div>
                    </div>

                    {index < 5 && (
                      <svg
                        className={`wellness-card-connector ${index % 2 === 1 ? 'wellness-card-connector--s' : 'wellness-card-connector--straight'}`}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <marker
                            id={`wellness-arrow-${index}`}
                            markerWidth="5"
                            markerHeight="5"
                            refX="4"
                            refY="2.5"
                            orient="auto"
                            markerUnits="userSpaceOnUse"
                          >
                            <path d="M0,0 L5,2.5 L0,5 Z" fill="#b7791f" />
                          </marker>
                        </defs>
                        <path
                          d={index % 2 === 1 ? 'M75,0 C98,20 98,80 25,100' : 'M0,50 C25,20 75,80 100,50'}
                          fill="none"
                          stroke="#2f8b57"
                          strokeWidth="1.5"
                          strokeDasharray="3 5"
                          strokeLinecap="round"
                          markerEnd={`url(#wellness-arrow-${index})`}
                        />
                      </svg>
                    )}

                    {/* Card */}
                    <div className="wellness-card bg-white rounded-xl shadow-lg p-6 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                      <h3 className="text-xl font-bold text-green-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">{step.description}</p>

                      <div className="space-y-2">
                        {step.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm">
                            <span className="wellness-bullet" aria-hidden="true"></span>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="wellness-timeline-mobile space-y-8">
          {steps.map((step, index) => {
            const MarkerIcon = step.icon;
            return (
              <div key={index} className="wellness-step-mobile">
                <div className="flex gap-10">
                  {/* Left side - milestone icon */}
                  <div className="flex flex-col items-center">
                    <div className="wellness-marker wellness-marker-mobile">
                      <MarkerIcon aria-hidden="true" />
                    </div>
                  </div>

                  {/* Right side - card */}
                  <div className="wellness-card bg-white rounded-2xl shadow-lg p-6 flex-1 mb-8">
                    <h3 className="text-lg font-bold text-green-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 mb-3 text-sm">{step.description}</p>
                    <div className="space-y-2">
                      {step.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs">
                          <span className="wellness-bullet" aria-hidden="true"></span>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
