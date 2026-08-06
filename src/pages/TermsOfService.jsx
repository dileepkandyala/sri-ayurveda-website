import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

export default function TermsOfService() {
  return (
    <div className="page-container">
      <Seo
        title="Terms of Service | Sri Ayurveda"
        description="Terms of service for Sri Ayurveda Clinic and wellness services."
        keywords="Sri Ayurveda terms of service, Ayurveda clinic terms"
        canonical={`${SEO_CONFIG.siteUrl}/terms-of-service`}
        openGraph={{
          title: 'Terms of Service | Sri Ayurveda',
          description: 'Terms of service for Sri Ayurveda Clinic and wellness services.',
          url: `${SEO_CONFIG.siteUrl}/terms-of-service`,
          image: SEO_CONFIG.siteImage,
        }}
      />

      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-700">Please read these terms before booking or using our services.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>

      <section className="py-8">
        <div className="card">
          <h2 className="mb-4">1. Acceptance of Terms</h2>
          <p>By using Sri Ayurveda Clinic services, contacting us through WhatsApp, Instagram, Facebook, our website, or booking an appointment, you agree to these Terms of Service.</p>

          <h2 className="mb-4">2. Healthcare Services</h2>
          <p>We provide Ayurvedic consultations, wellness guidance, Panchakarma treatment recommendations, and follow-up care. Our services are intended for general wellness support and informational purposes and do not replace professional medical diagnosis or emergency care.</p>

          <h2 className="mb-4">3. Appointment and Consultation</h2>
          <p>Appointments are subject to availability. You agree to provide accurate information about your health history and to inform us of any urgent medical concerns before treatment.</p>

          <h2 className="mb-4">4. User Responsibilities</h2>
          <p>You agree to use our services respectfully and lawfully. You are responsible for the accuracy of the information you provide and for following any guidance offered by our team.</p>

          <h2 className="mb-4">5. Privacy and Data</h2>
          <p>We collect and process your personal information in accordance with our Privacy Policy. By using our services, you consent to such processing where applicable.</p>

          <h2 className="mb-4">6. Limitation of Liability</h2>
          <p>Sri Ayurveda Clinic is not liable for any indirect, incidental, or consequential damages arising from the use of our services, except where prohibited by law.</p>

          <h2 className="mb-4">7. Changes to Terms</h2>
          <p>We may update these Terms of Service at any time. Continued use of our services after changes constitutes your acceptance of the updated terms.</p>

          <h2 className="mb-4">8. Contact</h2>
          <p>If you have any questions about these terms, please contact Sri Ayurveda Clinic through the contact details provided on this website.</p>
        </div>
      </section>
    </div>
  );
}
