import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

export default function PrivacyPolicy() {
  return (
    <div className="page-container">
      <Seo
        title="Privacy Policy | Sri Ayurveda"
        description="Privacy policy for Sri Ayurveda Clinic and its website services."
        keywords="Sri Ayurveda privacy policy, Ayurveda clinic data protection"
        canonical={`${SEO_CONFIG.siteUrl}/privacy-policy`}
        openGraph={{
          title: 'Privacy Policy | Sri Ayurveda',
          description: 'Privacy policy for Sri Ayurveda Clinic and its website services.',
          url: `${SEO_CONFIG.siteUrl}/privacy-policy`,
          image: SEO_CONFIG.siteImage,
        }}
      />

      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-700">How we collect, use, and protect your personal information.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>

      <section className="py-8">
        <div className="card">
          <h2 className="mb-4">1. Information We Collect</h2>
          <p>We may collect personal information such as your name, phone number, email address, WhatsApp details, and health-related information when you contact us or book a consultation.</p>

          <h2 className="mb-4">2. How We Use Your Information</h2>
          <p>We use your information to respond to inquiries, schedule appointments, provide wellness consultations, send service-related communication, and improve our website and services.</p>

          <h2 className="mb-4">3. Sharing of Information</h2>
          <p>We do not sell your personal data. We may share information only where necessary to provide services, comply with legal requirements, or communicate through approved platforms.</p>

          <h2 className="mb-4">4. Data Security</h2>
          <p>We take reasonable measures to protect your information. However, no digital platform is completely secure, and you should also take care to protect your own devices and accounts.</p>

          <h2 className="mb-4">5. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us directly.</p>

          <h2 className="mb-4">6. Updates to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>

          <h2 className="mb-4">7. Contact</h2>
          <p>If you have questions about this Privacy Policy, please contact Sri Ayurveda Clinic using the details available on our website.</p>
        </div>
      </section>
    </div>
  );
}
