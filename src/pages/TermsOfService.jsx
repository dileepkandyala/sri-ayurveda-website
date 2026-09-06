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
          <p>By using Sri Ayurveda Clinic services, contacting us through WhatsApp, Instagram, Facebook, our website, email, phone, or booking an appointment, you agree to be bound by these Terms and Conditions.</p>

          <h2 className="mb-4">2. Scope of Ayurvedic Services</h2>
          <p>Sri Ayurveda Clinic provides professional Ayurvedic clinical assessments, wellness consultations, Panchakarma therapies, dietary guidance (Ahara), and lifestyle advice (Vihara) based on classical Ayurvedic principles integrated with clinical safety standards.</p>

          <h2 className="mb-4">3. Professional Qualifications</h2>
          <p>All consultations are conducted exclusively by <strong>Dr. Shreelakshmi.M.V, BAMS</strong> (Registration Number: 47019), registered with the Karnataka Ayurvedic & Unani Practitioners' Board. The clinic is also registered as a Medical Establishment under Registration Number: RMG00256AYCWD (Valid Till: 19 May 2029).</p>

          <h2 className="mb-4">4. Patient Commitments & Responsibilities</h2>
          <p>By seeking treatment, you agree to:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Provide accurate, truthful, and complete medical histories, existing diagnoses, concurrent treatments (allopathic/other), and allergy details</li>
            <li>Not misuse teleconsultation channels for non-medical emergencies or off-label prescription demands</li>
            <li>Acknowledge that Ayurvedic therapies require compliance with dietary (Ahara) and lifestyle (Vihara) guidance prescribed by the practitioner</li>
            <li>Adhere strictly to prescribed dosages, dietary restrictions (Pathya-Apathya rules), and follow-up protocols</li>
            <li>Maintain respectful and professional communication with our team</li>
          </ul>

          <h2 className="mb-4">5. Appointment, Consultation & Payment Terms</h2>
          <p><strong>Consultation Fees:</strong> Consultation fees for both in-clinic visits and teleconsultations must be paid in full prior to or at the time of consultation. Booking fees are subject to the Cancellation and Refund Policy.</p>
          <p style={{marginTop: '1rem'}}><strong>Appointment Cancellations:</strong></p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Cancellations made at least <strong>24 hours</strong> prior to appointment are eligible for <strong>100% refund</strong> or <strong>free rescheduling</strong></li>
            <li>Cancellations within 24 hours incur a <strong>50% cancellation fee</strong></li>
            <li>Completed consultations are <strong>non-refundable</strong></li>
          </ul>

          <h2 className="mb-4">6. Limitation of Liability</h2>
          <p>The Clinic and its practitioners shall not be liable for adverse outcomes arising from:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Non-disclosure or concealment of pre-existing medical conditions by the patient</li>
            <li>Patient failure to strictly follow the prescription, dosage, or dietary restrictions</li>
            <li>Technical failures, connectivity issues, or disruptions during remote teleconsultations</li>
            <li>Non-compliance with clinical advice or lifestyle modifications</li>
          </ul>

          <h2 className="mb-4">7. Privacy and Data Protection</h2>
          <p>We collect and process your personal information in accordance with our <strong>Privacy Policy (DPDP Act 2023 Compliant)</strong>. By using our services, you consent to data processing for the purposes outlined in the Privacy Policy. All patient data is treated with strict confidentiality under DPDP Act 2023.</p>

          <h2 className="mb-4">8. Intellectual Property</h2>
          <p>All textual content, health education articles, graphic visuals, videos, and logos published on www.sriayurvedawellness.com and social media handles are the exclusive intellectual property of Sri Ayurveda Clinic / Dr. Shreelakshmi M.V. Unauthorized reproduction, distribution, or modification is prohibited.</p>

          <h2 className="mb-4">9. Prohibited Conduct</h2>
          <p>Users shall not:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Transmit malicious software, viruses, or code that could harm our systems</li>
            <li>Reverse engineer clinical portals or attempt unauthorized access to patient data</li>
            <li>Submit fraudulent bookings or false health information</li>
            <li>Engage in harassment, defamation, or inappropriate communication</li>
          </ul>

          <h2 className="mb-4">10. Jurisdiction & Dispute Resolution</h2>
          <p>Dispute resolution arising from the use of our services or website shall be governed by <strong>Indian laws</strong> under the exclusive jurisdiction of the <strong>Courts at Bengaluru, Karnataka</strong>.</p>

          <h2 className="mb-4">11. Changes to Terms</h2>
          <p>We may update these Terms and Conditions at any time. Continued use of our services after changes constitutes your acceptance of the updated terms. The updated version will be posted on this page with a revised "Last Updated" date.</p>

          <h2 className="mb-4">12. Contact & Grievance</h2>
          <p>For questions or grievances regarding these terms, contact: Dr. Shreelakshmi.M.V, sriayurveda23@gmail.com, +91-7619529616</p>
        </div>
      </section>
    </div>
  );
}
