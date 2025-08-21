import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

interface NewsletterPopupProps {
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    localStorage.setItem('newsletterShown', 'true');
    alert('Thank you for subscribing! Check your email for your 10% discount code.');
    onClose();
  };

  const handleClose = () => {
    localStorage.setItem('newsletterShown', 'true');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose} />
      
      <div className="relative bg-white rounded-lg max-w-md w-full p-8 animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-white" size={24} />
          </div>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
            Get 10% Off
          </h2>
          <p className="text-gray-600">
            Subscribe to our newsletter and get 10% off your first order plus exclusive access to new collections.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Get My Discount
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterPopup;