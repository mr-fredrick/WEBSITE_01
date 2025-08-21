import React from 'react';
import { Link } from 'react-router-dom';
import { X, User, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const MobileMenu: React.FC = () => {
  const { state, dispatch } = useApp();

  if (!state.isMenuOpen) return null;

  const closeMenu = () => dispatch({ type: 'SET_MENU_OPEN', payload: false });

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMenu} />
      <div className="fixed top-0 left-0 w-80 max-w-sm h-full bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-display text-lg font-semibold">Menu</span>
          <button onClick={closeMenu} className="p-2 hover:bg-gray-100 rounded-md">
            <X size={20} />
          </button>
        </div>

        <nav className="p-4">
          <div className="space-y-4">
            <Link 
              to="/shop/men" 
              className="block py-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              Men
            </Link>
            <Link 
              to="/shop/women" 
              className="block py-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              Women
            </Link>
            <Link 
              to="/shop" 
              className="block py-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              All Collections
            </Link>
            <Link 
              to="/lookbook" 
              className="block py-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              Lookbook
            </Link>
            <Link 
              to="/blog" 
              className="block py-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              Journal
            </Link>
            <Link 
              to="/about" 
              className="block py-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          <div className="border-t mt-6 pt-6">
            <Link 
              to="/account" 
              className="flex items-center space-x-3 py-3 text-gray-900 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              <User size={20} />
              <span>Account</span>
            </Link>
            <button className="flex items-center space-x-3 py-3 text-gray-900 hover:text-gray-600 transition-colors w-full text-left">
              <Heart size={20} />
              <span>Wishlist ({state.wishlist.length})</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;