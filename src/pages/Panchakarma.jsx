import { Droplets, Wind, Activity, FlaskConical, Shield } from 'lucide-react';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './Panchakarma.css';

export default function Panchakarma() {
  const therapies = [
    {
      name: 'Vamana',
      subtitle: 'Therapeutic Emesis',
      icon: Wind,
      description: 'A medically supervised procedure in which therapeutic emesis is induced after appropriate preparation. It is traditionally considered for selected Kapha-dominant presentations, including recurrent congestion and certain respiratory, allergic, or skin concerns.',
    },
    {
      name: 'Virechana',
      subtitle: 'Therapeutic Purgation',
      icon: Droplets,
      description: 'A controlled therapeutic purgation using individually selected Ayurvedic medicines. It is traditionally associated with selected Pitta-related, digestive, skin, liver, and metabolic concerns after a practitioner assessment.',
    },
    {
      name: 'Basti',
      subtitle: 'Medicated Enema Therapy',
      icon: Activity,
      description: 'A therapy using specially prepared Ayurvedic medicines through the rectal route. Classical Ayurveda considers Basti important in Vata management; protocols are selected for individual needs such as joint discomfort, stiffness, mobility concerns, and selected chronic conditions.',
    },
    {
      name: 'Nasya',
      subtitle: 'Nasal Medication',
      icon: FlaskConical,
      description: 'Appropriately selected oils or herbal preparations are administered through the nasal passages after assessment and preparation. It is traditionally considered for selected head, neck, nasal, sinus, and ENT-related concerns.',
    },
    {
      name: 'Raktamokshana',
      subtitle: 'Bloodletting Therapy',
      icon: Shield,
      description: 'A classical Shodhana procedure traditionally considered for selected conditions associated with vitiated Rakta and Pitta. Methods such as Jalaukavacharana are chosen only after careful selection and performed with appropriate safety and hygiene protocols.',
    },
  ];

  return (
    <section id="panchakarma" className="panchakarma-page py-14">
      <Seo
        title={SEO_CONFIG.pages.panchakarma.title}
        description={SEO_CONFIG.pages.panchakarma.description}
        keywords={SEO_CONFIG.pages.panchakarma.keywords}
        canonical={`${SEO_CONFIG.siteUrl}/panchakarma`}
        openGraph={{
          title: SEO_CONFIG.pages.panchakarma.title,
          description: SEO_CONFIG.pages.panchakarma.description,
          url: `${SEO_CONFIG.siteUrl}/panchakarma`,
          image: SEO_CONFIG.siteImage,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="panchakarma-heading text-center mb-10">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Panchakarma Therapies</h1>
          <p className="text-xl text-green-700 font-semibold mb-4">Individualized classical Ayurvedic care</p>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
        </div>

        <div className="panchakarma-intro max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Panchakarma is a group of classical Ayurvedic Shodhana procedures traditionally used for therapeutic cleansing. The appropriate procedure is selected only after assessing an individual&apos;s Prakriti, Vikriti, Agni, strength, age, season, and health condition.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Sri Ayurveda Clinic, Panchakarma is individualized after professional assessment rather than delivered through a one-size-fits-all protocol. All procedures require suitable preparation, clinical judgment, and qualified supervision.
          </p>
        </div>

        <div className="panchakarma-therapy-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapies.map((therapy) => {
            const Icon = therapy.icon;
            return (
              <article key={therapy.name} className="panchakarma-therapy-card">
                <div className="panchakarma-therapy-icon">
                  <Icon className="h-8 w-8 text-green-700" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 mb-2">{therapy.subtitle}</p>
                <h2 className="text-2xl font-bold text-green-900 mb-3">{therapy.name}</h2>
                <p className="text-gray-700 leading-relaxed">{therapy.description}</p>
              </article>
            );
          })}
        </div>

        <div className="panchakarma-care-grid grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          <article className="panchakarma-care-card panchakarma-care-card--preparation">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Purvakarma: Preparation</h2>
            <p className="text-gray-700 leading-relaxed">Before a selected Shodhana procedure, preparation may include Snehapana (medicated ghee or oil), Abhyanga (therapeutic oil massage), and Swedana (therapeutic sudation or steam). These measures are prescribed according to individual suitability.</p>
          </article>
          <article className="panchakarma-care-card panchakarma-care-card--aftercare">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Paschatkarma: Aftercare</h2>
            <p className="text-gray-700 leading-relaxed">Aftercare includes individualized dietary and lifestyle guidance. A gradual return to the regular diet, known as Samsarjana Krama when indicated, may be advised depending on the procedure and the patient&apos;s needs.</p>
          </article>
        </div>

        <div className="panchakarma-cta max-w-4xl mx-auto mt-12 text-center">
          <h2 className="panchakarma-cta-title text-2xl font-bold mb-3">Care guided by assessment</h2>
          <p className="panchakarma-cta-copy leading-relaxed mb-6">Panchakarma procedures should be performed only under the supervision of a qualified Ayurvedic physician. Book a consultation to discuss whether a personalised program is appropriate for you.</p>
          <a href="/contact#contact" className="btn btn-primary">Book a Consultation</a>
        </div>
      </div>
    </section>
  );
}
