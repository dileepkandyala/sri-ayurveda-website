import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './TreatmentsPage.css';

const products = [
  {
    name: 'Herbal Digestive Care Kit',
    price: '₹1,250',
    description: 'A curated blend of teas, powders, and guidance for gentle daily digestion support.',
  },
  {
    name: 'Ayurvedic Massage Oil',
    price: '₹950',
    description: 'Classic herbal oil crafted for soothing muscle relief and nourishing self-care.',
  },
  {
    name: 'Daily Wellness Bundle',
    price: '₹2,400',
    description: 'A balanced starter pack of wellness essentials, perfect for home rituals.',
  },
];

export default function Shop() {
  return (
    <div className="page-container">
      <Seo
        title={SEO_CONFIG.pages.shop?.title || 'Shop Ayurvedic Wellness Products | Sri Ayurveda'}
        description={SEO_CONFIG.pages.shop?.description || 'Explore Ayurvedic wellness products and daily care essentials from Sri Ayurveda.'}
        keywords={SEO_CONFIG.pages.shop?.keywords || 'Ayurvedic products, wellness shop, herbal care'}
        canonical={`${SEO_CONFIG.siteUrl}/shop`}
        openGraph={{
          title: SEO_CONFIG.pages.shop?.title || 'Shop Ayurvedic Wellness Products | Sri Ayurveda',
          description: SEO_CONFIG.pages.shop?.description || 'Explore Ayurvedic wellness products and daily care essentials from Sri Ayurveda.',
          url: `${SEO_CONFIG.siteUrl}/shop`,
          image: SEO_CONFIG.siteImage,
        }}
      />

      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Ayurvedic Shop</h1>
          <p className="text-xl text-gray-700">Discover healing essentials and daily wellness products inspired by Ayurveda.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="card">
              <h3 className="mb-3">{product.name}</h3>
              <p className="mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-green-800">{product.price}</span>
                <button className="btn btn-primary btn-sm">Buy now</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
