import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Truck, RotateCcw, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/Product/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { state, dispatch } = useApp();
  
  const product = state.products.find(p => p.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/shop" className="text-black underline">Return to shop</Link>
        </div>
      </div>
    );
  }

  const isInWishlist = state.wishlist.includes(product.id);
  const suggestedProducts = state.products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select a size and color');
      return;
    }

    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  React.useEffect(() => {
    if (product.sizes.length > 0) setSelectedSize(product.sizes[0]);
    if (product.colors.length > 0) setSelectedColor(product.colors[0]);
  }, [product]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

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
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      index === selectedImageIndex ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border rounded-md transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Color: <span className="font-normal">{selectedColor}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color ? 'border-black scale-110' : 'border-gray-300 hover:border-gray-500'
                    }`}
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
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-200 rounded-md flex items-center justify-center hover:border-gray-400 transition-colors"
                >
                  -
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-200 rounded-md flex items-center justify-center hover:border-gray-400 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={20} />
                <span>Add to Cart</span>
              </button>
              
              <button
                onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', payload: product.id })}
                className={`w-full border-2 py-4 rounded-md font-semibold transition-all flex items-center justify-center space-x-2 ${
                  isInWishlist
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 text-gray-700 hover:border-black'
                }`}
              >
                <Heart size={20} className={isInWishlist ? 'fill-current' : ''} />
                <span>{isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Product Details</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Fabric:</strong> {product.fabric}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Care:</strong> Machine wash cold, hang dry</p>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Truck size={20} className="text-gray-400" />
                <span className="text-sm text-gray-600">Free shipping on orders over $150</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw size={20} className="text-gray-400" />
                <span className="text-sm text-gray-600">30-day returns & exchanges</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-gray-400" />
                <span className="text-sm text-gray-600">Quality guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Complete the Look */}
        {suggestedProducts.length > 0 && (
          <section className="mt-20 pt-16 border-t">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Complete the Look
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedProducts.map((suggestedProduct) => (
                <ProductCard key={suggestedProduct.id} product={suggestedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;