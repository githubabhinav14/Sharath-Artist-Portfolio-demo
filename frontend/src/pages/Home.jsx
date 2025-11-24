import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Award, Newspaper } from 'lucide-react';
import { artistInfo, featuredWorks, testimonials, timeline, awards, galleryCategories, artworks } from '../data/mockData';
import { Calendar, MapPin, Trophy, Star, Calendar as CalendarIcon, Filter, Grid, List, Medal } from 'lucide-react';
import Lightbox from '../components/Lightbox';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredWorks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter((work) => work.category === selectedCategory);

  const years = ['all', ...new Set(awards.map(a => a.year))].sort().reverse();
  const filteredAwards = selectedYear === 'all'
    ? awards
    : awards.filter(a => a.year === selectedYear);

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
    <div className="bg-white">
      {/* Hero Section - Original Home Page Hero */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {featuredWorks.map((work, index) => (
            <div
              key={work.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {artistInfo.name}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-amber-400 font-light">
              {artistInfo.tagline}
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
              {artistInfo.shortBio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                View Gallery
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {featuredWorks.map((work, index) => (
            <button
              key={`slide-${index}`}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
            </button>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">About the Artist</h2>
            <p className="text-2xl text-amber-600 font-medium">Creative Visionary & Art Director</p>
          </div>
          
          {/* Professional Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25"></div>
                <img
                  src="https://images.unsplash.com/photo-1716934893244-450310a6ab29"
                  alt="Sharath Nallanagula - Art Director"
                  className="relative w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Professional Details */}
            <div className="lg:order-1 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Sharath Nallanagula</h2>
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-1 w-20 rounded-full mb-6"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Freelance Art Director, Conceptual Visualizer with Creative Designing Skills
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Working in an Innovative, Challenging environment with State-of-the-art technologies that enhance my versatile skills. Experience in multiple Projects since 26 Years in Printing, Canvas painting, Model miniature making, Building Elevation & Interior Designing, Crafting, Sculpting etc.
                </p>
                
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <p className="text-lg text-gray-800 italic font-medium">
                    "Combination of Colors, Shapes & words will define your Brands. Need to make a lasting Impression."
                  </p>
                  <p className="text-right text-amber-700 mt-3 font-semibold">- Sharath Nallanagula</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <MapPin className="text-amber-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Based in</p>
                  <p className="text-gray-600">{artistInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Highlights */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Portfolio Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Corporate Identity & Branding */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                  <Palette className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Corporate Identity & Branding</h4>
                <p className="text-gray-600">Creating unique brand identities that resonate with target audiences</p>
              </div>

              {/* Packaging Design Excellence */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Packaging Design Excellence</h4>
                <p className="text-gray-600">Innovative packaging solutions that stand out on shelves</p>
              </div>

              {/* Logo Design Mastery */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                  <Star className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Logo Design Mastery</h4>
                <p className="text-gray-600">Memorable logos that capture brand essence perfectly</p>
              </div>

              {/* Architectural Visualization */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                  <Trophy className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Architectural Visualization</h4>
                <p className="text-gray-600">Stunning architectural designs and interior concepts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIST STATEMENT */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Creative Philosophy</h2>
            <p className="text-xl text-gray-600">Art Director's Vision & Approach</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg blur opacity-20"></div>
            <div className="relative bg-white p-10 lg:p-16 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Palette className="text-white" size={32} />
                  </div>
                </div>
                
                <p className="text-2xl text-gray-700 leading-relaxed italic mb-8 font-medium">
                  "{artistInfo.artistStatement}"
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-right text-gray-600 font-semibold text-lg">
                    - {artistInfo.name}, Art Director
                  </p>
                  <p className="text-right text-amber-600 font-medium mt-1">
                    26 Years of Creative Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">26 Years of Creative Excellence</h2>
            <p className="text-2xl text-amber-600 font-medium">Professional Journey & Milestones</p>
            <div className="w-40 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Vertical Line with Gradient */}
            <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={`timeline-${index}`}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-20 lg:ml-0 lg:w-1/2 ${
                      index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'
                    }`}
                  >
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <div className={`flex items-center mb-4 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      }`}>
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-md">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                      
                      {/* Decorative Element */}
                      <div className={`mt-4 flex ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      }`}>
                        <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience Summary */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold mb-4">26 Years of Versatile Experience</h3>
              <p className="text-xl opacity-90">
                Specializing in Printing, Canvas Painting, Model Miniature Making, Building Elevation & Interior Designing, Crafting, and Sculpting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600">Explore collections of paintings, portraits, sketches, and more</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Works
            </button>
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.slice(0, 6).map((artwork, index) => (
              <div
                key={`artwork-${artwork.id}`}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openLightbox(artwork, index)}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                    <p className="text-sm text-gray-300">{artwork.year} • {artwork.medium}</p>
                    <p className="text-sm text-amber-400 mt-1">{artwork.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
            >
              View Full Gallery
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Trophy className="mx-auto mb-4 text-amber-400" size={64} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Celebrating excellence and achievements</p>
          </div>

          {/* Year Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedYear === year
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {year === 'all' ? 'All Years' : year}
              </button>
            ))}
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAwards.slice(0, 6).map((award, index) => (
              <div
                key={`award-${index}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Trophy className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                    <p className="text-amber-600 font-medium">{award.organization}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <CalendarIcon className="mr-2" size={16} />
                  <span>{award.year}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/awards"
              className="inline-flex items-center px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
            >
              View All Awards
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Newspaper className="mx-auto mb-4 text-amber-400" size={64} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Media Features</h2>
            <p className="text-xl text-gray-600">Press coverage, interviews, and featured articles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Media Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Newspaper className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Art Today Magazine</h3>
                  <p className="text-amber-600 font-medium">Featured Artist</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <CalendarIcon className="mr-2" size={16} />
                <span>2024</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Featured as emerging artist of the year, showcasing innovative techniques in contemporary portraiture.
              </p>
            </div>

            {/* Media Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Award className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Creative Weekly</h3>
                  <p className="text-amber-600 font-medium">Interview</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <CalendarIcon className="mr-2" size={16} />
                <span>2023</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                In-depth interview discussing artistic philosophy and the evolution of modern portrait art.
              </p>
            </div>

            {/* Media Card 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Star className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Art Critics Review</h3>
                  <p className="text-amber-600 font-medium">Review</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <CalendarIcon className="mr-2" size={16} />
                <span>2023</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Critical acclaim for the latest exhibition series, praising technical mastery and emotional depth.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/media"
              className="inline-flex items-center px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
            >
              View All Media
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in commissioning a piece or learning more about the artwork?
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <p className="text-gray-400">Email</p>
              <p className="text-lg">contact@artist.com</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">Phone</p>
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">Location</p>
              <p className="text-lg">{artistInfo.location}</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-all duration-200 transform hover:scale-105"
            >
              Contact Form
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <Lightbox
          artwork={selectedArtwork}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
          artworks={filteredArtworks}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
};

export default Home;