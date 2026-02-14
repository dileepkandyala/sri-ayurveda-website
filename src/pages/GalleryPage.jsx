import Gallery from '../pages/Gallery';
import './GalleryPage.css';

export default function GalleryPage() {
  return (
    <div className="page-container">
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">Our Clinic & Treatments</h1>
          <p className="text-xl text-gray-700">Experience the healing environment at Sri Ayurveda</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mt-4"></div>
        </div>
      </section>
      <Gallery />
    </div>
  );
}
