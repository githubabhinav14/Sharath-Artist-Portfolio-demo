import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Award, Newspaper } from 'lucide-react';
import { artistInfo, featuredWorks, testimonials } from '../data/mockData';
import ExhibitionCalendar from '../components/ExhibitionCalendar';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredWorks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
          {featuredWorks.map((_, index) => (
            <button
              key={index}
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

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gallery Card */}
            <Link
              to="/gallery"
              className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-200 transition-colors duration-200">
                <Palette className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Explore Gallery</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse through collections of paintings, portraits, sketches, and more.
              </p>
            </Link>

            {/* Awards Card */}
            <Link
              to="/awards"
              className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-200 transition-colors duration-200">
                <Award className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Awards & Recognition</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover achievements, exhibitions, and accolades earned over the years.
              </p>
            </Link>

            {/* Media Card */}
            <Link
              to="/media"
              className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-200 transition-colors duration-200">
                <Newspaper className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Media Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Read press coverage, interviews, and featured articles.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Works</h2>
            <p className="text-xl text-gray-600">A selection of recent masterpieces</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                    <p className="text-sm text-gray-300">{work.year} • {work.medium}</p>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-xl text-gray-400">Testimonials from collectors and collaborators</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-amber-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;