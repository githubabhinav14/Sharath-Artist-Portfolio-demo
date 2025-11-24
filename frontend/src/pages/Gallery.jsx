import React, { useState } from 'react';
import { galleryCategories, artworks } from '../data/mockData';
import Lightbox from '../components/Lightbox';
import { Grid, List } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredArtworks =
    selectedCategory === 'all'
      ? artworks
      : artworks.filter((work) => work.category === selectedCategory);

  const openLightbox = (artwork, index) => {
    setSelectedArtwork(artwork);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedArtwork(filteredArtworks[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedArtwork(filteredArtworks[newIndex]);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-96 flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1740598307395-3ccc0ec28a28"
            alt="Gallery"
            className="w-full h-full object-cover opacity-40 transform scale-110"
            style={{ transform: 'translateY(0px)' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Art Gallery</h1>
          <p className="text-xl text-amber-400 mb-6">Explore the complete collection</p>
          <div className="flex justify-center space-x-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-bold text-amber-400">{artworks.length}</span> Total Works
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-bold text-amber-400">{galleryCategories.length}</span> Categories
            </div>
          </div>
        </div>
      </section>

      {/* Filter & View Controls */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Works ({artworks.length})
              </button>
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.title} ({category.count})
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
                aria-label="Grid view"
              >
                <Grid size={20} className={viewMode === 'grid' ? 'text-amber-500' : 'text-gray-600'} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
                aria-label="List view"
              >
                <List size={20} className={viewMode === 'list' ? 'text-amber-500' : 'text-gray-600'} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  onClick={() => openLightbox(artwork, index)}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{artwork.title}</h3>
                      <p className="text-sm text-gray-300">{artwork.year} • {artwork.medium}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-6">
              {filteredArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  onClick={() => openLightbox(artwork, index)}
                  className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full sm:w-64 h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                      {artwork.title}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p><span className="font-semibold">Year:</span> {artwork.year}</p>
                      <p><span className="font-semibold">Medium:</span> {artwork.medium}</p>
                      <p><span className="font-semibold">Size:</span> {artwork.size}</p>
                      <p className="capitalize"><span className="font-semibold">Category:</span> {artwork.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredArtworks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No artworks found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedArtwork && (
        <Lightbox
          artwork={selectedArtwork}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
          hasPrevious={currentIndex > 0}
          hasNext={currentIndex < filteredArtworks.length - 1}
        />
      )}
    </div>
  );
};

export default Gallery;