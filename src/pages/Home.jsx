import React, { useEffect, useState } from 'react';
import ayurvedicImg from '../images/ayurvedic.jpg';
import sreeLakshmiImg from '../images/SreeLakshmi.jpg';
import Testimonials from './Testimonials';
import DoshaQuiz from './DoshaQuiz';
import Stats from './Stats';
import Services from './Services';
import HeroCarousel from './HeroCarousel';
import WellnessPath from './WellnessPath';
import Newsletter from './Newsletter';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    // Make hero section immediately visible
    const heroSection = document.getElementById('home-hero');
    if (heroSection) {
      heroSection.classList.add('visible');
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="container">
      {/* Hero Section */}
      <section id="home-hero" className="scroll-reveal home-intro py-16" style={{ marginBottom: '3rem' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-deep-green mb-4">
            Authentic Ayurvedic Healing in Ramanagara
          </h1>
          <p className="text-xl md:text-2xl text-muted-olive font-semibold mb-6">
            Restore health, renew vitality, live in harmony with Dr. Shreelakshmi's Panchakarma Center
          </p>
          <div className="flex gap-4 mb-8 flex-wrap">
            <a href="#section-contact" className="inline-block bg-deep-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition">
              Book Consultation
            </a>
            <a href="/treatments" className="inline-block border-2 border-deep-green text-deep-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Explore Treatments
            </a>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-amber rounded-full"></div>
        </div>
      </section>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Welcome Section with Image */}
      <section id="section-welcome" className="scroll-reveal home-section py-16 grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-4xl font-bold text-deep-green mb-6">YOUR HEALTH IS OUR PRIORITY</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Welcome to Sri Ayurveda, where ancient Ayurvedic wisdom meets modern care. 
            At Sri Ayurveda, we believe true health comes from balance—of body, mind, 
            and spirit. Rooted in the ancient science of Ayurveda, our clinic is 
            dedicated to helping individuals heal naturally and live with vitality.
          </p>
        </div>
        <div className="ayurveda-image">
          <img 
            src={ayurvedicImg}
            alt="Ayurvedic treatment"
            style={{ minHeight: '300px', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* About Dr. Shreelakshmi */}
        <section id="section-doctor" className="scroll-reveal home-section py-16 grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="ayurveda-image order-2 md:order-1">
          <img 
            src={sreeLakshmiImg}
            alt="Dr. Shreelakshmi M.V. - BAMS Certified Ayurvedic Doctor at Sri Ayurveda Panchakarma Center"
            style={{ minHeight: '400px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold text-deep-green mb-6">Meet Dr. Shreelakshmi M.V.</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            <span className="font-semibold">BAMS certified Ayurvedic doctor</span> with expertise in Panchakarma therapies and holistic wellness. Dr. Shreelakshmi offers personalized consultations and evidence-based treatments tailored to your unique constitution (Prakriti).
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            As a <span className="font-semibold">certified Yoga professional</span>, she integrates ancient wisdom with modern understanding to address:
          </p>
          <ul className="text-lg text-gray-700 mb-6 space-y-2">
            <li>✓ Chronic conditions & pain management</li>
            <li>✓ Immunity strengthening & detoxification</li>
            <li>✓ Stress relief & mental wellness</li>
            <li>✓ Lifestyle optimization & preventive care</li>
          </ul>
          <a href="/about" className="inline-block text-deep-green font-semibold hover:text-emerald-600 transition">
            Read Full Biography →
          </a>
        </div>
      </section>

      {/* Our Approach */}
      <Services />

      {/* Wellness Journey Path */}
      <WellnessPath />

      {/* Why Choose Us */}
      <section id="section-why" className="scroll-reveal home-section py-16 bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8 md:p-12 mb-12">
        <h2 className="text-4xl font-bold text-deep-green mb-8 text-center">Why Choose Sri Ayurveda</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <h3 className="text-xl font-bold text-deep-green mb-2">Authentic Ayurvedic Care</h3>
              <p className="text-gray-700">Treatments grounded in 5,000 years of Ayurvedic wisdom and modern understanding.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <h3 className="text-xl font-bold text-deep-green mb-2">Personalized Programs</h3>
              <p className="text-gray-700">Each treatment plan is customized to your unique constitution and health needs.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <h3 className="text-xl font-bold text-deep-green mb-2">Holistic Wellness</h3>
              <p className="text-gray-700">We address root causes, not just symptoms, for lasting health and vitality.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <h3 className="text-xl font-bold text-deep-green mb-2">Safe & Professional</h3>
              <p className="text-gray-700">All therapies administered by qualified, certified Ayurvedic practitioners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="section-contact" className="scroll-reveal home-section py-16">
        <h2 className="text-4xl font-bold text-deep-green mb-8 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-deep-green mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold text-deep-green">WhatsApp:</span>
                <a href="https://wa.me/917619529616" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-amber ml-2">
                  +91 7619529616
                </a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-deep-green">Phone:</span>
                <a href="tel:8113452402" className="text-gold hover:text-amber ml-2">
                  8113452402
                </a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-deep-green">Email:</span>
                <a href="mailto:sriayurveda23@gmail.com" className="text-gold hover:text-amber ml-2">
                  sriayurveda23@gmail.com
                </a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-deep-green">Instagram:</span>
                <a href="https://www.instagram.com/sri_ayurveda_clinic" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-amber ml-2">
                  @sri_ayurveda_clinic
                </a>
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-deep-green mb-6">Location</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              #Hamsa complex, Magadi main road,
              <br />
              near Sharath Memorial School,
              <br />
              Ramanagara - 562159
            </p>
            <div className="ayurveda-image h-64 mt-6">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=60" 
                alt="Location map"
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Dosha Quiz Section */}
      <DoshaQuiz />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
};

export default Home;