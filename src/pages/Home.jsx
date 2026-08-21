import React, { useEffect } from 'react';
import ayurvedicImg from '../images/ayurvedic.jpg';
import sreeLakshmiImg from '../images/SreeLakshmi.jpg';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
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
      <Seo
        title={SEO_CONFIG.pages.home.title}
        description={SEO_CONFIG.pages.home.description}
        keywords={SEO_CONFIG.pages.home.keywords}
        canonical={`${SEO_CONFIG.siteUrl}/`}
        openGraph={{
          title: SEO_CONFIG.pages.home.title,
          description: SEO_CONFIG.pages.home.description,
          url: `${SEO_CONFIG.siteUrl}/`,
          image: SEO_CONFIG.siteImage,
        }}
      />
      {/* Hero Section */}
      <section id="home-hero" className="scroll-reveal home-intro py-16" style={{ marginBottom: '3rem' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-deep-green mb-4">
            Sri Ayurveda Clinic & Panchakarma Center
          </h1>
          <p className="text-xl md:text-2xl text-muted-olive font-semibold mb-6">
            Restore health, renew vitality, and live in harmony with personalized Ayurvedic care by Dr. Shreelakshmi M.V., BAMS.
          </p>
          <div className="flex gap-6 mb-8 flex-wrap">
            <a href="#section-contact" className="btn-primary">
              Book Consultation
            </a>
            <a href="/treatments" className="btn-ghost">
              Explore Treatments
            </a>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-gold to-amber rounded-full"></div>
        </div>
      </section>

      {/* Welcome Section with Image */}
      <section id="section-welcome" className="scroll-reveal home-section py-20 grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-4xl font-bold text-deep-green mb-8">YOUR HEALTH IS OUR PRIORITY</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to Sri Ayurveda Clinic & Panchakarma Center, where ancient Ayurvedic wisdom meets thoughtful modern care.
            We believe true health comes from balance—of body, mind, and spirit. Rooted in the science of Ayurveda, our clinic supports natural healing and lasting vitality through personalized Panchakarma therapies.
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
        <section id="section-doctor" className="scroll-reveal home-section py-20 grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="ayurveda-image order-2 md:order-1 mt-0 pt-0">


          <img 
            src={sreeLakshmiImg}
            alt="Dr. Shreelakshmi M.V. - BAMS Certified Ayurvedic Doctor at Sri Ayurveda Panchakarma Center"
            style={{ minHeight: '400px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold text-deep-green mb-8">Meet Dr. Shreelakshmi M.V.</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <span className="font-semibold">BAMS certified Ayurvedic doctor</span> with expertise in Panchakarma therapies and holistic wellness. Dr. Shreelakshmi offers personalized consultations and evidence-based treatments tailored to your unique constitution (Prakriti).
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            As a <span className="font-semibold">certified Yoga professional</span>, she integrates ancient wisdom with modern understanding to address:
          </p>
          <ul className="text-lg text-gray-700 mb-8 space-y-3">
            <li>✓ Chronic conditions & pain management</li>
            <li>✓ Immunity strengthening & detoxification</li>
            <li>✓ Stress relief & mental wellness</li>
            <li>✓ Lifestyle optimization & preventive care</li>
          </ul>
          <a href="/about" className="inline-block btn-primary">
            Read Full Biography →
          </a>
        </div>
      </section>

      {/* Our Approach */}
      <Services />

      {/* Dosha Quiz */}
      <DoshaQuiz />

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
      <section id="section-contact" className="scroll-reveal home-section py-20 mb-20">
        <h2 className="text-4xl font-bold text-deep-green mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-deep-green mb-8">Contact Information</h3>
            <div className="space-y-6">
              <p className="text-lg">
                <span className="font-semibold text-deep-green">WhatsApp:</span>
                <a href="https://wa.me/917619529616" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-amber ml-2 transition">
                  +91 7619529616
                </a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-deep-green">Phone:</span>
                <a href="tel:+919187398489" className="text-gold hover:text-amber ml-2 transition">
                  +919187398489
                </a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-deep-green">Email:</span>
                <a href="mailto:sriayurveda23@gmail.com" className="text-gold hover:text-amber ml-2 transition">
                  sriayurveda23@gmail.com
                </a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-deep-green">Instagram:</span>
                <a href="https://www.instagram.com/sri_ayurveda_clinic" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-amber ml-2 transition">
                  @sri_ayurveda_clinic
                </a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-deep-green">Website:</span>
                <a href="https://www.sriayurvedawellness.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-amber ml-2 transition">
                  sriayurvedawellness.com
                </a>
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-deep-green mb-8">Location</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              #Hamsa complex, Magadi main road,
              <br />
              near Sharath Memorial School,
              <br />
              Ramanagara - 562159
            </p>
            <div className="location-map mt-6">
              <iframe
                title="Sri Ayurveda Clinic location map"
                src="https://www.google.com/maps?q=12.7273669%2C77.2725671&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className="location-map-pin"
                href="https://www.google.com/maps/place/Sri+Ayurveda+Clinic/@12.7273669,77.2725671,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae4d66c8658679:0x5902240bc4760281!8m2!3d12.7273669!4d77.2725671!16s%2Fg%2F11kpt5jw8h?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D"
                aria-label="Open the exact Sri Ayurveda Clinic location in Google Maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="location-map-pin__icon" aria-hidden="true" />
                <span>Sri Ayurveda Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Newsletter Section */}
      <Newsletter />

    </main>
  );
};

export default Home;