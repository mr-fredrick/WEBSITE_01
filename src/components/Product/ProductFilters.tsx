import React from 'react';
import { X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const ProductFilters: React.FC = () => {
  const { state, dispatch } = useApp();

  const allSizes = ['XS', 'S', 'M', 'L', 'XL', '24', '25', '26', '27', '28', '30', '32', '34', '36'];
  const allColors = ['Black', 'White', 'Beige', 'Navy', 'Cream', 'Gray', 'Olive', 'Charcoal', 'Camel', 'Light Blue', 'Dark Blue', 'Khaki', 'Tan', 'Burgundy', 'Ivory', 'Blush'];

  const clearFilters = () => {
    dispatch({
      type: 'SET_FILTERS',
      payload: {
        size: [],
        color: [],
        priceRange: [0, 1000]
      }
    });
  };

  const toggleSize = (size: string) => {
    const newSizes = state.selectedFilters.size.includes(size)
      ? state.selectedFilters.size.filter(s => s !== size)
      : [...state.selectedFilters.size, size];
    
    dispatch({ type: 'SET_FILTERS', payload: { size: newSizes } });
  };

  const toggleColor = (color: string) => {
    const newColors = state.selectedFilters.color.includes(color)
      ? state.selectedFilters.color.filter(c => c !== color)
      : [...state.selectedFilters.color, color];
    
    dispatch({ type: 'SET_FILTERS', payload: { color: newColors } });
  };

  const hasActiveFilters = 
    state.selectedFilters.size.length > 0 ||
    state.selectedFilters.color.length > 0 ||
    state.selectedFilters.priceRange[0] > 0 ||
    state.selectedFilters.priceRange[1] < 1000;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-black transition-colors flex items-center space-x-1"
          >
            <X size={14} />
            <span>Clear all</span>
          </button>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Price Range</h4>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={state.selectedFilters.priceRange[1]}
            onChange={(e) => 
              dispatch({ 
                type: 'SET_FILTERS', 
                payload: { priceRange: [0, parseInt(e.target.value)] }
              })
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${state.selectedFilters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Size</h4>
        <div className="grid grid-cols-3 gap-2">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`py-2 px-3 text-sm border rounded-md transition-all ${
                state.selectedFilters.size.includes(size)
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 text-gray-700 hover:border-gray-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Color</h4>
        <div className="space-y-2">
          {allColors.map((color) => (
            <label key={color} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={state.selectedFilters.color.includes(color)}
                onChange={() => toggleColor(color)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 ${
                state.selectedFilters.color.includes(color) ? 'border-black' : 'border-gray-300'
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
              />
              <span className={`text-sm ${
                state.selectedFilters.color.includes(color) ? 'font-medium text-black' : 'text-gray-700'
              }`}>
                {color}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;