import { useEffect, useState } from 'react';
import { Zap, Clock, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import img1 from '../images/IMG_1858.jpg';
import img2 from '../images/IMG_1859.jpg';
import img3 from '../images/IMG_1861.jpg';
import './FeaturedTreatments.css';

const FeaturedTreatments = () => {
  const navigate = useNavigate();
  const [activeTreatment, setActiveTreatment] = useState(null);
  const treatments = [
    {
      name: 'Panchakarma Detox Program',
      description: 'An individualized Panchakarma program considered after an Ayurvedic assessment.',
      duration: 'As assessed',
      approach: 'Personalized',
      image: img1,
      details: 'Panchakarma procedures are selected after assessing factors such as Prakriti, Vikriti, Agni, strength, age, season, and health condition. A suitable plan may include preparation, a selected procedure, and individualized aftercare. The clinic will discuss suitability and availability with you.',
      benefits: [
        'Practitioner-led assessment',
        'Individualized procedure selection',
        'Preparation and aftercare guidance',
        'Qualified supervision'
      ],
      featured: true
    },
    {
      name: 'Abhyanga Therapy',
      description: 'Traditional Ayurvedic oil massage, selected according to individual needs.',
      duration: '60 mins',
      approach: 'Assessment guided',
      image: img2,
      details: 'Abhyanga is a traditional Ayurvedic oil massage. The oil and approach can be discussed with the practitioner and selected according to your needs and suitability. Contact the clinic to ask about available sessions.',
      benefits: [
        'Traditional oil massage',
        'Practitioner-guided approach',
        'Oil selected for the session',
        'Availability confirmed by clinic'
      ]
    },
    {
      name: 'Shirodhara Treatment',
      description: 'A traditional therapy involving a steady stream of warm liquid, offered after assessment.',
      duration: '45 mins',
      approach: 'Assessment guided',
      image: img3,
      details: 'Shirodhara is a traditional Ayurvedic therapy in which a steady stream of warm liquid is poured over the forehead. The clinic can discuss suitability, the session approach, and availability after understanding your needs.',
      benefits: [
        'Traditional Ayurvedic procedure',
        'Session guided by a practitioner',
        'Individual suitability assessment',
        'Availability confirmed by clinic'
      ]
    }
  ];

  const startTreatmentBooking = (treatment) => {
    navigate('/contact', { state: { inquiry: { type: 'treatment', treatment: treatment.name } } });
  };

  useEffect(() => {
    if (!activeTreatment) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveTreatment(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeTreatment]);

  return (
    <section id="featured-treatments" className="py-14 bg-gradient-to-br from-white via-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
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

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <p className="text-sm text-green-200">Program</p>
                  </div>
                  <p className="text-xl font-bold">{treatments[0].duration}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <p className="text-sm text-green-200">Care</p>
                  </div>
                  <p className="text-xl font-bold">{treatments[0].approach}</p>
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

              <button type="button" className="btn btn-amber btn-lg" onClick={() => startTreatmentBooking(treatments[0])}>
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

                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-gray-200">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Typical duration</p>
                    <p className="font-bold text-green-700">{treatment.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Approach</p>
                    <p className="font-bold text-green-700">{treatment.approach}</p>
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

                <div className="flex flex-wrap items-center gap-3">
                  <button type="button" className="btn btn-sm btn-primary" onClick={() => setActiveTreatment(treatment)}>
                    Learn More
                  </button>
                  <button type="button" className="btn btn-sm btn-primary" onClick={() => startTreatmentBooking(treatment)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeTreatment && (
        <div className="service-modal-overlay" role="presentation" onClick={() => setActiveTreatment(null)}>
          <div
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="featured-treatment-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="service-modal-close" aria-label="Close" onClick={() => setActiveTreatment(null)}>
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
            <img src={activeTreatment.image} alt="" className="service-modal-image" />
            <div className="service-modal-body">
              <h3 id="featured-treatment-title" className="service-modal-title">{activeTreatment.name}</h3>
              <p className="service-modal-description">{activeTreatment.details}</p>
              <p className="text-sm text-gray-600">Treatment suitability and scheduling are confirmed by the clinic after discussion.</p>
              <button type="button" onClick={() => startTreatmentBooking(activeTreatment)} className="btn btn-primary mt-6">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedTreatments;
