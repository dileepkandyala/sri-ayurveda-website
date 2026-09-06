import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

export default function DataRetentionSecurity() {
  return (
    <div className="page-container">
      <Seo
        title="Data Security & Retention Policy | Sri Ayurveda"
        description="Data security and retention practices for Sri Ayurveda Clinic."
        keywords="data security, data retention, privacy, Sri Ayurveda"
        canonical={`${SEO_CONFIG.siteUrl}/data-retention-security-policy`}
        openGraph={{
          title: 'Data Security & Retention Policy | Sri Ayurveda',
          description: 'Data security and retention practices.',
          url: `${SEO_CONFIG.siteUrl}/data-retention-security-policy`,
          image: SEO_CONFIG.siteImage,
        }}
      />

      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Data Security & Retention Policy</h1>
          <p className="text-xl text-gray-700">How we protect and manage your personal and health information.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>

      <section className="py-8">
        <div className="card">
          <div style={{padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px', marginBottom: '2rem'}}>
            <p><strong>Effective Date:</strong> 15.08.2026 | <strong>Framework:</strong> DPDP Act 2023, IT Rules 2011, NCISM Guidelines</p>
          </div>

          <h2 className="mb-4">1. Data Security Overview</h2>
          <p>Sri Ayurveda Clinic implements comprehensive technical, administrative, and physical safeguards to protect patient personal data, health information, and financial records against unauthorized access, disclosure, alteration, and destruction.</p>

          <h2 className="mb-4">2. Encryption & Technical Safeguards</h2>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Data Encryption in Transit:</strong> All data transmitted between your device and clinic servers uses SSL/TLS encryption protocols</li>
            <li><strong>Data Encryption at Rest:</strong> Sensitive personal and health data stored on servers is encrypted using industry-standard AES-256 encryption</li>
            <li><strong>Secure Servers:</strong> Patient records are stored on secure, access-controlled cloud servers with regular security audits</li>
            <li><strong>Firewalls & Intrusion Detection:</strong> Network firewalls and intrusion detection systems monitor for unauthorized access attempts</li>
            <li><strong>Multi-Factor Authentication (MFA):</strong> Staff access to patient data requires MFA (password + OTP/authenticator app)</li>
          </ul>

          <h2 className="mb-4">3. Access Control & Authorization</h2>
          <p>Patient and customer information is accessible only to authorized personnel who require it for:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Direct patient care and treatment (Dr. Shreelakshmi M.V.)</li>
            <li>Administrative support (appointment scheduling, billing)</li>
            <li>Legal compliance and regulatory reporting</li>
            <li>Grievance investigation and customer service</li>
          </ul>

          <p style={{marginTop: '1rem'}}>Access is granted on a "need-to-know" basis with role-based permissions. Unauthorized access attempts are logged and investigated.</p>

          <h2 className="mb-4">4. Data Retention Periods</h2>
          <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '2rem'}}>
            <thead>
              <tr style={{backgroundColor: '#f3f4f6'}}>
                <th style={{border: '1px solid #d1d5db', padding: '0.75rem', textAlign: 'left'}}>Data Type</th>
                <th style={{border: '1px solid #d1d5db', padding: '0.75rem', textAlign: 'left'}}>Retention Period</th>
                <th style={{border: '1px solid #d1d5db', padding: '0.75rem', textAlign: 'left'}}>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Medical & Clinical Records</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Minimum 3 years from last consultation/treatment</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>NCISM/Medical Council requirement, treatment continuity, legal liability</td>
              </tr>
              <tr style={{backgroundColor: '#f9fafb'}}>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Consultation Records & Prescriptions</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Minimum 3 years</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Treatment continuity, audit trail, legal defense</td>
              </tr>
              <tr>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Appointment & Scheduling Data</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>2 years</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Administrative records, audit purposes</td>
              </tr>
              <tr style={{backgroundColor: '#f9fafb'}}>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Financial/Billing Records</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>7 years</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Tax compliance, financial audit, statutory requirements</td>
              </tr>
              <tr>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Non-Consulting Leads (Inquiries)</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>12 months</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Marketing follow-up, no established patient relationship</td>
              </tr>
              <tr style={{backgroundColor: '#f9fafb'}}>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Telemedicine Audio/Video Recordings</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>1 year (or per patient consent)</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Quality assurance, training, legal evidence (if authorized)</td>
              </tr>
              <tr>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Website Analytics & Cookies</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>As per Cookie Policy (typically 12 months)</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Website performance analysis</td>
              </tr>
            </tbody>
          </table>

          <h2 className="mb-4">5. Data Deletion & Anonymization</h2>
          <p>Upon expiration of retention periods or upon patient request (where legally permitted):</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Secure Deletion:</strong> Data is permanently deleted using industry-standard secure deletion protocols (overwriting, cryptographic erasure)</li>
            <li><strong>Anonymization:</strong> Where retention is required for statistical/research purposes, data is anonymized to remove all identifiers</li>
            <li><strong>Destruction Certification:</strong> Deletion is documented and certified by authorized personnel</li>
          </ul>

          <h2 className="mb-4">6. Data Breach & Security Incident Response</h2>
          <p><strong>If we suspect unauthorized access, disclosure, or loss of your data, we will:</strong></p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Immediately Report:</strong> Notify the affected individual (you) within 72 hours as per DPDP Act 2023</li>
            <li><strong>Investigate:</strong> Conduct immediate internal investigation to determine scope and cause</li>
            <li><strong>Notify Authorities:</strong> Report to relevant regulatory authorities if required by law</li>
            <li><strong>Remediate:</strong> Take corrective action to prevent recurrence and mitigate harm</li>
            <li><strong>Document:</strong> Maintain detailed incident reports for audit and compliance</li>
          </ul>

          <h2 className="mb-4">7. Backup & Disaster Recovery</h2>
          <p>To ensure data availability and business continuity:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Patient records are automatically backed up to geographically distributed secure servers</li>
            <li>Backup data is encrypted using the same security standards as primary data</li>
            <li>Disaster recovery procedures are tested quarterly to ensure data recovery capability</li>
            <li>Backup data is retained according to the same retention schedule as primary records</li>
          </ul>

          <h2 className="mb-4">8. Third-Party Data Processors</h2>
          <p>When third-party service providers (cloud hosts, email services, SMS gateways, payment processors) access patient data, we ensure:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Signed Data Processing Agreements with security & confidentiality clauses</li>
            <li>Third parties maintain security standards equivalent to Sri Ayurveda Clinic</li>
            <li>Limited access to only data necessary for their specific function</li>
            <li>Regular security audits and compliance verification</li>
            <li>Restrictions on data transfer to other jurisdictions</li>
          </ul>

          <h2 className="mb-4">9. Staff Training & Confidentiality</h2>
          <p>All staff members receive:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Mandatory data security and privacy training before access to patient data</li>
            <li>Annual refresher training on DPDP Act compliance and security protocols</li>
            <li>Signed Confidentiality & NDA agreements restricting data disclosure</li>
            <li>Clear consequences for unauthorized data access or breach (termination, legal action)</li>
          </ul>

          <h2 className="mb-4">10. Patient Rights & Data Access</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Access:</strong> Request a copy of your personal and health data we hold</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of data when no longer necessary (subject to legal holds)</li>
            <li><strong>Portability:</strong> Request transfer of your data in a portable format</li>
            <li><strong>Grievance Redressal:</strong> File a complaint regarding data handling practices</li>
          </ul>

          <p style={{marginTop: '1rem'}}>To exercise these rights, contact the Grievance Officer: sriayurveda23@gmail.com, +91-7619529616</p>

          <h2 className="mb-4">11. Compliance & Audits</h2>
          <p>Data security practices are regularly reviewed through:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Quarterly internal security assessments</li>
            <li>Annual third-party security audits (penetration testing, vulnerability assessment)</li>
            <li>Compliance verification with DPDP Act 2023, IT Rules 2011</li>
            <li>Documentation of audit findings and corrective actions</li>
          </ul>

          <h2 className="mb-4">12. Contact for Data Security Concerns</h2>
          <p>If you have concerns about data security practices or suspect a breach:</p>
          <div style={{padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '6px', marginTop: '1rem'}}>
            <p><strong>Data Protection Officer / Grievance Officer:</strong> Dr. Shreelakshmi.M.V, BAMS</p>
            <p><strong>Email:</strong> sriayurveda23@gmail.com</p>
            <p><strong>Phone:</strong> +91-7619529616 (Urgent: +91-9187398489)</p>
            <p><strong>Emergency Response:</strong> Immediate investigation and notification</p>
          </div>

          <div style={{marginTop: '2rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px'}}>
            <p><strong>Commitment:</strong> Sri Ayurveda Clinic is committed to protecting your data with the highest security and privacy standards.</p>
            <p style={{marginTop: '0.5rem'}}><strong>Last Updated:</strong> 05.09.2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}
