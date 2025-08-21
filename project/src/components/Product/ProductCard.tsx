import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { state, dispatch } = useApp();
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isInWishlist = state.wishlist.includes(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product.id });
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const cartItem = {
      ...product,
      selectedSize: product.sizes[0],
      selectedColor: product.colors[0],
      quantity: 1
    };
    
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={product.images[imageIndex]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Product badges */}
          <div className="absolute top-4 left-4 space-y-2">
            {product.isNew && (
              <span className="bg-black text-white px-3 py-1 text-xs font-medium rounded-full">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-yellow-400 text-black px-3 py-1 text-xs font-medium rounded-full">
                Bestseller
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-red-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
              isInWishlist 
                ? 'bg-black text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            <Heart size={16} className={isInWishlist ? 'fill-current' : ''} />
          </button>

          {/* Quick add button */}
          <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={handleQuickAdd}
              className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingBag size={16} />
              <span>Quick Add</span>
            </button>
          </div>

          {/* Image dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === imageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
            )}
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{ 
                  backgroundColor: color.toLowerCase() === 'white' ? '#f8f9fa' : 
                                  color.toLowerCase() === 'black' ? '#000' :
                                  color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                  color.toLowerCase() === 'beige' ? '#f5f5dc' :
                                  color.toLowerCase() === 'cream' ? '#fffdd0' :
                                  color.toLowerCase() === 'gray' ? '#6b7280' :
                                  color.toLowerCase() === 'olive' ? '#6b7280' :
                                  color.toLowerCase() === 'charcoal' ? '#374151' :
                                  color.toLowerCase() === 'camel' ? '#c19a6b' :
                                  color.toLowerCase() === 'light blue' ? '#93c5fd' :
                                  color.toLowerCase() === 'dark blue' ? '#1e40af' :
                                  color.toLowerCase() === 'khaki' ? '#9ca3af' :
                                  color.toLowerCase() === 'tan' ? '#d2b48c' :
                                  color.toLowerCase() === 'burgundy' ? '#7c2d12' :
                                  color.toLowerCase() === 'ivory' ? '#fffff0' :
                                  color.toLowerCase() === 'blush' ? '#fecaca' :
                                  '#9ca3af'
                }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500 self-center ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;