import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/Product/ProductCard';
import ProductFilters from '../components/Product/ProductFilters';
import { useApp } from '../context/AppContext';

const Shop: React.FC = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const { state, dispatch } = useApp();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  const searchQuery = searchParams.get('search') || state.searchQuery;

  const filteredProducts = useMemo(() => {
    let filtered = [...state.products];

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by size
    if (state.selectedFilters.size.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => state.selectedFilters.size.includes(size))
      );
    }

    // Filter by color
    if (state.selectedFilters.color.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => state.selectedFilters.color.includes(color))
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= state.selectedFilters.priceRange[0] &&
      product.price <= state.selectedFilters.priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [state.products, category, searchQuery, state.selectedFilters, sortBy]);

  const getCategoryTitle = () => {
    if (searchQuery) return `Search results for "${searchQuery}"`;
    if (category === 'men') return 'Men\'s Collection';
    if (category === 'women') return 'Women\'s Collection';
    if (category === 'accessories') return 'Accessories';
    return 'All Collections';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {getCategoryTitle()}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-200 rounded-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                >
                  <List size={16} />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 border border-gray-200 rounded-md px-3 py-2 hover:border-black transition-colors"
              >
                <SlidersHorizontal size={16} />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} w-64 flex-shrink-0`}>
            <ProductFilters />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;