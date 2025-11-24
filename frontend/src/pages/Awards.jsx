import React from 'react';
import { awards } from '../data/mockData';
import { Award, Trophy, Star } from 'lucide-react';

const Awards = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1639377947236-7c437d2fb142"
            alt="Awards"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <Trophy className="mx-auto mb-4 text-amber-400" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Awards & Recognition</h1>
          <p className="text-xl text-amber-400">Celebrating excellence and achievements</p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Honors & Accolades</h2>
            <p className="text-xl text-gray-600">Recognition from prestigious institutions and organizations</p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Award Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {award.year}
                  </div>
                </div>

                {/* Award Details */}
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Star className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                        {award.title}
                      </h3>
                      <p className="text-amber-600 font-semibold mb-3">{award.organization}</p>
                      <p className="text-gray-600 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exhibitions & Shows</h2>
            <p className="text-xl text-gray-600">Featured in galleries and exhibitions worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exhibition Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <Award className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Solo Exhibitions</h3>
              <p className="text-4xl font-bold text-amber-600 mb-2">12+</p>
              <p className="text-gray-600">Individual showcases across major galleries</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <Trophy className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Group Shows</h3>
              <p className="text-4xl font-bold text-amber-600 mb-2">25+</p>
              <p className="text-gray-600">Collaborative exhibitions with renowned artists</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <Star className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Awards Won</h3>
              <p className="text-4xl font-bold text-amber-600 mb-2">{awards.length}</p>
              <p className="text-gray-600">Prestigious honors and recognitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exhibition Gallery</h2>
            <p className="text-xl text-gray-600">Moments from past exhibitions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <img
              src="https://images.pexels.com/photos/16040659/pexels-photo-16040659.jpeg"
              alt="Exhibition 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
            <img
              src="https://images.pexels.com/photos/9221307/pexels-photo-9221307.jpeg"
              alt="Exhibition 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
            <img
              src="https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae"
              alt="Exhibition 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
            <img
              src="https://images.unsplash.com/photo-1623317978595-5eed03cbba31"
              alt="Exhibition 4"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;