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
          <div style={{padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px', marginBottom: '2rem'}}>
            <p><strong>Effective Date:</strong> 15.08.2026 | <strong>Last Updated:</strong> 05.09.2026</p>
          </div>

          <h3 className="mb-4">Data Fiduciary Information</h3>
          <p><strong>Name:</strong> Sri Ayurveda Clinic</p>
          <p><strong>Grievance Redressal Officer:</strong> Dr. Shreelakshmi.M.V, BAMS</p>
          <p><strong>Email:</strong> sriayurveda23@gmail.com | <strong>Phone:</strong> +91-7619529616</p>
          <p><strong>Address:</strong> #Hamsa complex, Magadi main road, near Sharath Memorial School, Ramanagara, Bengaluru South District-562159</p>

          <h2 className="mb-4 mt-6">1. Notice & Explicit Consent (DPDP Act 2023, Section 6)</h2>
          <p>In accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act), Sri Ayurveda Clinic collects and processes personal data only after obtaining free, specific, informed, unconditional, and unambiguous consent from you (the Data Principal/Patient) through a clear affirmative action.</p>

          <h2 className="mb-4">2. Categories of Data Collected</h2>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Personal Identifiers:</strong> Full Name, Date of Birth, Gender, Contact Number, Email Address, Residential Address</li>
            <li><strong>Health & Clinical Data:</strong> Medical history, present illness, Prakriti assessment, laboratory reports, previous prescriptions, teleconsultation audio/video logs, and photos sent for clinical evaluation</li>
            <li><strong>Technical & Usage Data:</strong> IP Address, Device Identifiers, Cookies, and website interaction metrics</li>
            <li><strong>Financial Data:</strong> Payment transaction references, UPI handles, or bank transaction records for consultation fees (no full credit/debit card credentials stored)</li>
          </ul>

          <h2 className="mb-4">3. Lawful Purpose of Data Processing</h2>
          <p>Your data is processed for the following specific lawful purposes:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Providing in-clinic and remote (telemedicine) Ayurvedic clinical consultations, diagnostics, and treatment recommendations</li>
            <li>Issuing digital Ayurvedic prescriptions and handling medication orders/shipping</li>
            <li>Managing appointment scheduling, reminders, and patient account management via SMS, Email, or WhatsApp</li>
            <li>Processing billing, receipts, accounting, and compliance with Indian tax laws</li>
            <li>Defending against legal claims or adhering to mandatory orders issued by Indian courts, law enforcement, or statutory bodies (NCISM/Ministry of AYUSH)</li>
          </ul>

          <h2 className="mb-4">4. Data Transfer & Third-Party Processors</h2>
          <p>Data may be processed by contractually bound third-party service providers (e.g., secure cloud hosting providers, WhatsApp Business API partners, SMS gateways, diagnostic labs). All third parties act as Data Processors under strict non-disclosure and security mandates compliant with DPDP Act 2023. <strong>Sri Ayurveda Clinic does NOT sell, rent, or trade patient personal or health data to third parties, advertising networks, or data brokers.</strong></p>

          <h2 className="mb-4">5. Your Rights as Data Principal</h2>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Right to Access:</strong> Request a summary of personal data processed and processing activities</li>
            <li><strong>Right to Correction & Erasure:</strong> Correct inaccurate/incomplete data or request deletion when no longer necessary for clinical/legal retention</li>
            <li><strong>Right to Withdraw Consent:</strong> Revoke consent at any time (does not affect lawful processing conducted prior to revocation)</li>
            <li><strong>Right to Grievance Redressal:</strong> Access our internal mechanism to resolve complaints regarding data processing</li>
            <li><strong>Right to Nominate:</strong> Appoint another individual to exercise data rights in the event of your death or incapacity</li>
          </ul>

          <h2 className="mb-4">6. Data Security Measures</h2>
          <p>Electronic Patient Health Records (EHR) are stored using encrypted cloud storage with access controls and multi-factor authentication (MFA). We take reasonable measures to protect your information. However, no digital platform is completely secure, and you should also take care to protect your own devices and accounts.</p>

          <h2 className="mb-4">7. Data Retention Period</h2>
          <p>Medical and Clinical Records are retained for a minimum statutory period of <strong>3 years from the date of last treatment/consultation</strong> as per NCISM/Medical Council guidelines. General non-consulting leads are deleted or anonymized after <strong>12 months</strong>.</p>

          <h2 className="mb-4">8. Grievance Redressal Mechanism</h2>
          <p>Grievances regarding data privacy or clinical services may be submitted to:</p>
          <div style={{padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '6px', marginTop: '1rem'}}>
            <p><strong>Grievance Officer:</strong> Dr. Shreelakshmi.M.V, BAMS</p>
            <p><strong>Email:</strong> sriayurveda23@gmail.com</p>
            <p><strong>Phone:</strong> +91-7619529616</p>
            <p><strong>Address:</strong> #Hamsa complex, Magadi main road, near Sharath Memorial School, Ramanagara, Bengaluru South District-562159, Karnataka</p>
            <p style={{marginTop: '1rem'}}><strong>Acknowledgment:</strong> Within 48 hours | <strong>Resolution Target:</strong> Within 15 business days</p>
          </div>

          <h2 className="mb-4 mt-6">9. Updates to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. Any significant changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.</p>

          <h2 className="mb-4">10. Contact & Questions</h2>
          <p>If you have questions about this Privacy Policy or our data handling practices, please contact us using the details provided above.</p>
        </div>
      </section>
    </div>
  );
}
