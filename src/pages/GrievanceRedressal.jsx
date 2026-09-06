import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

export default function GrievanceRedressal() {
  return (
    <div className="page-container">
      <Seo
        title="Grievance Redressal | Sri Ayurveda"
        description="Complaint and grievance resolution policy for Sri Ayurveda Clinic."
        keywords="grievance redressal, complaint policy, patient complaint, Sri Ayurveda"
        canonical={`${SEO_CONFIG.siteUrl}/grievance-redressal`}
        openGraph={{
          title: 'Grievance Redressal | Sri Ayurveda',
          description: 'Complaint and grievance resolution policy.',
          url: `${SEO_CONFIG.siteUrl}/grievance-redressal`,
          image: SEO_CONFIG.siteImage,
        }}
      />

      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Grievance Redressal</h1>
          <p className="text-xl text-gray-700">Submit and track complaints regarding our services or data practices.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>

      <section className="py-8">
        <div className="card">
          <div style={{padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px', marginBottom: '2rem'}}>
            <p><strong>Effective Date:</strong> 15.08.2026 | <strong>Framework:</strong> DPDP Act 2023, NCISM Guidelines, Consumer Protection Act 2019</p>
          </div>

          <h2 className="mb-4">1. Grievance Redressal Overview</h2>
          <p>Sri Ayurveda Clinic is committed to providing quality healthcare and maintaining high data protection standards. If you have a complaint, concern, or grievance regarding our services, clinical care, data handling, or any other aspect of your experience, we provide a formal grievance redressal mechanism to address your concerns promptly and fairly.</p>

          <h2 className="mb-4">2. Designated Grievance Officer</h2>
          <div style={{padding: '1.5rem', backgroundColor: '#f3f4f6', borderRadius: '8px', marginBottom: '2rem'}}>
            <p><strong>Name:</strong> Dr. Shreelakshmi.M.V</p>
            <p><strong>Qualification:</strong> BAMS (Bachelor of Ayurvedic Medicine & Surgery)</p>
            <p><strong>Registration Number:</strong> 47019 (Karnataka Ayurvedic & Unani Practitioners' Board)</p>
            <p style={{marginTop: '1rem'}}><strong>Email:</strong> sriayurveda23@gmail.com</p>
            <p><strong>Phone:</strong> +91-7619529616</p>
            <p><strong>Address:</strong> #Hamsa complex, Magadi main road, near Sharath Memorial School, Ramanagara, Bengaluru South District-562159, Karnataka</p>
          </div>

          <h2 className="mb-4">3. Types of Grievances Addressed</h2>
          <p>The grievance redressal mechanism handles complaints related to:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Clinical Care Quality:</strong> Concerns about consultation quality, treatment outcomes, or clinical recommendations</li>
            <li><strong>Data Privacy & Protection:</strong> Unauthorized access, data misuse, or violations under DPDP Act 2023</li>
            <li><strong>Service Quality:</strong> Issues with appointment scheduling, delays, or unprofessional conduct</li>
            <li><strong>Billing & Refunds:</strong> Disputes over charges, refunds, or payment processing</li>
            <li><strong>Telemedicine Issues:</strong> Technical problems, privacy concerns, or practice guideline violations</li>
            <li><strong>Medicine/Product Quality:</strong> Issues with prescribed medicines, supplements, or product delivery</li>
            <li><strong>Confidentiality Breaches:</strong> Unauthorized disclosure of medical information or personal data</li>
            <li><strong>Professional Misconduct:</strong> Allegations of unethical behavior or breach of professional standards</li>
          </ul>

          <h2 className="mb-4">4. How to File a Grievance</h2>

          <h3 className="mb-2">Step 1: Prepare Your Complaint</h3>
          <p>Document the following information:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Your full name and contact details (email, phone number)</li>
            <li>Description of the grievance (specific incident, date, time)</li>
            <li>Services or policies involved</li>
            <li>Actions already taken to resolve (if any)</li>
            <li>Desired resolution or remedy</li>
            <li>Supporting documentation (receipts, emails, recordings, etc.)</li>
          </ul>

          <h3 className="mb-2">Step 2: Submit Your Grievance</h3>
          <p>Submit your complaint through any of the following methods:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Email:</strong> sriayurveda23@gmail.com (Subject: "Patient Grievance - [Your Name]")</li>
            <li><strong>Phone:</strong> +91-7619529616 (Verbal complaints can be registered; follow-up written confirmation recommended)</li>
            <li><strong>In-Person:</strong> Visit the clinic address to submit a written complaint</li>
            <li><strong>WhatsApp:</strong> Send a written complaint message to +91-7619529616 (WhatsApp)</li>
          </ul>

          <h3 className="mb-2">Step 3: Grievance Registration</h3>
          <p>Upon receipt, your grievance will be:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Registered with a unique Grievance Reference Number (within 48 hours)</li>
            <li>Assigned to the Grievance Officer for investigation</li>
            <li>Acknowledged with a confirmation email/SMS (within 48 hours)</li>
          </ul>

          <h2 className="mb-4">5. Grievance Resolution Timeline</h2>
          <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '2rem'}}>
            <thead>
              <tr style={{backgroundColor: '#f3f4f6'}}>
                <th style={{border: '1px solid #d1d5db', padding: '0.75rem', textAlign: 'left'}}>Stage</th>
                <th style={{border: '1px solid #d1d5db', padding: '0.75rem', textAlign: 'left'}}>Action</th>
                <th style={{border: '1px solid #d1d5db', padding: '0.75rem', textAlign: 'left'}}>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Acknowledgment</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Initial receipt acknowledgment</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Within 48 hours</td>
              </tr>
              <tr style={{backgroundColor: '#f9fafb'}}>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Investigation</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Gather facts, review records, interview involved parties</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>7-14 days</td>
              </tr>
              <tr>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Resolution</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Provide written resolution & corrective action</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>15 business days</td>
              </tr>
              <tr style={{backgroundColor: '#f9fafb'}}>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Follow-Up</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Verify satisfactory resolution</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>30 days post-resolution</td>
              </tr>
            </tbody>
          </table>

          <h2 className="mb-4">6. Grievance Investigation Process</h2>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Impartiality:</strong> Investigation conducted by Grievance Officer without bias</li>
            <li><strong>Confidentiality:</strong> All grievance details kept strictly confidential</li>
            <li><strong>Documentation:</strong> All investigation steps and findings documented</li>
            <li><strong>Complainant Rights:</strong> You may request updates on investigation progress</li>
            <li><strong>Right to Be Heard:</strong> You have the opportunity to present your side of the story</li>
          </ul>

          <h2 className="mb-4">7. Potential Outcomes & Remedies</h2>
          <p>Depending on investigation findings, possible remedies include:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Apology & Explanation:</strong> Clarification of actions or decisions</li>
            <li><strong>Service Restoration:</strong> Correction of clinical records or data</li>
            <li><strong>Refund:</strong> Full or partial refund of consultation or service fees</li>
            <li><strong>Rescheduling:</strong> Free rescheduling of consultation</li>
            <li><strong>Corrective Action:</strong> Process improvements to prevent recurrence</li>
            <li><strong>Compensation:</strong> Where appropriate, compensation for damages or losses</li>
            <li><strong>Disciplinary Action:</strong> If misconduct verified, staff disciplinary measures</li>
          </ul>

          <h2 className="mb-4">8. Escalation & Further Recourse</h2>
          <p>If you are unsatisfied with the clinic's internal grievance resolution, you may escalate to:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>NCISM (National Commission for Indian System of Medicine):</strong> For professional conduct complaints</li>
            <li><strong>State Consumer Protection Authority:</strong> For consumer protection violations</li>
            <li><strong>Data Protection Board (DPDP Act):</strong> For data privacy breaches</li>
            <li><strong>Medical Establishment Registration Authority:</strong> For regulatory violations</li>
            <li><strong>Police/Legal Action:</strong> For criminal matters or fraud</li>
          </ul>

          <h2 className="mb-4">9. Your Rights During Grievance Process</h2>
          <p>As a complainant, you have the right to:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>File a grievance without fear of retaliation or negative treatment</li>
            <li>Receive updates on investigation progress</li>
            <li>Present evidence and witnesses</li>
            <li>Know the investigation findings</li>
            <li>Appeal the resolution if unsatisfactory</li>
            <li>Request escalation to external authorities</li>
            <li>Access all relevant documentation</li>
          </ul>

          <h2 className="mb-4">10. Anti-Retaliation Policy</h2>
          <p><strong>Sri Ayurveda Clinic strictly prohibits retaliation against patients or staff who file a grievance or complaint in good faith.</strong> Any retaliatory actions (denial of treatment, negative remarks, billing disputes, etc.) will result in disciplinary action and are subject to legal consequences.</p>

          <h2 className="mb-4">11. Confidentiality & Privacy</h2>
          <p>All grievance information, including the complainant's identity, grievance details, and investigation findings, are treated with strict confidentiality. Information is disclosed only as required by law or with the complainant's explicit consent.</p>

          <h2 className="mb-4">12. Record Keeping</h2>
          <p>The clinic maintains a register of all grievances, investigation findings, and resolutions for audit, compliance, and improvement purposes. These records are retained for a minimum of 5 years.</p>

          <h2 className="mb-4">13. Contact Information Summary</h2>
          <div style={{padding: '1.5rem', backgroundColor: '#fef3c7', borderRadius: '8px', marginTop: '1rem'}}>
            <p><strong>For Grievances, Contact:</strong></p>
            <p><strong>Grievance Officer:</strong> Dr. Shreelakshmi.M.V, BAMS</p>
            <p><strong>Email:</strong> sriayurveda23@gmail.com</p>
            <p><strong>Phone:</strong> +91-7619529616</p>
            <p><strong>WhatsApp:</strong> +91-7619529616</p>
            <p style={{marginTop: '1rem'}}><strong>Response Guarantee:</strong> Acknowledgment within 48 hours | Resolution within 15 business days</p>
          </div>

          <div style={{marginTop: '2rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px'}}>
            <p><strong>Commitment:</strong> We are dedicated to resolving your grievances fairly, transparently, and promptly to restore your confidence in our services.</p>
            <p style={{marginTop: '0.5rem'}}><strong>Last Updated:</strong> 05.09.2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}
