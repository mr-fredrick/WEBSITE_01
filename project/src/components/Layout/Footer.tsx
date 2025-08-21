import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">BN</span>
              </div>
              <span className="font-display text-xl font-semibold">Brand Name</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting premium fashion pieces that tell your unique story. 
              Sustainable, stylish, and designed for the modern individual.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Shop</h3>
            <div className="space-y-2">
              <Link to="/shop/men" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Men's Collection
              </Link>
              <Link to="/shop/women" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Women's Collection
              </Link>
              <Link to="/shop/accessories" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Accessories
              </Link>
              <Link to="/lookbook" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Lookbook
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Journal
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Careers
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Size Guide
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Shipping & Returns
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                FAQ
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Customer Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Brand Name. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;