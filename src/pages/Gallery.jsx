import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import img1 from '../images/IMG_1858.jpg';
import img2 from '../images/IMG_1859.jpg';
import img3 from '../images/IMG_1860.jpg';
import img4 from '../images/IMG_1861.jpg';
import ayurvedicImg from '../images/ayurvedic.jpg';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: img1, alt: 'Clinic Interior - Treatment Room', category: 'Clinic' },
    { src: img2, alt: 'Wellness Treatment Session', category: 'Treatment' },
    { src: img3, alt: 'Professional Setup', category: 'Facility' },
    { src: img4, alt: 'Healing Ambiance', category: 'Treatment' },
    { src: ayurvedicImg, alt: 'Ayurvedic Remedies', category: 'Remedies' },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#2f8b57' }}>Our Clinic & Treatments</h2>
          <p className="text-xl text-gray-700">Experience the healing environment at Sri Ayurveda</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto mt-4"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col gap-4 mx-2">
              <h3 className="text-lg font-semibold text-green-900 mb-2">{image.alt}</h3>
              <div
                onClick={() => handleImageClick(index)}
                className="gallery-item group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 mx-1"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold">{image.category}</p>
                    <p className="text-xs text-gray-200">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Lightbox */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close gallery"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                className="lightbox-nav lightbox-prev"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="lightbox-image"
              />

              <button
                className="lightbox-nav lightbox-next"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="lightbox-info">
                <p className="text-lg font-semibold text-white">{selectedImage.alt}</p>
                <p className="text-sm text-gray-300">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Certification Section */}
        <div className="mt-20 pt-16 border-t-2 border-green-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Certification</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto"></div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-md">
              <img 
                src="/src/images/IMG_1863.jpg" 
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
