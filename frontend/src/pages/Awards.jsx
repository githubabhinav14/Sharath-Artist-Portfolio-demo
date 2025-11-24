import React, { useState } from 'react';
import { awards } from '../data/mockData';
import { Award, Trophy, Star, Calendar, Medal, Filter } from 'lucide-react';

const Awards = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [viewMode, setViewMode] = useState('showcase'); // 'showcase' or 'timeline'

  // Get unique years for filtering
  const years = ['all', ...new Set(awards.map(a => a.year))].sort().reverse();

  const filteredAwards = selectedYear === 'all' 
    ? awards 
    : awards.filter(a => a.year === selectedYear);

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

      {/* Filter Controls */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Year Filter */}
            <div className="flex items-center space-x-3">
              <Filter className="text-gray-600" size={20} />
              <div className="flex flex-wrap gap-2">
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
            </div>

            {/* View Mode Toggle */}
            <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('showcase')}
                className={`px-4 py-2 rounded transition-colors duration-200 text-sm font-medium ${
                  viewMode === 'showcase' ? 'bg-white shadow-sm text-amber-600' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Showcase View
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-4 py-2 rounded transition-colors duration-200 text-sm font-medium ${
                  viewMode === 'timeline' ? 'bg-white shadow-sm text-amber-600' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Timeline View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase View - Split Screen Layout */}
      {viewMode === 'showcase' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Honors & Accolades</h2>
              <p className="text-xl text-gray-600">Recognition from prestigious institutions and organizations</p>
            </div>

            {/* Professional Split-Screen Awards */}
            <div className="space-y-20">
              {filteredAwards.map((award, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-12 items-center bg-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]`}
                >
                  {/* Information Side */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-6">
                    {/* Year Badge */}
                    <div className="inline-flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                      <Calendar size={20} />
                      <span>{award.year}</span>
                    </div>

                    {/* Award Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {award.title}
                    </h3>

                    {/* Organization */}
                    <div className="flex items-center space-x-3">
                      <Medal className="text-amber-600 flex-shrink-0" size={24} />
                      <p className="text-xl font-semibold text-amber-600">{award.organization}</p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {award.description}
                    </p>

                    {/* Additional Details */}
                    <div className="pt-4 border-t border-gray-300">
                      <div className="flex items-start space-x-3">
                        <Star className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Recognition Details</p>
                          <p className="text-gray-600">
                            This prestigious award recognizes outstanding achievement and contribution to the field of contemporary fine arts.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats or Additional Info */}
                    <div className="flex space-x-6 pt-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-600">#{index + 1}</div>
                        <div className="text-sm text-gray-600">Award Rank</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-600">{award.year}</div>
                        <div className="text-sm text-gray-600">Year Received</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-600">
                          <Award size={32} className="mx-auto" />
                        </div>
                        <div className="text-sm text-gray-600">National Level</div>
                      </div>
                    </div>
                  </div>

                  {/* Image Side - Full Display */}
                  <div className="w-full lg:w-1/2 h-full min-h-[500px] relative overflow-hidden group">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Overlay Info on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg font-semibold mb-2">{award.organization}</p>
                      <p className="text-sm">{award.year} Award Ceremony</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Timeline View */}
      {viewMode === 'timeline' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards Timeline</h2>
              <p className="text-xl text-gray-600">Journey through accolades and recognition</p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-amber-300"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {filteredAwards.map((award, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                      <Star className="text-white" size={12} />
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-20 lg:ml-0 lg:w-1/2 ${
                        index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'
                      }`}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <span className="text-2xl font-bold text-amber-600">{award.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                        <p className="text-amber-600 font-semibold mb-2">{award.organization}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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