import Gallery from '../pages/Gallery';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './GalleryPage.css';

export default function GalleryPage() {
  return (
    <div className="page-container">
      <Seo
        title={SEO_CONFIG.pages.gallery.title}
        description={SEO_CONFIG.pages.gallery.description}
        keywords={SEO_CONFIG.pages.gallery.keywords}
        canonical={`${SEO_CONFIG.siteUrl}/gallery`}
        openGraph={{
          title: SEO_CONFIG.pages.gallery.title,
          description: SEO_CONFIG.pages.gallery.description,
          url: `${SEO_CONFIG.siteUrl}/gallery`,
          image: SEO_CONFIG.siteImage,
        }}
      />
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="page-header__eyebrow">Sri Ayurveda Wellness</p>
          <h1 className="text-5xl font-bold text-white mb-4">Our Clinic & Treatments</h1>
          <p className="text-xl text-white">Experience the healing environment at Sri Ayurveda</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>
      <Gallery />
    </div>
  );
}
