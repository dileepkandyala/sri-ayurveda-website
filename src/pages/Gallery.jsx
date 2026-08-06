import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import img1 from '../images/IMG_1858.jpg';
import img2 from '../images/IMG_1859.jpg';
import img3 from '../images/IMG_1860.jpg';
import img4 from '../images/IMG_1861.jpg';
import img5 from '../images/IMG_0485.jpg';
import img6 from '../images/SreeLakshmi.jpg';
import img7 from '../images/IMG_1863.jpg';
import ayurvedicImg from '../images/ayurvedic.jpg';
import video1 from '../images/WhatsApp Video 2026-07-03 at 12.37.52 PM.mp4';
import video2 from '../images/WhatsApp Video 2026-07-03 at 12.37.53 PM.mp4';
import video3 from '../images/WhatsApp Video 2026-07-03 at 12.37.53 PM (1).mp4';
import video4 from '../images/WhatsApp Video 2026-07-03 at 12.38.19 PM.mp4';
import video5 from '../images/WhatsApp Video 2026-07-03 at 12.38.53 PM.mp4';
import './Gallery.css';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    { type: 'image', src: img1, alt: 'Clinic Interior - Treatment Room', category: 'Clinic' },
    { type: 'image', src: img2, alt: 'Wellness Treatment Session', category: 'Treatment' },
    { type: 'image', src: img3, alt: 'Professional Setup', category: 'Facility' },
    { type: 'image', src: img4, alt: 'Healing Ambiance', category: 'Treatment' },
    { type: 'image', src: ayurvedicImg, alt: 'Ayurvedic Remedies', category: 'Remedies' },
    { type: 'image', src: img5, alt: 'Ayurvedic Therapy Setup', category: 'Clinic' },
    { type: 'image', src: img6, alt: 'Care and Comfort Environment', category: 'Environment' },
    { type: 'image', src: img7, alt: 'Certificate / Therapy Documentation', category: 'Certification' },
    { type: 'video', src: video1, alt: 'Treatment Video 1', category: 'Video' },
    { type: 'video', src: video2, alt: 'Treatment Video 2', category: 'Video' },
    { type: 'video', src: video3, alt: 'Treatment Video 3', category: 'Video' },
    { type: 'video', src: video4, alt: 'Treatment Video 4', category: 'Video' },
    { type: 'video', src: video5, alt: 'Treatment Video 5', category: 'Video' },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const handleItemClick = (index) => {
    setCurrentIndex(index);
    setSelectedItem(galleryItems[index]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-14 bg-gradient-to-br from-green-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700 font-semibold mb-3">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">The Healing Experience</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">A closer look at the atmosphere, therapies, and care that define Sri Ayurveda.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="gallery-masonry mb-8">
          {galleryItems.map((item, index) => {
            const spanClass = index % 5 === 0 ? 'gallery-card--wide' : index % 3 === 0 ? 'gallery-card--tall' : '';
            return (
              <div key={`${item.type}-${index}`} className={`gallery-card ${spanClass}`} onClick={() => handleItemClick(index)}>
                <div className="gallery-card__media">
                  {item.type === 'video' ? (
                    <video src={item.src} controls preload="metadata" />
                  ) : (
                    <img src={item.src} alt={item.alt} />
                  )}
                </div>
                <div className="gallery-card__content">
                  <p className="gallery-card__category">{item.category}</p>
                  <h3>{item.alt}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal/Lightbox */}
        {selectedItem && (
          <div className="lightbox-overlay" onClick={() => setSelectedItem(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-close"
                onClick={() => setSelectedItem(null)}
                aria-label="Close gallery"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                className="lightbox-nav lightbox-prev"
                onClick={handlePrevious}
                aria-label="Previous item"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {selectedItem.type === 'video' ? (
                <video src={selectedItem.src} controls autoPlay className="lightbox-image" />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="lightbox-image"
                />
              )}

              <button
                className="lightbox-nav lightbox-next"
                onClick={handleNext}
                aria-label="Next item"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="lightbox-info">
                <p className="text-lg font-semibold text-white">{selectedItem.alt}</p>
                <p className="text-sm text-gray-300">
                  {currentIndex + 1} / {galleryItems.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Certification Section */}
        <div className="mt-14 pt-10 border-t-2 border-green-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Certification</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto"></div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-md">
              <img 
                src={img7} 
                alt="Ayurvedic Therapy" 
                className="lightbox-image w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
