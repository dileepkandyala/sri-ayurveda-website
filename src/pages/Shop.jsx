import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import { useCart } from '../lib/cart';
import './TreatmentsPage.css';

const products = [
  {
    name: 'Facial Kit',
    price: '₹700',
    amount: 700,
    description: 'A nourishing Ayurvedic skincare set for a simple, calming facial care ritual at home.',
  },
  {
    name: 'Pottali with Oil',
    price: '₹1,000',
    amount: 1000,
    description: 'A traditional herbal bundle with nourishing oil to support soothing, restorative self-care.',
  },
  {
    name: 'Massage Oil (200 ml)',
    price: '₹300',
    amount: 300,
    description: 'A soothing Ayurvedic oil for relaxing massages and everyday body nourishment. Each bottle contains 200 ml.',
  },
  {
    name: 'Swarnabindu Prashana (15 ml bottle)',
    price: '₹1,700',
    amount: 1700,
    description: 'A traditional Ayurvedic wellness preparation offered in a convenient 15 ml bottle for regular use.',
  },
];

export default function Shop() {
  const { addItem, items } = useCart();

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
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => addItem(product)}
                >
                  {items.some((item) => item.name === product.name) ? 'Add another' : 'Add to cart'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
