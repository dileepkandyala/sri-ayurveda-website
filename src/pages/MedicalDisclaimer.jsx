import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

export default function MedicalDisclaimer() {
  return (
    <div className="page-container">
      <Seo
        title="Medical Disclaimer | Sri Ayurveda"
        description="Important medical disclaimer regarding Sri Ayurveda Clinic services and content."
        keywords="Sri Ayurveda medical disclaimer, health warning, Ayurveda clinic disclaimer"
        canonical={`${SEO_CONFIG.siteUrl}/medical-disclaimer`}
        openGraph={{
          title: 'Medical Disclaimer | Sri Ayurveda',
          description: 'Important medical disclaimer regarding Sri Ayurveda Clinic services and content.',
          url: `${SEO_CONFIG.siteUrl}/medical-disclaimer`,
          image: SEO_CONFIG.siteImage,
        }}
      />

      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Medical Disclaimer</h1>
          <p className="text-xl text-gray-700">Important notice regarding healthcare information and services.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>

      <section className="py-8">
        <div className="card">
          <div style={{padding: '1.5rem', backgroundColor: '#fee2e2', borderRadius: '8px', marginBottom: '2rem', borderLeft: '4px solid #dc2626'}}>
            <h3 style={{color: '#991b1b', marginBottom: '0.5rem'}}>⚠️ IMPORTANT MEDICAL DISCLAIMER</h3>
            <p style={{color: '#7f1d1d', margin: 0}}>Please read this disclaimer carefully before using any services or content provided by Sri Ayurveda Clinic.</p>
          </div>

          <h2 className="mb-4">1. Educational & Informational Purpose Only</h2>
          <p>The content provided on this website, social media pages (including Instagram, Facebook, and YouTube), ad creatives, messaging platforms (WhatsApp), and direct communications by Sri Ayurveda Clinic and Dr. Shreelakshmi M.V. is intended <strong>strictly for educational, informational, and promotional awareness purposes only</strong>.</p>

          <h2 className="mb-4">2. Not a Substitute for Professional Medical Consultation</h2>
          <p><strong>IMPORTANT:</strong> Online content, posts, videos, direct social media messages, or email communications from this clinic <strong>DO NOT constitute</strong>:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Professional medical advice or formal diagnosis</li>
            <li>Establishment of a doctor-patient relationship</li>
            <li>Treatment recommendations unless formally accepted through a consultation</li>
            <li>Substitute for in-person professional clinical evaluation</li>
          </ul>
          <p>Before beginning any treatment or acting on information provided on this website or social media, you should consult with a qualified healthcare practitioner for personalized assessment and advice.</p>

          <h2 className="mb-4">3. No Guaranteed Cures</h2>
          <p>Ayurveda treats individuals holistically based on specific body constitutions (Prakriti) and presenting conditions. <strong>Results vary from person to person.</strong> Sri Ayurveda Clinic strictly makes <strong>NO claims of guaranteed, instant, or absolute cures</strong> for chronic diseases, acute conditions, or medical disorders, in compliance with the Drugs and Magic Remedies Act, 1954.</p>

          <h2 className="mb-4">4. Medical Conditions & Individual Variations</h2>
          <p>The effectiveness of Ayurvedic treatments depends on individual health status, age, existing medical conditions, concurrent medications, lifestyle factors, and patient compliance with prescribed protocols. Individual results cannot be predicted or guaranteed.</p>

          <h2 className="mb-4">5. Emergency Medical Situations</h2>
          <p style={{padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '6px', marginTop: '1rem'}}>
            <strong>EMERGENCY NOTICE:</strong> Sri Ayurveda Clinic and its teleconsultation platforms <strong>ARE NOT intended for medical emergencies</strong>. If you are experiencing:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Acute severe chest pain, difficulty breathing, or signs of heart attack</li>
            <li>Severe allergic reactions (anaphylaxis)</li>
            <li>Uncontrolled bleeding or severe injuries</li>
            <li>Loss of consciousness or severe neurological symptoms</li>
            <li>Any other life-threatening condition</li>
          </ul>
          <p><strong>Please visit the nearest hospital emergency room or contact emergency medical services (108 - India) immediately. DO NOT rely on telemedicine for emergencies.</strong></p>

          <h2 className="mb-4">6. Age Restrictions</h2>
          <p>Certain treatments (particularly Panchakarma procedures) may be contraindicated for specific age groups, pregnancy, or medical conditions. Parental or guardian consent is required for patients under 18 years of age.</p>

          <h2 className="mb-4">7. Allergies & Pre-Existing Conditions</h2>
          <p>You are responsible for disclosing all known allergies, pre-existing medical conditions, ongoing medications, bleeding disorders, hormonal conditions, and previous adverse reactions to herbs or supplements. Failure to disclose relevant health information may result in serious health complications.</p>

          <h2 className="mb-4">8. Pregnancy & Lactation</h2>
          <p>Pregnant women, nursing mothers, and women planning pregnancy should obtain specific consent and guidance before undertaking any Ayurvedic treatment or taking herbal supplements, as certain substances may affect fetal development or breast milk composition.</p>

          <h2 className="mb-4">9. Drug Interactions</h2>
          <p>Ayurvedic medicines may interact with allopathic medications, supplements, or herbal products. You must inform the practitioner of all medications you are currently taking. Sri Ayurveda Clinic is not responsible for drug interactions that occur due to non-disclosure of concurrent medications.</p>

          <h2 className="mb-4">10. Treatment Results & Adverse Reactions</h2>
          <p>While uncommon, Ayurvedic treatments may occasionally cause transient symptoms such as mild headache, altered bowel function, fatigue, or mild rash during the initial treatment phase (known as "Shodhan Kriya"). These are generally temporary detoxification responses. However, if you experience severe adverse reactions, discontinue treatment immediately and seek medical attention.</p>

          <h2 className="mb-4">11. No Medical Diagnosis Online</h2>
          <p>Sri Ayurveda Clinic does not provide formal medical diagnosis through social media, email, or online messaging. Formal diagnosis and treatment recommendations are provided only during paid, documented consultations where the practitioner has obtained a complete health history.</p>

          <h2 className="mb-4">12. Limitation of Clinic Liability</h2>
          <p>Sri Ayurveda Clinic, Dr. Shreelakshmi M.V., and all associated staff shall not be held liable for:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Any adverse health outcomes arising from non-disclosure of medical conditions</li>
            <li>Patient failure to follow prescribed treatment protocols or dietary restrictions</li>
            <li>Use of information from social media or website without formal consultation</li>
            <li>Third-party actions, product contamination, or delivery failures</li>
            <li>Technical failures or privacy breaches by third-party platforms (WhatsApp, payment gateways, etc.)</li>
          </ul>

          <h2 className="mb-4">13. Third-Party Links & External Content</h2>
          <p>This website may contain links to third-party websites, social media platforms, or external resources. Sri Ayurveda Clinic is not responsible for the content, accuracy, or practices of external websites. Use of third-party links is at your own risk.</p>

          <h2 className="mb-4">14. Regulatory Compliance</h2>
          <p>All content, claims, and therapeutic descriptions are provided in compliance with:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954</li>
            <li>NCISM Act, 2020 (Professional conduct standards)</li>
            <li>Telemedicine Practice Guidelines, 2020</li>
            <li>Consumer Protection Act, 2019</li>
            <li>Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
          </ul>

          <h2 className="mb-4">15. Disclaimer Acknowledgment</h2>
          <p>By using this website, booking a consultation, or seeking treatment from Sri Ayurveda Clinic, you acknowledge that you have read, understood, and accept this Medical Disclaimer. You agree that the Clinic, Dr. Shreelakshmi M.V., and all staff members are not liable for any health outcomes resulting from the use or non-use of information or services provided.</p>

          <h2 className="mb-4">16. Contact for Concerns</h2>
          <p>If you have health concerns or questions about this disclaimer, please contact:</p>
          <div style={{padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '6px', marginTop: '1rem'}}>
            <p><strong>Dr. Shreelakshmi.M.V, BAMS</strong></p>
            <p><strong>Email:</strong> sriayurveda23@gmail.com</p>
            <p><strong>Phone:</strong> +91-7619529616</p>
          </div>

          <div style={{marginTop: '2rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px'}}>
            <p><strong>Last Updated:</strong> 05.09.2026</p>
            <p style={{fontSize: '0.875rem', marginTop: '0.5rem'}}>This disclaimer applies to all content created, published, or modified on or after 15.08.2026.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
