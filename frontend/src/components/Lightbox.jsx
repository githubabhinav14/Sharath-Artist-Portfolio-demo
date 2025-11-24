import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ artwork, onClose, onPrevious, onNext, hasPrevious, hasNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrevious) onPrevious();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrevious, onNext, hasPrevious, hasNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors duration-200 p-2"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      {/* Previous Button */}
      {hasPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-4 text-white hover:text-amber-400 transition-colors duration-200 p-2"
          aria-label="Previous"
        >
          <ChevronLeft size={48} />
        </button>
      )}

      {/* Next Button */}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 text-white hover:text-amber-400 transition-colors duration-200 p-2"
          aria-label="Next"
        >
          <ChevronRight size={48} />
        </button>
      )}

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Details */}
          <div className="text-white space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-400">{artwork.title}</h2>
            <div className="space-y-2 text-gray-300">
              <p className="text-lg">
                <span className="font-semibold text-white">Year:</span> {artwork.year}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-white">Medium:</span> {artwork.medium}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-white">Size:</span> {artwork.size}
              </p>
              <p className="text-lg capitalize">
                <span className="font-semibold text-white">Category:</span> {artwork.category}
              </p>
            </div>
            {artwork.description && (
              <p className="text-gray-400 leading-relaxed pt-4">{artwork.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;