import FeaturedTreatments from '../pages/FeaturedTreatments';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

export default function TreatmentsPage() {
  return (
    <div className="page-container">
      <Seo
        title={SEO_CONFIG.pages.treatments.title}
        description={SEO_CONFIG.pages.treatments.description}
        keywords={SEO_CONFIG.pages.treatments.keywords}
        canonical={`${SEO_CONFIG.siteUrl}/treatments`}
        openGraph={{
          title: SEO_CONFIG.pages.treatments.title,
          description: SEO_CONFIG.pages.treatments.description,
          url: `${SEO_CONFIG.siteUrl}/treatments`,
          image: SEO_CONFIG.siteImage,
        }}
      />
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Our Treatments</h1>
          <p className="text-xl text-gray-700">Discover our most popular and effective therapies</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>
      <FeaturedTreatments />
    </div>
  );
}
