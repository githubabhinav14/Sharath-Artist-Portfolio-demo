import React from 'react';
import { artistInfo, timeline } from '../data/mockData';
import { Calendar, MapPin, Award, Palette } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628586431263-44040b966252"
            alt="Artist Studio"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About the Artist</h1>
          <p className="text-xl text-amber-400">Journey, Vision & Philosophy</p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1716934893244-450310a6ab29"
                alt="Artist Portrait"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet {artistInfo.name}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {artistInfo.fullBio}
              </p>
              <div className="flex items-start space-x-3 pt-4">
                <MapPin className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Based in</p>
                  <p className="text-gray-600">{artistInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Artist Statement</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed italic text-center">
              "{artistInfo.artistStatement}"
            </p>
            <p className="text-right text-gray-500 mt-6 font-semibold">- {artistInfo.name}</p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Artistic Journey</h2>
            <p className="text-xl text-gray-600">Milestones and achievements over the years</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-amber-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-20 lg:ml-0 lg:w-1/2 ${
                      index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
                      <div className="flex items-center mb-3">
                        <Calendar className="text-amber-500 mr-2" size={20} />
                        <span className="text-2xl font-bold text-amber-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
            <p className="text-xl text-gray-600">Professional art services tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Palette className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Portraits</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Personalized portrait commissions capturing the essence and personality of your subject with meticulous attention to detail.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Oil & Acrylic Paintings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Various Sizes Available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  4-8 Week Timeline
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Original Artwork</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unique, one-of-a-kind pieces from my personal collection available for purchase and private collections.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Certificate of Authenticity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Curated Collections
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  International Shipping
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Art Consultation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Expert guidance for collectors and interior designers seeking to curate meaningful art collections.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Collection Curation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Investment Advice
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Virtual Sessions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Images */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Inside the Studio</h2>
            <p className="text-xl text-gray-400">Where creativity comes to life</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1613746011089-6a89f373d232"
              alt="Studio 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
            <img
              src="https://images.pexels.com/photos/4587855/pexels-photo-4587855.jpeg"
              alt="Studio 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
            <img
              src="https://images.pexels.com/photos/6932520/pexels-photo-6932520.jpeg"
              alt="Studio 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;