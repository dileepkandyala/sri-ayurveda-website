import { GraduationCap, Heart, User } from 'lucide-react';
import sreeLakshmiImg from '../images/SreeLakshmi.jpg';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './About.css';

export default function About() {
  return (
    <section id="about" className="py-14 bg-white">
      <Seo
        title={SEO_CONFIG.pages.about.title}
        description={SEO_CONFIG.pages.about.description}
        keywords={SEO_CONFIG.pages.about.keywords}
        canonical={`${SEO_CONFIG.siteUrl}/about`}
        openGraph={{
          title: SEO_CONFIG.pages.about.title,
          description: SEO_CONFIG.pages.about.description,
          url: `${SEO_CONFIG.siteUrl}/about`,
          image: SEO_CONFIG.siteImage,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative mb-20">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl mb-20">
              <img src={sreeLakshmiImg} alt="Dr. Shreelakshmi" className="w-full h-full object-cover" />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 bg-green-700 text-white p-6 rounded-lg shadow-lg">
              <p className="text-xl font-bold">Dr. Shreelakshmi M.V.</p>
              <p className="text-sm">BAMS, Certified Yoga Professional</p>
            </div> */}
          </div>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              I am <span className="font-semibold text-green-900">Dr. Shreelakshmi M.V., BAMS</span> (Bachelor of Ayurveda Medicine and Surgery), an RGUHS board certified Ayurvedic doctor, practicing in Ramanagara, Karnataka, India.
            </p>

            <p>
              I completed my bachelors at Indian Institute of Ayurveda Medicine and Research College, Bengaluru in 2022, during which I received extensive hands-on training from experienced doctors and professors. With an aim to help our patients overcome their medical limitations, restore their former health and well-being, and experience the holistic benefits of Ayurveda, I founded Sri Ayurveda in 2023 and opened our clinic in Ramanagara.
            </p>

            <p>
              As a strong believer in the timeless wisdom of ancient Ayurveda and its remarkable contributions to human well-being, I chose my profession as an Ayurvedic doctor to devote my skills, knowledge and time solely in patient care. Alongside Ayurveda, I am a trained and certified Yoga practitioner, conducting sessions for patients, seekers, and children—teaching not just yoga, but also holistic lifestyle habits inspired by the Bhagavad Gita and spirituality.
            </p>

            <p>
              I am deeply passionate about physical, mental, emotional, and spiritual wellness. Through my practice, I aim to create awareness about the balance and interconnectedness within our bodies and lives. I warmly welcome you to visit our clinic and join us on this journey toward lasting health.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg text-center">
            <GraduationCap className="h-12 w-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Education</h3>
            <p className="text-gray-700">BAMS Graduate from Indian Institute of Ayurveda Medicine and Research College, Bengaluru (2022)</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg text-center">
            <Heart className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Holistic Approach</h3>
            <p className="text-gray-700">Certified Yoga Professional teaching holistic lifestyle habits inspired by ancient wisdom</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg text-center">
            <User className="h-12 w-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Patient-Centered</h3>
            <p className="text-gray-700">Dedicated to addressing root causes and creating personalized wellness journeys</p>
          </div>
        </div>
      </div>
    </section>
  );
}
