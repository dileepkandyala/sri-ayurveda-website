import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

const policyContent = {
  '/website-terms-of-use': {
    title: 'Website Terms of Use',
    description: 'Terms governing use of the Sri Ayurveda website.',
    intro: 'These terms explain how this website may be used and what visitors can expect from its content.',
    sections: [
      ['Acceptable use', 'Use this website lawfully and respectfully. Do not attempt to disrupt, scrape, misuse, or gain unauthorized access to the website or its systems.'],
      ['Website content', 'Website content is provided for general information and may change without notice. It does not create a doctor-patient relationship until a consultation is formally accepted.'],
      ['External services', 'Links to WhatsApp, social platforms, payment services, couriers, or other third parties are governed by their own terms and privacy policies.'],
      ['Contact', 'Questions about website use may be sent to sriayurveda23@gmail.com.'],
    ],
  },
  '/telemedicine-policy': {
    title: 'Telemedicine Policy',
    description: 'Telemedicine and online consultation policy for Sri Ayurveda Clinic.',
    intro: 'Online consultations are offered subject to practitioner availability, identity verification, consent, and applicable Indian requirements.',
    sections: [
      ['Scope', 'Teleconsultation is intended for appropriate non-emergency wellness and consultation needs. The practitioner may require an in-person visit or referral when online care is unsuitable.'],
      ['Consent and identity', 'Patients must provide accurate identity and health information, consent to online consultation terms, and use a private environment for the consultation.'],
      ['Limitations', 'Connectivity, device, privacy, and clinical limitations may affect an online consultation. Emergency symptoms require immediate local emergency care.'],
      ['Records and communication', 'Consultation records and follow-up communication are handled according to the Privacy Policy and applicable professional requirements.'],
    ],
  },
  '/cookie-policy': {
    title: 'Cookie Policy',
    description: 'Cookie and local-storage practices for the Sri Ayurveda website.',
    intro: 'This policy explains how the website uses essential storage and optional analytics preferences.',
    sections: [
      ['Essential storage', 'The site may use browser storage to remember your cookie-consent choice and support user-facing preferences such as a shopping cart.'],
      ['Analytics', 'Non-essential analytics should only be enabled after consent. You can clear browser storage or withdraw consent through your browser settings.'],
      ['Third parties', 'Embedded or linked services such as WhatsApp, Google, social media, and hosting providers may use their own technologies under their own policies.'],
      ['Questions', 'For privacy questions, contact sriayurveda23@gmail.com.'],
    ],
  },
  '/data-retention-security-policy': {
    title: 'Data Retention & Security Policy',
    description: 'Data retention and security practices for Sri Ayurveda Clinic.',
    intro: 'We retain personal information only as long as needed for the stated purpose, legal obligations, care continuity, or dispute handling.',
    sections: [
      ['Access control', 'Patient and customer information is restricted to authorized personnel who need it for care, support, administration, or legal compliance.'],
      ['Retention', 'Retention periods should be set by the clinic’s legal and clinical record requirements. Data no longer required should be securely deleted or anonymized.'],
      ['Security incidents', 'Suspected unauthorized access or disclosure should be reported internally immediately and handled under the clinic incident-response procedure.'],
      ['Requests', 'To request access, correction, or deletion where applicable, contact the clinic using the details in the Privacy Policy.'],
    ],
  },
  '/patient-rights-responsibilities': {
    title: 'Patient Rights & Responsibilities',
    description: 'Patient rights and responsibilities at Sri Ayurveda Clinic.',
    intro: 'Our patients deserve respectful, understandable, privacy-conscious care and also have responsibilities that support safe treatment.',
    sections: [
      ['Patient rights', 'Patients may ask questions, receive understandable information, provide or withdraw consent where applicable, request privacy, and raise concerns without retaliation.'],
      ['Patient responsibilities', 'Patients should provide accurate health information, follow agreed instructions, disclose medicines and allergies, arrive on time, and treat staff respectfully.'],
      ['Shared decisions', 'Care decisions should be discussed with the practitioner. Patients may ask about alternatives, expected benefits, limitations, and follow-up.'],
      ['Complaints', 'Concerns may be raised through the Grievance Redressal page or by contacting the clinic directly.'],
    ],
  },
  '/patient-confidentiality-policy': {
    title: 'Patient Confidentiality Policy',
    description: 'Patient confidentiality policy for Sri Ayurveda Clinic.',
    intro: 'Patient information is confidential and is not publicly displayed or shared for marketing without an appropriate lawful basis and documented consent.',
    sections: [
      ['Confidential information', 'Health history, contact details, appointment information, consultation notes, messages, and order details are treated as confidential information.'],
      ['Permitted access', 'Access is limited to authorized staff and service providers who require it for care, operations, safety, or legal compliance.'],
      ['Images and testimonials', 'Patient photographs, testimonials, or identifying stories must not be published without written consent that explains the intended use.'],
      ['Reporting concerns', 'Report suspected disclosure or misuse to the clinic promptly at sriayurveda23@gmail.com.'],
    ],
  },
  '/emergency-clinical-limitations': {
    title: 'Emergency & Clinical Limitations',
    description: 'Emergency and clinical limitation notice for Sri Ayurveda Clinic.',
    intro: 'Sri Ayurveda services and website communications are not emergency medical services.',
    sections: [
      ['Emergencies', 'For severe, sudden, or life-threatening symptoms, contact local emergency services or attend the nearest emergency department immediately.'],
      ['Clinical limitations', 'Online messages, website information, and wellness content may not contain enough information for diagnosis or urgent clinical decisions.'],
      ['Escalation', 'The clinic may recommend in-person evaluation, another healthcare professional, or emergency care when appropriate.'],
      ['No delay', 'Do not delay emergency care while waiting for a response from the clinic or website.'],
    ],
  },
  '/ai-chatbot-disclaimer': {
    title: 'AI Usage & Chatbot Disclaimer',
    description: 'AI and chatbot disclaimer for Sri Ayurveda digital interactions.',
    intro: 'Any AI-assisted website or chat feature is an information tool and is not a doctor, emergency service, or substitute for clinical judgment.',
    sections: [
      ['No diagnosis', 'AI-generated responses must not be relied on to diagnose, prescribe, or make urgent healthcare decisions.'],
      ['Privacy', 'Do not submit unnecessary sensitive health information to an AI tool. The clinic should configure approved providers and safeguards before enabling AI interactions.'],
      ['Human review', 'Where an AI tool is used, important care or service decisions must be reviewed by an authorized human professional.'],
      ['Emergencies', 'Use local emergency services for urgent symptoms rather than an AI or website chat.'],
    ],
  },
  '/refund-cancellation-policy': {
    title: 'Refund & Cancellation Policy',
    description: 'Refund and appointment cancellation policy for Sri Ayurveda Clinic.',
    intro: 'Please review these terms before cancelling an appointment or requesting a refund.',
    sections: [
      ['Appointments', 'Appointment requests are subject to confirmation by the clinic. Please contact us as early as possible if you need to reschedule or cancel.'],
      ['Cancellations', 'Cancellations made before the confirmed appointment time may be rescheduled subject to availability. Late cancellations and missed appointments may not be eligible for a refund.'],
      ['Product orders', 'Product orders are confirmed through WhatsApp. Any refund or replacement request will be reviewed based on product condition, delivery status, and applicable law.'],
      ['Contact', 'For cancellation or refund support, contact us at sriayurveda23@gmail.com or +919187398489.'],
    ],
  },
  '/shipping-delivery-policy': {
    title: 'Shipping & Delivery Policy',
    description: 'Shipping and delivery information for Sri Ayurveda wellness products.',
    intro: 'Product availability, delivery timing, and final shipping charges are confirmed before payment.',
    sections: [
      ['Order confirmation', 'Orders are reviewed and confirmed through WhatsApp before payment or dispatch.'],
      ['Delivery', 'Delivery timelines depend on destination, courier availability, and product stock. The clinic will share available delivery details during order confirmation.'],
      ['Address accuracy', 'Customers are responsible for providing a complete and accurate delivery address and reachable phone number.'],
      ['Support', 'For delivery questions, contact us at sriayurveda23@gmail.com or +919187398489.'],
    ],
  },
  '/disclaimer-policy': {
    title: 'Disclaimer Policy',
    description: 'Medical and wellness disclaimer for Sri Ayurveda Clinic.',
    intro: 'Information on this website is provided for general wellness education and does not replace professional medical advice.',
    sections: [
      ['Not emergency care', 'This website and its services are not a substitute for emergency care, diagnosis, or treatment from a qualified medical professional.'],
      ['Individual results', 'Ayurvedic guidance and product experiences vary by person. Consult a qualified practitioner before beginning a new treatment, supplement, or exercise routine.'],
      ['Product information', 'Product information is educational and should be reviewed with the clinic team if you have allergies, medical conditions, or take medication.'],
      ['Accuracy', 'We work to keep information current, but do not guarantee that every website statement is complete or suitable for every individual.'],
    ],
  },
  '/grievance-redressal': {
    title: 'Grievance Redressal',
    description: 'Grievance redressal contact for Sri Ayurveda Clinic.',
    intro: 'We welcome concerns about our services, privacy practices, orders, or website experience.',
    sections: [
      ['How to contact us', 'Send your concern with your name, contact details, and relevant order or appointment information to sriayurveda23@gmail.com.'],
      ['Review process', 'We will acknowledge your concern and review it with the appropriate clinic representative. Please do not send unnecessary medical information by email.'],
      ['Response', 'We aim to respond within a reasonable period based on the nature and complexity of the concern.'],
      ['Phone support', 'You can also contact the clinic at +919187398489 during working hours.'],
    ],
  },
};

export default function CommercePolicies({ path }) {
  const policy = policyContent[path] || policyContent['/disclaimer-policy'];

  return (
    <div className="page-container">
      <Seo
        title={`${policy.title} | Sri Ayurveda`}
        description={policy.description}
        keywords={`${policy.title}, Sri Ayurveda Clinic`}
        canonical={`${SEO_CONFIG.siteUrl}${path}`}
        openGraph={{ title: `${policy.title} | Sri Ayurveda`, description: policy.description, url: `${SEO_CONFIG.siteUrl}${path}`, image: SEO_CONFIG.siteImage }}
      />
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">{policy.title}</h1>
          <p className="text-xl text-gray-700">{policy.intro}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>
      <section className="py-8">
        <div className="card">
          {policy.sections.map(([heading, text]) => (
            <div key={heading}>
              <h2 className="mb-4">{heading}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
