import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Restore Health',
      subtitle: 'Experience the ancient wisdom of Ayurveda',
      color: 'from-green-600 to-emerald-700',
      icon: '🌿'
    },
    {
      title: 'Renew Vitality',
      subtitle: 'Transform your life with personalized treatments',
      color: 'from-amber-600 to-orange-700',
      icon: '✨'
    },
    {
      title: 'Live in Harmony',
      subtitle: 'Balance body, mind, and spirit',
      color: 'from-teal-600 to-cyan-700',
      icon: '☮️'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-carousel relative h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl mb-16">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide absolute inset-0 transition-all duration-1000 ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`bg-gradient-to-br ${slide.color} w-full h-full flex items-center justify-center text-center p-8`}>
            <div className="space-y-4 text-white">
              <div className="text-6xl md:text-7xl animate-bounce" style={{ animationDuration: '2s' }}>
                {slide.icon}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`rounded-full transition-all ${
              index === activeSlide
                ? 'bg-white w-8 h-3'
                : 'bg-white bg-opacity-50 w-3 h-3 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white animate-bounce pb-4">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroCarousel;
