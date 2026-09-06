import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

export default function TelemedicinePolicy() {
  return (
    <div className="page-container">
      <Seo
        title="Telemedicine Policy | Sri Ayurveda"
        description="Telemedicine practice guidelines and online consultation policy for Sri Ayurveda Clinic."
        keywords="telemedicine policy, online consultation, telehealth guidelines, Sri Ayurveda"
        canonical={`${SEO_CONFIG.siteUrl}/telemedicine-policy`}
        openGraph={{
          title: 'Telemedicine Policy | Sri Ayurveda',
          description: 'Telemedicine practice guidelines and online consultation policy.',
          url: `${SEO_CONFIG.siteUrl}/telemedicine-policy`,
          image: SEO_CONFIG.siteImage,
        }}
      />

      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Telemedicine Policy</h1>
          <p className="text-xl text-gray-700">Guidelines for online consultations and remote healthcare services.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>

      <section className="py-8">
        <div className="card">
          <div style={{padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px', marginBottom: '2rem'}}>
            <p><strong>Effective Date:</strong> 15.08.2026 | <strong>Framework:</strong> Telemedicine Practice Guidelines (2020) & NCISM Telemedicine Guidelines</p>
          </div>

          <h2 className="mb-4">1. Telemedicine Operating Framework</h2>
          <p>Remote consultations offered by Sri Ayurveda Clinic via WhatsApp Video Calls, Audio Calls, or Web Telehealth Portals are conducted in strict compliance with:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Telemedicine Practice Guidelines (2020) issued by the Ministry of Health and Family Welfare, India</li>
            <li>NCISM (National Commission for Indian System of Medicine) Telemedicine Guidelines</li>
            <li>Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
            <li>Information Technology Act, 2000 & IT Rules 2011</li>
          </ul>

          <h2 className="mb-4">2. Practitioner Identification & Consent</h2>
          <p>At the initiation of every teleconsultation, Dr. Shreelakshmi M.V. shall:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Declare her identity, full name, and professional title</li>
            <li>Display Ayurvedic qualifications: <strong>BAMS (Bachelor of Ayurvedic Medicine & Surgery)</strong></li>
            <li>Provide Registration Number: <strong>47019</strong> (Karnataka Ayurvedic & Unani Practitioners' Board)</li>
            <li>Obtain explicit patient consent for teleconsultation before commencing evaluation</li>
            <li>Confirm that the patient is in a private, secure environment suitable for consultation</li>
          </ul>

          <h2 className="mb-4">3. Scope & Limitations of Telemedicine</h2>
          <p>Telemedicine is intended for:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Initial wellness consultations and health assessments</li>
            <li>Follow-up appointments for ongoing treatment monitoring</li>
            <li>Prescription refills and medication recommendations</li>
            <li>Lifestyle and dietary guidance</li>
            <li>Management of chronic conditions with established treatment plans</li>
          </ul>

          <h3 className="mb-4">Limitations of Telemedicine:</h3>
          <p>Telemedicine has inherent limitations compared to physical, in-person clinical examination, including:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Physical Examination Limitations:</strong> Inability to conduct direct Nadi Pariksha (pulse assessment), palpation, or detailed physical examination</li>
            <li><strong>Connectivity Issues:</strong> Internet or device failures may disrupt consultation</li>
            <li><strong>Environmental Privacy:</strong> Patient must ensure secure, private environment to protect confidentiality</li>
            <li><strong>Clinical Complexity:</strong> Complex cases requiring in-depth physical assessment</li>
          </ul>

          <p style={{marginTop: '1rem'}}><strong>If the practitioner determines that a teleconsultation is clinically insufficient, the practitioner reserves the right to request an in-person clinic visit or to refer the patient to another healthcare provider.</strong></p>

          <h2 className="mb-4">4. Patient Responsibilities During Telemedicine</h2>
          <p>Patients agree to:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Provide accurate, complete, and truthful medical history and symptom descriptions</li>
            <li>Be in a private, confidential environment during consultation</li>
            <li>Ensure stable internet connectivity for the duration of the consultation</li>
            <li>Have appropriate lighting and clear audio/video for proper assessment</li>
            <li>Disclose all current medications, supplements, and allergies</li>
            <li>Inform the practitioner of any hearing/visual impairments</li>
            <li>Acknowledge the limitations of online consultation</li>
          </ul>

          <h2 className="mb-4">5. Digital Prescriptions</h2>
          <p>Prescriptions issued through telemedicine will be provided in standard electronic formats containing:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Practitioner name, registration number, and contact details</li>
            <li>Patient name, age, gender, and contact information</li>
            <li>Date and time of consultation</li>
            <li>Diagnosis (in Ayurvedic terminology)</li>
            <li>Ayurvedic medicine names (Sanskrit and English)</li>
            <li>Precise dosage, frequency, and duration of treatment</li>
            <li>Dietary guidelines (Pathya-Apathya) and lifestyle modifications</li>
            <li>Precautions and contraindications</li>
            <li>Date for follow-up consultation</li>
          </ul>

          <p style={{marginTop: '1rem'}}><strong>IMPORTANT:</strong> Restricted statutory schedule drugs and controlled substances will NOT be prescribed via telemedicine as per regulatory guidelines.</p>

          <h2 className="mb-4">6. Confidentiality & Data Protection</h2>
          <p>All teleconsultations are confidential and protected under:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>DPDP Act 2023 (health data is considered Sensitive Personal Data)</li>
            <li>Patient Confidentiality Policy of Sri Ayurveda Clinic</li>
            <li>NCISM Professional Ethics Standards</li>
          </ul>

          <p style={{marginTop: '1rem'}}>Consultation records, audio/video logs, and patient data are stored with encryption and access controls. Patients are informed of any recording or documentation of consultations.</p>

          <h2 className="mb-4">7. Recording & Documentation Consent</h2>
          <p>If the clinic records audio or video of a consultation for quality assurance, clinical documentation, or legal purposes, explicit patient consent will be obtained before recording. Patients may request not to be recorded, subject to regulatory compliance requirements.</p>

          <h2 className="mb-4">8. Emergency Clause</h2>
          <p style={{padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '6px'}}>
            <strong>IMPORTANT:</strong> Telemedicine is NOT suitable for medical emergencies. If you experience severe chest pain, difficulty breathing, anaphylaxis, uncontrolled bleeding, loss of consciousness, or other life-threatening symptoms, <strong>immediately visit the nearest hospital emergency room or call 108 (Emergency Services - India) INSTEAD of requesting a telemedicine consultation.</strong>
          </p>

          <h2 className="mb-4">9. Follow-Up & Continuity of Care</h2>
          <p>Patients are advised that:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Follow-up consultations may be conducted via telemedicine or in-person as determined by the practitioner</li>
            <li>Patients should schedule follow-up appointments as per treatment protocols</li>
            <li>Missed follow-up appointments may affect treatment efficacy</li>
            <li>In-person examination may be required periodically to ensure appropriate clinical progress</li>
          </ul>

          <h2 className="mb-4">10. Licensing & Malpractice</h2>
          <p>Telemedicine services are delivered by a licensed, registered Ayurvedic practitioner. All services are subject to professional liability and malpractice insurance as applicable under Indian healthcare regulations. Patients may file complaints with the NCISM or relevant regulatory body if they believe the practitioner has provided substandard care.</p>

          <h2 className="mb-4">11. Technical Requirements</h2>
          <p>For optimal telemedicine consultation, patients should ensure:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Stable internet connection (minimum 2 Mbps for video calls)</li>
            <li>Compatible device (smartphone, tablet, or computer)</li>
            <li>Updated WhatsApp, web browser, or telehealth app</li>
            <li>Clear audio and video functionality</li>
            <li>Appropriate lighting and quiet environment</li>
          </ul>

          <p style={{marginTop: '1rem'}}>Sri Ayurveda Clinic is not responsible for technical failures or connectivity issues beyond its control. However, the clinic will attempt to reconnect or reschedule the consultation if technical issues occur.</p>

          <h2 className="mb-4">12. Refund & Cancellation Policy for Telemedicine</h2>
          <p>Telemedicine consultation cancellations are subject to the same refund terms as in-clinic consultations:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>24+ hours notice:</strong> 100% refund or free reschedule</li>
            <li><strong>Within 24 hours:</strong> 50% cancellation fee</li>
            <li><strong>No-show:</strong> Full fee forfeited (no refund)</li>
          </ul>

          <h2 className="mb-4">13. Jurisdiction & Dispute Resolution</h2>
          <p>Telemedicine services are subject to the same Terms and Conditions and jurisdiction as in-clinic services. Disputes arising from telemedicine consultations shall be governed by Indian law and resolved under the jurisdiction of Courts at Bengaluru, Karnataka.</p>

          <h2 className="mb-4">14. Contact & Grievances</h2>
          <p>For telemedicine-related grievances or concerns, contact:</p>
          <div style={{padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '6px', marginTop: '1rem'}}>
            <p><strong>Grievance Officer:</strong> Dr. Shreelakshmi.M.V, BAMS</p>
            <p><strong>Email:</strong> sriayurveda23@gmail.com</p>
            <p><strong>Phone:</strong> +91-7619529616</p>
            <p><strong>Response Time:</strong> Acknowledgment within 48 hours, resolution within 15 business days</p>
          </div>

          <div style={{marginTop: '2rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px'}}>
            <p><strong>Acknowledgment:</strong> By booking a telemedicine consultation, you acknowledge that you have read and understood this Telemedicine Policy and agree to comply with all guidelines outlined herein.</p>
            <p style={{marginTop: '0.5rem'}}><strong>Last Updated:</strong> 05.09.2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}
