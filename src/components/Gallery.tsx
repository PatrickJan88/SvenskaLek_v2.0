import React, { useState } from 'react';
import { galleryImages } from '../data/galleryData';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'food' | 'restaurant' | 'team'>('all');
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (id: number) => {
    setActiveImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-amber-800">
            Take a visual journey through our restaurant, delicious dishes, and the team behind the magic.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-amber-100 rounded-full p-1">
            <button 
              className={`px-4 py-2 rounded-full transition-all text-sm ${
                filter === 'all' ? 'bg-amber-600 text-white' : 'hover:bg-amber-200 text-amber-900'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-all text-sm ${
                filter === 'food' ? 'bg-amber-600 text-white' : 'hover:bg-amber-200 text-amber-900'
              }`}
              onClick={() => setFilter('food')}
            >
              Food
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-all text-sm ${
                filter === 'restaurant' ? 'bg-amber-600 text-white' : 'hover:bg-amber-200 text-amber-900'
              }`}
              onClick={() => setFilter('restaurant')}
            >
              Restaurant
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-all text-sm ${
                filter === 'team' ? 'bg-amber-600 text-white' : 'hover:bg-amber-200 text-amber-900'
              }`}
              onClick={() => setFilter('team')}
            >
              Our Team
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              onClick={() => openLightbox(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110" 
              />
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {activeImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-amber-600 hover:bg-amber-700 rounded-full p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages.find(img => img.id === activeImage)?.src} 
                alt={galleryImages.find(img => img.id === activeImage)?.alt}
                className="w-full max-h-[80vh] object-contain" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;