import { Droplets, Wind, Activity, Sparkles, Shield } from 'lucide-react';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';

export default function Panchakarma() {
  const therapies = [
    { name: 'Vamana', description: 'Therapeutic emesis to eliminate toxins', icon: Wind },
    { name: 'Virechana', description: 'Purgation therapy for deep cleansing', icon: Droplets },
    { name: 'Basti', description: 'Medicated enema for colon health', icon: Activity },
    { name: 'Nasya', description: 'Nasal therapy for head and neck', icon: Sparkles },
    { name: 'Raktamokshana', description: 'Bloodletting for purification', icon: Shield },
  ];

  return (
    <section id="panchakarma" className="py-14 bg-gradient-to-br from-amber-50 via-white to-green-50">
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
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Panchakarma Treatment</h2>
          <p className="text-xl text-green-700 font-semibold mb-4">Detoxify, Rejuvenate, Rebalance</p>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Panchakarma is Ayurveda's signature detoxification and rejuvenation therapy. It involves a series of five therapeutic procedures designed to eliminate deep-rooted toxins from the body, restore dosha balance, and strengthen immunity.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Sri Ayurveda Clinic we offer personalized Panchakarma programs tailored to your unique Prakruti and health condition. Each session includes a combination of preparatory procedures (Purvakarma), main therapies like Vamana (emesis), Virechana (purgation), Basti (medicated enema), Nasya (nasal therapy), and Raktamokshana (bloodletting), followed by rejuvenation therapies (Rasayana).
            </p>

            <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-lg">
              <p className="text-lg text-gray-800 font-semibold">
                All therapies and treatments are carried out and administered under the guidance of Dr. Shreelakshmi, ensuring a safe, authentic, and healing experience.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapies.map((therapy, index) => {
            const Icon = therapy.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-green-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-3">{therapy.name}</h3>
                <p className="text-gray-700">{therapy.description}</p>
              </div>
            );
          })}

          <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-xl shadow-lg p-8 text-white hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-3">Personalized Programs</h3>
            <p className="mb-4">Customized Panchakarma treatment plans designed specifically for your unique constitution and health needs.</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-sm btn-primary"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
