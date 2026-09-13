import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import img1 from '../images/IMG_1858.jpg';
import img2 from '../images/IMG_1859.jpg';
import img3 from '../images/IMG_1860.jpg';
import img4 from '../images/IMG_1861.jpg';
import img5 from '../images/IMG_1863.jpg';
import img6 from '../images/IMG_0485.jpg';
import img7 from '../images/SreeLakshmi.jpg';
import img8 from '../images/treatment room.jpg';
import img9 from '../images/janu basti.jpg';
import img10 from '../images/kati basti.jpg';
import img11 from '../images/nasya.jpg';
import img12 from '../images/shirobasti.jpg';
import img13 from '../images/abhyanga.jpg';
import img14 from '../images/yoga hd.jpg';
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
    { type: 'image', src: img1, alt: 'Personalized Ayurvedic consultation', category: 'Consultation' },
    { type: 'image', src: img2, alt: 'Therapy session in progress', category: 'Treatment' },
    { type: 'image', src: img3, alt: 'Healing ambience in the clinic', category: 'Facility' },
    { type: 'image', src: img4, alt: 'Therapeutic treatment setup', category: 'Treatment' },
    { type: 'image', src: img6, alt: 'Wellness therapy setup', category: 'Clinic' },
    { type: 'image', src: img7, alt: 'Doctor consultation and guidance', category: 'Doctor' },
    { type: 'image', src: img8, alt: 'Treatment room and wellness atmosphere', category: 'Facility' },
    { type: 'image', src: img9, alt: 'Janu Basti therapy', category: 'Therapy' },
    { type: 'image', src: img10, alt: 'Kati Basti therapy', category: 'Therapy' },
    { type: 'image', src: img11, alt: 'Nasya therapy', category: 'Therapy' },
    { type: 'image', src: img12, alt: 'Shiro Basti therapy', category: 'Therapy' },
    { type: 'image', src: img13, alt: 'Abhyanga therapy', category: 'Therapy' },
    { type: 'image', src: img14, alt: 'Yoga and wellness practice', category: 'Wellness' },
    { type: 'image', src: ayurvedicImg, alt: 'Ayurvedic remedies and herbal care', category: 'Remedies' },
    { type: 'video', src: video1, alt: 'Treatment video 1', category: 'Video' },
    { type: 'video', src: video2, alt: 'Treatment video 2', category: 'Video' },
    { type: 'video', src: video3, alt: 'Treatment video 3', category: 'Video' },
    { type: 'video', src: video4, alt: 'Treatment video 4', category: 'Video' },
    { type: 'video', src: video5, alt: 'Treatment video 5', category: 'Video' },
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
    <section id="gallery" className="gallery-section py-16 bg-gradient-to-br from-green-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700 font-semibold mb-3">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">The Healing Experience</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">A closer look at the atmosphere, therapies, and care that define Sri Ayurveda.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="gallery-masonry mb-10">
          {galleryItems.map((item, index) => {
            const spanClass = index === 0 ? 'gallery-card--feature' : index === 1 || index === 5 ? 'gallery-card--tall' : index === 8 ? 'gallery-card--wide' : '';
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

      </div>
    </section>
  );
};

export default Gallery;
