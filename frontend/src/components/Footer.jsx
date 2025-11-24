import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { artistInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-400">{artistInfo.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {artistInfo.tagline}
            </p>
            <p className="text-gray-500 text-sm">
              Creating art that speaks to the soul and inspires the heart.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                About
              </Link>
              <Link to="/gallery" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                Gallery
              </Link>
              <Link to="/awards" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                Awards
              </Link>
              <Link to="/media" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                Media
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} className="text-amber-400" />
                <span>{artistInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} className="text-amber-400" />
                <span>{artistInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-amber-400" />
                <span>{artistInfo.location}</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href={artistInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={artistInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href={artistInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={artistInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} {artistInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;