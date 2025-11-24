import React, { useState } from 'react';
import { artistInfo } from '../data/mockData';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Twitter, Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628586431263-44040b966252"
            alt="Contact"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <Mail className="mx-auto mb-4 text-amber-400" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-amber-400">Let's create something beautiful together</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Whether you're interested in commissioning a piece, collaborating on a project, or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${artistInfo.email}`} className="text-gray-600 hover:text-amber-600 transition-colors duration-200">
                      {artistInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${artistInfo.phone}`} className="text-gray-600 hover:text-amber-600 transition-colors duration-200">
                      {artistInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">{artistInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href={artistInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href={artistInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href={artistInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href={artistInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1613746011089-6a89f373d232"
                  alt="Newsletter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/80 to-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white p-8">
                  <div className="text-center">
                    <Mail size={48} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Stay Connected</h3>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Join the Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Get updates on new artworks, upcoming exhibitions, and exclusive behind-the-scenes content.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  No spam. Unsubscribe anytime. Your privacy is protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit & Commission Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Commission CTA */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">Interested in a Commission?</h2>
              <p className="text-xl text-gray-300 mb-8">
                I'm currently accepting commissions for custom portraits and artwork. Let's discuss your vision and bring it to life.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Request a Commission
              </button>
            </div>

            {/* Press Kit Download */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">Press & Media Kit</h2>
              <p className="text-xl text-gray-300 mb-8">
                Download high-resolution images, biography, and press materials for editorial use.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Newspaper className="mr-2" size={20} />
                Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;