import React from 'react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

const exhibitions = [
  {
    title: "Solo Exhibition: 'Reflections'",
    venue: "Contemporary Art Museum",
    location: "New York, NY",
    startDate: "2024-03-15",
    endDate: "2024-05-20",
    time: "10:00 AM - 6:00 PM",
    status: "current",
    description: "A comprehensive showcase of recent works exploring themes of identity and transformation.",
    image: "https://images.unsplash.com/photo-1740598307395-3ccc0ec28a28"
  },
  {
    title: "Group Exhibition: 'Modern Voices'",
    venue: "Madison Gallery",
    location: "Los Angeles, CA",
    startDate: "2024-06-01",
    endDate: "2024-07-15",
    time: "11:00 AM - 7:00 PM",
    status: "upcoming",
    description: "Featuring contemporary artists pushing boundaries in figurative and abstract art.",
    image: "https://images.pexels.com/photos/16040659/pexels-photo-16040659.jpeg"
  },
  {
    title: "Art Fair: 'International Showcase'",
    venue: "Convention Center",
    location: "Miami, FL",
    startDate: "2024-08-10",
    endDate: "2024-08-13",
    time: "9:00 AM - 8:00 PM",
    status: "upcoming",
    description: "International art fair featuring works from renowned contemporary artists worldwide.",
    image: "https://images.pexels.com/photos/9221307/pexels-photo-9221307.jpeg"
  },
  {
    title: "Retrospective: '15 Years of Art'",
    venue: "National Portrait Gallery",
    location: "Chicago, IL",
    startDate: "2023-11-01",
    endDate: "2024-01-31",
    time: "10:00 AM - 5:00 PM",
    status: "past",
    description: "A career-spanning exhibition showcasing the evolution of artistic style and technique.",
    image: "https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae"
  }
];

const ExhibitionCalendar = () => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'upcoming':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'past':
        return 'bg-gray-100 text-gray-600 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'current':
        return 'Now Showing';
      case 'upcoming':
        return 'Coming Soon';
      case 'past':
        return 'Past Exhibition';
      default:
        return status;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Calendar className="mx-auto mb-4 text-amber-500" size={48} />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Exhibition Calendar</h2>
          <p className="text-xl text-gray-600">Visit upcoming and current exhibitions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Exhibition Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold border-2 ${getStatusColor(exhibition.status)}`}>
                  {getStatusText(exhibition.status)}
                </div>
              </div>

              {/* Exhibition Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors duration-200">
                  {exhibition.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {exhibition.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  {/* Venue */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">{exhibition.venue}</p>
                      <p className="text-sm text-gray-600">{exhibition.location}</p>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start space-x-3">
                    <Clock className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">{exhibition.time}</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                {exhibition.status !== 'past' && (
                  <button className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all duration-200 transform hover:scale-105">
                    <span>Get Directions</span>
                    <ExternalLink className="ml-2" size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionCalendar;
