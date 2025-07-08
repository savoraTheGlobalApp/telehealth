import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, Heart, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Sapiens Health</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecting patients with world-class healthcare professionals across borders. 
              Your health, our priority.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-primary-400 transition-colors">
                <Globe size={20} />
              </button>
              <button className="text-gray-400 hover:text-primary-400 transition-colors">
                <Shield size={20} />
              </button>
              <button className="text-gray-400 hover:text-primary-400 transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/online-consultation" className="hover:text-primary-400 transition-colors">
                  Online Consultation
                </Link>
              </li>
              <li>
                <Link to="/medical-tourism" className="hover:text-primary-400 transition-colors">
                  Medical Tourism
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-primary-400 transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-400 transition-colors">
                  Health Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <button className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span>savora5billion@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span>+919452868857</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-400" />
                <span>Global Headquarters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance & Legal */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 Sapiens Health. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-xs text-gray-400">
              <span className="flex items-center space-x-1">
                <Shield size={12} />
                <span>HIPAA Compliant</span>
              </span>
              <span className="flex items-center space-x-1">
                <Globe size={12} />
                <span>GDPR Compliant</span>
              </span>
              <span className="flex items-center space-x-1">
                <Heart size={12} />
                <span>Patient-Centered</span>
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 text-center">
            <strong>Disclaimer:</strong> Sapiens Health provides consultation services and medical opinions only. 
            We do not provide prescriptions or replace in-person medical care. For emergencies, 
            please contact your local emergency services immediately. Our services comply with 
            international healthcare regulations including HIPAA and GDPR.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 