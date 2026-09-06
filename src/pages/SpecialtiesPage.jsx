import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

const specialties = [
  ['Respiratory Conditions', 'Allergy, asthma, sinusitis, COPD, and related respiratory concerns.'],
  ['Gynecological Conditions', 'PCOS, PCOD, female infertility, irregular cycles, menopausal care, abdominal cramping, and hormonal imbalances.'],
  ['Dermatological Conditions & Skin Care', 'Acne, allergic skin disease, psoriasis, eczema, scabies, herbal facials, cleansers, foot massage, skin discoloration, hair care, and anti-ageing treatments.'],
  ['Management of Joint Disorders', 'Osteoarthritis, rheumatoid arthritis, cervical and lumbar spondylosis, cervical spondylitis, frozen shoulder, gout, and related concerns.'],
  ['Management of Gastro & Genito-Urinary Disorders', 'Liver disease, jaundice, hepatitis, gastritis, irritable bowel disease, and renal calculi (kidney stones).'],
  ['Management of Lifestyle Disorders', 'Diabetes mellitus, hypertension, obesity, hyperlipidemia, thyroid disease, stress, insomnia, irritable bowel syndrome, and depression.'],
  ['Management of Neurological Disorders', 'Personalized support for selected neurological disorders under qualified Ayurvedic supervision.'],
];

export default function SpecialtiesPage() {
  return (
    <div className="page-container specialties-page">
      <Seo
        title={SEO_CONFIG.pages.specialties.title}
        description={SEO_CONFIG.pages.specialties.description}
        keywords={SEO_CONFIG.pages.specialties.keywords}
        canonical={`${SEO_CONFIG.siteUrl}/specialties`}
        openGraph={{
          title: SEO_CONFIG.pages.specialties.title,
          description: SEO_CONFIG.pages.specialties.description,
          url: `${SEO_CONFIG.siteUrl}/specialties`,
          image: SEO_CONFIG.siteImage,
        }}
      />
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Our Specialties</h1>
          <p className="text-xl text-gray-700">Personalized Ayurvedic care for modern health concerns</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>
      <section className="treatment-specialties py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Kaya Chikitsa</h2>
            <p className="text-lg text-gray-700 leading-relaxed">At Sri Ayurveda, we address modern health issues with traditional Kaya Chikitsa (general medicine). While we treat most conditions, we are specialized in treating and managing:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map(([title, description]) => (
              <article key={title} className="treatment-specialty-card">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="treatment-personalized-care mt-10">
            <h2>Every patient is different, and so is their treatment.</h2>
            <p>At Sri Ayurveda, treatment is personalized according to each individual&apos;s condition, body constitution, lifestyle, and needs.</p>
            <p>Along with medicines and therapies, we strictly recommend lifestyle modifications and dietary guidelines, known as Pathya. These support the healing process, maintain balance, and promote long-term health.</p>
            <p>Our goal is not just to manage disease with medicines, but to help you achieve a healthier and more balanced life with minimal medication whenever appropriate.</p>
            <p>Because true healing begins with the right treatment and the right lifestyle.</p>
          </div>
        </div>
      </section>
    </div>
  );
}