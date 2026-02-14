import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Professional',
      text: 'Dr. Shreelakshmi\'s holistic approach changed my life. I came in with chronic back pain and anxiety, and within 3 months of Panchakarma treatment and lifestyle changes, I feel like a new person. Highly recommend!',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Priya Sharma',
      role: 'Yoga Instructor',
      text: 'As a yoga instructor, I was skeptical at first, but the integration of yoga with Ayurvedic treatments at Sri Ayurveda is outstanding. The personalized approach is what makes them truly special.',
      rating: 5,
      image: '🧘‍♀️'
    },
    {
      name: 'Amrita Desai',
      role: 'Homemaker',
      text: 'I suffered from digestive issues for years. After completing the Panchakarma program, my digestion has improved significantly. The staff is warm and caring. Thank you, Dr. Shreelakshmi!',
      rating: 5,
      image: '👩‍🌾'
    },
    {
      name: 'Vikram Singh',
      role: 'Business Owner',
      text: 'The personalized wellness program helped me manage my stress and improve my energy levels. It\'s not just treatment; it\'s a complete lifestyle transformation.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Neha Patel',
      role: 'Health Consultant',
      text: 'As a health professional, I appreciate the scientific approach combined with ancient wisdom. Sri Ayurveda is authentic, professional, and truly dedicated to patient wellness.',
      rating: 5,
      image: '👩‍⚕️'
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-amber-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-xl text-green-100">Real stories of transformation and healing</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white border-opacity-20 hover:border-opacity-40 transition">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg mb-8 leading-relaxed text-green-50 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                      <p className="text-amber-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrevious}
            className="testimonial-nav testimonial-prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="testimonial-nav testimonial-next"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoPlay(false);
                }}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-amber-400 w-8'
                    : 'bg-white bg-opacity-40 w-3 hover:bg-opacity-60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mouse over to pause info */}
        <div className="text-center mt-12 text-green-100 text-sm">
          {autoPlay ? '✓ Auto-playing' : '⏸ Paused'}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
