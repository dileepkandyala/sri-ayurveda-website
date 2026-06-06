import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-16 w-16 text-amber-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900 mb-6">
            Restore Health, Renew Vitality,<br />Live in Harmony
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-8">
              YOUR HEALTH IS OUR PRIORITY
            </h2>

            <div className="text-left space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Welcome to Sri Ayurveda, where ancient Ayurvedic wisdom meets modern care. At Sri Ayurveda, we believe true health comes from balance—of body, mind, and spirit. Rooted in the ancient science of Ayurveda, our clinic is dedicated to helping individuals heal naturally and live with vitality. We combine traditional knowledge with a compassionate, patient-centered approach to address not just symptoms, but the root causes of illness.
              </p>

              <p>
                Our experienced Ayurvedic practitioner, Dr. Shreelakshmi M.V., (also a Certified Yoga professional) offers personalized consultations, holistic therapies, and wellness programs tailored to your unique needs. From managing chronic conditions and strengthening immunity to relieving stress and improving lifestyle health, we guide you with treatments and lifestyle advice aligned with timeless Ayurvedic principles.
              </p>

              <p>
                With trust, authenticity, and care at the heart of everything we do, Sri Ayurveda is more than a clinic—it's a partner in your journey to lasting wellness.
              </p>
            </div>
          </div>

          <a
            href="/contact#contact"
            className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition transform hover:scale-105 shadow-lg inline-block"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
