import React from 'react';
import { mediaFeatures } from '../data/mockData';
import { Newspaper, Video, Calendar } from 'lucide-react';

const Media = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1623039405147-547794f92e9e"
            alt="Media"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <Newspaper className="mx-auto mb-4 text-amber-400" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Media & Press</h1>
          <p className="text-xl text-amber-400">Features, interviews, and news coverage</p>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Press Coverage</h2>
            <p className="text-xl text-gray-600">Featured in leading publications and media outlets</p>
          </div>

          {/* Media Grid */}
          <div className="space-y-12">
            {mediaFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300`}
              >
                {/* Image/Video */}
                <div className="lg:w-1/2">
                  {feature.type === 'video' && feature.videoUrl ? (
                    <div className="relative h-full min-h-[300px]">
                      <iframe
                        src={feature.videoUrl}
                        title={feature.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    {feature.type === 'video' ? (
                      <Video className="text-amber-500 mr-2" size={20} />
                    ) : (
                      <Newspaper className="text-amber-500 mr-2" size={20} />
                    )}
                    <span className="text-amber-600 font-semibold uppercase text-sm">
                      {feature.type === 'video' ? 'Video Feature' : 'Article'}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-amber-600 transition-colors duration-200">
                    {feature.title}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-4 space-x-4">
                    <span className="font-semibold">{feature.publication}</span>
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {feature.date}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">{feature.excerpt}</p>

                  <button className="mt-6 inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-all duration-200 transform hover:scale-105">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Press Kit Available</h2>
          <p className="text-xl text-gray-300 mb-8">
            High-resolution images, biography, artist statement, and exhibition history available for media use.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Download Press Kit
          </button>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Follow the Journey</h2>
            <p className="text-xl text-gray-600">Stay updated with latest works and exhibitions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">50K+</div>
              <p className="text-gray-600">Instagram Followers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">15K+</div>
              <p className="text-gray-600">YouTube Subscribers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">30+</div>
              <p className="text-gray-600">Media Features</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">10+</div>
              <p className="text-gray-600">Interviews</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;