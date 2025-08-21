import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(state.searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg backdrop-blur-custom' : 'bg-white/95 backdrop-blur-custom'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={() => dispatch({ type: 'SET_MENU_OPEN', payload: !state.isMenuOpen })}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {state.isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">BN</span>
              </div>
              <span className="font-display text-xl font-semibold text-gray-900 hidden sm:block">
                Brand Name
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/shop/men" 
                className={`text-gray-900 hover:text-gray-600 transition-colors font-medium ${
                  location.pathname.includes('/shop/men') ? 'border-b-2 border-black pb-1' : ''
                }`}
              >
                Men
              </Link>
              <Link 
                to="/shop/women" 
                className={`text-gray-900 hover:text-gray-600 transition-colors font-medium ${
                  location.pathname.includes('/shop/women') ? 'border-b-2 border-black pb-1' : ''
                }`}
              >
                Women
              </Link>
              <Link 
                to="/shop" 
                className={`text-gray-900 hover:text-gray-600 transition-colors font-medium ${
                  location.pathname === '/shop' ? 'border-b-2 border-black pb-1' : ''
                }`}
              >
                All
              </Link>
              <Link 
                to="/lookbook" 
                className={`text-gray-900 hover:text-gray-600 transition-colors font-medium ${
                  location.pathname === '/lookbook' ? 'border-b-2 border-black pb-1' : ''
                }`}
              >
                Lookbook
              </Link>
              <Link 
                to="/blog" 
                className={`text-gray-900 hover:text-gray-600 transition-colors font-medium ${
                  location.pathname.includes('/blog') ? 'border-b-2 border-black pb-1' : ''
                }`}
              >
                Journal
              </Link>
              <Link 
                to="/about" 
                className={`text-gray-900 hover:text-gray-600 transition-colors font-medium ${
                  location.pathname === '/about' ? 'border-b-2 border-black pb-1' : ''
                }`}
              >
                About
              </Link>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Search size={20} />
              </button>

              {/* Account */}
              <Link 
                to="/account" 
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <User size={20} />
              </Link>

              {/* Wishlist */}
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors relative">
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => dispatch({ type: 'SET_CART_OPEN', payload: true })}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t bg-white px-4 py-4">
            <div className="max-w-7xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={state.searchQuery}
                  onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;