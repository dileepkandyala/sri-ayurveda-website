import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

export default function CookiePolicy() {
  return (
    <div className="page-container">
      <Seo
        title="Cookie Policy | Sri Ayurveda"
        description="Cookie and storage policy for Sri Ayurveda website."
        keywords="cookie policy, privacy, website storage, Sri Ayurveda"
        canonical={`${SEO_CONFIG.siteUrl}/cookie-policy`}
        openGraph={{
          title: 'Cookie Policy | Sri Ayurveda',
          description: 'Cookie and storage policy for Sri Ayurveda website.',
          url: `${SEO_CONFIG.siteUrl}/cookie-policy`,
          image: SEO_CONFIG.siteImage,
        }}
      />

      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-700">Information about cookies and browser storage on our website.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>

      <section className="py-8">
        <div className="card">
          <div style={{padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px', marginBottom: '2rem'}}>
            <p><strong>Effective Date:</strong> 15.08.2026 | <strong>Last Updated:</strong> 05.09.2026</p>
          </div>

          <h2 className="mb-4">1. What Are Cookies?</h2>
          <p>Cookies are small text files that are stored on your browser or device when you visit a website. They contain information about your browsing activity, preferences, and session data, allowing websites to remember your information during and between visits.</p>

          <h2 className="mb-4">2. Essential Cookies</h2>
          <p>Sri Ayurveda Clinic uses <strong>essential cookies</strong> to ensure critical website functionality:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Session Cookies:</strong> Maintain your login session, appointment booking cart, and consultation preferences</li>
            <li><strong>Security Cookies:</strong> Protect against unauthorized access and fraud detection</li>
            <li><strong>Functional Cookies:</strong> Remember your language preference, accessibility settings, and navigation choices</li>
            <li><strong>Cookie Consent:</strong> Store your cookie preference selections</li>
          </ul>

          <p style={{marginTop: '1rem'}}>These essential cookies are <strong>necessary for the website to function securely</strong> and cannot be disabled without impairing website functionality.</p>

          <h2 className="mb-4">3. Non-Essential Cookies & Analytics</h2>
          <p><strong>Non-essential cookies for analytics and performance tracking are deployed ONLY after explicit user consent through our website Cookie Banner.</strong></p>
          <p style={{marginTop: '1rem'}}>Non-essential cookies include:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Analytics Cookies:</strong> Track website traffic, page views, user behavior, and session duration (subject to user consent)</li>
            <li><strong>Performance Cookies:</strong> Monitor website speed, error tracking, and user experience metrics</li>
          </ul>

          <h2 className="mb-4">4. Health Data & Privacy-Sensitive Cookies</h2>
          <p style={{padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '6px'}}>
            <strong>IMPORTANT:</strong> Sri Ayurveda Clinic does NOT use tracking pixels (Meta Pixel, Google Analytics event tracking, or similar) to collect, track, or transmit <strong>Sensitive Health Data</strong>, specific medical conditions, diagnostic selections, or health-related personal data to third-party ad networks, marketing platforms, or data brokers.
          </p>

          <h2 className="mb-4">5. Third-Party Cookies & External Services</h2>
          <p>Our website may use services from external providers that may set their own cookies:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>WhatsApp Business API:</strong> Cookies for managing WhatsApp communication and messaging</li>
            <li><strong>Payment Gateways:</strong> Secure payment processing cookies</li>
            <li><strong>Hosting Providers:</strong> Server-side cookies for website delivery and security</li>
            <li><strong>Social Media Embeds:</strong> Cookies from Instagram, Facebook, YouTube (governed by their own policies)</li>
          </ul>

          <p style={{marginTop: '1rem'}}>Sri Ayurveda Clinic is not responsible for third-party cookie practices. Please review the privacy policies of these external services to understand their data handling practices.</p>

          <h2 className="mb-4">6. Cookie Preference & Consent Management</h2>
          <p>When you first visit www.sriayurvedawellness.com, a Cookie Consent Banner will appear. You can:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Accept All:</strong> Enable both essential and non-essential cookies</li>
            <li><strong>Cookie Settings:</strong> Customize which cookie categories to enable</li>
            <li><strong>Reject Non-Essential:</strong> Accept only essential cookies (recommended for privacy)</li>
          </ul>

          <p style={{marginTop: '1rem'}}>You can change your cookie preferences at any time through the cookie settings in the website footer or browser controls.</p>

          <h2 className="mb-4">7. Managing Cookies in Your Browser</h2>
          <p>You can control, delete, or disable cookies through your web browser settings:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
            <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
            <li><strong>Edge:</strong> Settings → Privacy → Cookies and other site permissions</li>
          </ul>

          <p style={{marginTop: '1rem'}}><strong>Note:</strong> Disabling essential cookies may prevent the website from functioning properly, including appointment booking, cart functionality, and secure login.</p>

          <h2 className="mb-4">8. Local Storage & Session Storage</h2>
          <p>In addition to cookies, our website may use browser storage technologies:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li><strong>Local Storage:</strong> Stores user preferences, saved form data, and shopping cart information (persistent until manually cleared)</li>
            <li><strong>Session Storage:</strong> Temporarily stores data during your current browsing session (cleared when you close the browser)</li>
          </ul>

          <p style={{marginTop: '1rem'}}>You can clear these storage technologies from your browser settings along with cache and browsing history.</p>

          <h2 className="mb-4">9. Cookie Categories & Purposes</h2>
          
          <h3 className="mb-2">Essential Cookies (Always Enabled)</h3>
          <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '2rem'}}>
            <thead>
              <tr style={{backgroundColor: '#f3f4f6'}}>
                <th style={{border: '1px solid #d1d5db', padding: '0.75rem', textAlign: 'left'}}>Cookie Name</th>
                <th style={{border: '1px solid #d1d5db', padding: '0.75rem', textAlign: 'left'}}>Purpose</th>
                <th style={{border: '1px solid #d1d5db', padding: '0.75rem', textAlign: 'left'}}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>sessionid</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>User session authentication</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Session</td>
              </tr>
              <tr style={{backgroundColor: '#f9fafb'}}>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>cookie_consent</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Stores your cookie preference choice</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>1 year</td>
              </tr>
              <tr>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>cart</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Remembers items in shopping cart</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>30 days</td>
              </tr>
              <tr style={{backgroundColor: '#f9fafb'}}>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>csrf_token</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Security token to prevent CSRF attacks</td>
                <td style={{border: '1px solid #d1d5db', padding: '0.75rem'}}>Session</td>
              </tr>
            </tbody>
          </table>

          <h3 className="mb-2">Analytics Cookies (Consent Required)</h3>
          <p><strong>Note:</strong> These cookies are only set after you provide explicit consent through the Cookie Banner.</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Google Analytics cookies (if enabled): Track aggregated, non-health-sensitive visitor data</li>
            <li>Performance monitoring cookies: Monitor website speed and user experience</li>
          </ul>

          <h2 className="mb-4">10. Do Not Track (DNT)</h2>
          <p>If your browser has "Do Not Track" enabled, our website will respect this preference by limiting non-essential tracking and analytics cookies. However, essential cookies for website functionality may still be set.</p>

          <h2 className="mb-4">11. Data Security & DPDP Act Compliance</h2>
          <p>All cookies containing personal data (including health-related information) are managed in strict compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act). No sensitive health data is transmitted to third-party tracking services.</p>

          <h2 className="mb-4">12. Opt-Out Options</h2>
          <p>To opt out of non-essential cookies and tracking:</p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>Use the Cookie Consent Banner on the website and select "Reject Non-Essential" or "Cookie Settings"</li>
            <li>Clear cookies from your browser regularly</li>
            <li>Enable "Do Not Track" in your browser settings</li>
            <li>Use privacy-focused browser extensions or privacy modes</li>
          </ul>

          <h2 className="mb-4">13. Changes to Cookie Policy</h2>
          <p>We may update this Cookie Policy to reflect changes in technology, legal requirements, or our practices. Any material changes will be communicated through the website and a revised "Last Updated" date will be displayed.</p>

          <h2 className="mb-4">14. Contact & Questions</h2>
          <p>For questions about our cookie practices or to exercise your data rights, contact:</p>
          <div style={{padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '6px', marginTop: '1rem'}}>
            <p><strong>Email:</strong> sriayurveda23@gmail.com</p>
            <p><strong>Phone:</strong> +91-7619529616</p>
            <p><strong>Grievance Officer:</strong> Dr. Shreelakshmi.M.V, BAMS</p>
          </div>

          <div style={{marginTop: '2rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px'}}>
            <p><strong>Last Updated:</strong> 05.09.2026</p>
            <p style={{marginTop: '0.5rem', fontSize: '0.875rem'}}>Your privacy is important to us. Thank you for trusting Sri Ayurveda Clinic with your health and wellness journey.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
