import { Zap, Clock, Users, BarChart3 } from 'lucide-react';
import img1 from '../images/IMG_1858.jpg';
import img2 from '../images/IMG_1859.jpg';
import img3 from '../images/IMG_1861.jpg';
import './FeaturedTreatments.css';

const FeaturedTreatments = () => {
  const treatments = [
    {
      name: 'Panchakarma Detox Program',
      description: 'Complete body detoxification and rejuvenation',
      duration: '7-21 days',
      participants: '50+ completed',
      effectiveness: '95%',
      image: img1,
      benefits: [
        'Eliminates deep toxins',
        'Restores digestion',
        'Enhances immunity',
        'Mental clarity'
      ],
      featured: true
    },
    {
      name: 'Abhyanga Therapy',
      description: 'Therapeutic full-body oil massage',
      duration: '60 mins',
      participants: '200+ clients',
      effectiveness: '98%',
      image: img2,
      benefits: [
        'Deep relaxation',
        'Improved circulation',
        'Skin nourishment',
        'Pain relief'
      ]
    },
    {
      name: 'Shirodhara Treatment',
      description: 'Warm oil therapy for mind-body harmony',
      duration: '45 mins',
      participants: '150+ clients',
      effectiveness: '96%',
      image: img3,
      benefits: [
        'Mental clarity',
        'Stress relief',
        'Sleep improvement',
        'Nervous system balance'
      ]
    }
  ];

  return (
    <section id="featured-treatments" className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Featured Treatments</h2>
          <p className="text-xl text-gray-700">Our most popular and effective therapies</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto mt-4"></div>
        </div>

        {/* Featured Treatment - Highlight */}
        <div className="mb-16 featured-card overflow-hidden rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="featured-image-container h-96 md:h-full overflow-hidden">
              <img
                src={treatments[0].image}
                alt={treatments[0].name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="bg-gradient-to-br from-green-700 to-emerald-800 text-white p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold w-fit mb-6">
                FEATURED PROGRAM
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{treatments[0].name}</h3>
              <p className="text-lg text-green-100 mb-8">{treatments[0].description}</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <p className="text-sm text-green-200">Duration</p>
                  </div>
                  <p className="text-xl font-bold">{treatments[0].duration}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-amber-400" />
                    <p className="text-sm text-green-200">Clients</p>
                  </div>
                  <p className="text-xl font-bold">{treatments[0].participants}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-amber-400" />
                    <p className="text-sm text-green-200">Success</p>
                  </div>
                  <p className="text-xl font-bold">{treatments[0].effectiveness}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">Key Benefits</h4>
                <div className="space-y-3">
                  {treatments[0].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-green-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn btn-amber btn-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Other Featured Treatments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.slice(1).map((treatment, index) => (
            <div
              key={index}
              className="treatment-card group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
              </div>

              <div className="bg-white p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-3">{treatment.name}</h3>
                <p className="text-gray-700 mb-6">{treatment.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-200">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <p className="font-bold text-green-700">{treatment.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                    <p className="font-bold text-green-700">{treatment.effectiveness}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Clients</p>
                    <p className="font-bold text-green-700 text-sm">{treatment.participants}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {treatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className="btn btn-sm btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
