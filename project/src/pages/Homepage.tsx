import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Recycle } from 'lucide-react';
import ProductCarousel from '../components/Product/ProductCarousel';
import { useApp } from '../context/AppContext';

const Homepage: React.FC = () => {
  const { state } = useApp();
  const newArrivals = state.products.filter(product => product.isNew).slice(0, 8);
  const bestsellers = state.products.filter(product => product.isBestseller).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-sm">
            Wear Your Story
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
            Discover premium fashion pieces that express your unique style and values
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop/men"
              className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Shop Men
            </Link>
            <Link 
              to="/shop/women"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Shop Women
            </Link>
            <Link 
              to="/shop"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Collection</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products - New Arrivals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              New Arrivals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest collection featuring contemporary designs and premium fabrics
            </p>
          </div>
          <ProductCarousel products={newArrivals} />
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-premium animate-scale-in">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Sustainable Fashion</h3>
              <p className="text-gray-600">
                Made from organic and recycled materials, our pieces are designed with the planet in mind.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-premium animate-scale-in">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Every piece is crafted with attention to detail using the finest fabrics and construction techniques.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-premium animate-scale-in">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Complimentary shipping on all orders over $150, with easy returns within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bestsellers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most loved pieces, chosen by customers for their exceptional quality and style
            </p>
          </div>
          <ProductCarousel products={bestsellers} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                rating: 5,
                text: "The quality is exceptional and the fit is perfect. I've received so many compliments on my pieces from Brand Name."
              },
              {
                name: "Michael Rodriguez",
                rating: 5,
                text: "Finally found a brand that combines sustainability with style. The fabrics are incredible and the designs are timeless."
              },
              {
                name: "Emma Thompson",
                rating: 5,
                text: "Customer service is outstanding and the pieces have become staples in my wardrobe. Highly recommend!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-premium">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Stay in Style
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get 10% off your first order and be the first to know about new collections and exclusive offers
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homepage;