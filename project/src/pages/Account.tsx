import React, { useState } from 'react';
import { User, Heart, Package, Star, Gift } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Account: React.FC = () => {
  const { state, dispatch } = useApp();
  const [activeTab, setActiveTab] = useState('profile');

  // Mock user for demonstration
  const mockUser = {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    loyaltyPoints: 250,
    wishlist: state.wishlist
  };

  React.useEffect(() => {
    if (!state.user) {
      dispatch({ type: 'SET_USER', payload: mockUser });
    }
  }, []);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'loyalty', label: 'Rewards', icon: Gift }
  ];

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 299,
      items: 2
    },
    {
      id: 'ORD-002',
      date: '2024-01-08',
      status: 'In Transit',
      total: 159,
      items: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            My Account
          </h1>
          <p className="text-gray-600">
            Welcome back, {state.user?.name || 'Guest'}!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors text-left ${
                        activeTab === tab.id
                          ? 'bg-black text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={state.user?.name || ''}
                          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue={state.user?.email || ''}
                          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Update Profile
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">Order {order.id}</h3>
                            <p className="text-sm text-gray-500">
                              {new Date(order.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </p>
                          </div>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-600">{order.items} items • ${order.total}</p>
                          <button className="text-black underline text-sm">View Details</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Wishlist ({state.wishlist.length})
                  </h2>
                  {state.wishlist.length === 0 ? (
                    <div className="text-center py-16">
                      <Heart size={48} className="text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                      <p className="text-sm text-gray-400">
                        Add items you love to keep track of them
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {state.wishlist.map((productId) => {
                        const product = state.products.find(p => p.id === productId);
                        if (!product) return null;
                        
                        return (
                          <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">${product.price}</p>
                            <div className="flex space-x-2">
                              <button className="flex-1 bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                                Add to Cart
                              </button>
                              <button
                                onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', payload: product.id })}
                                className="px-3 py-2 border border-gray-200 rounded-md hover:border-gray-400 transition-colors"
                              >
                                <Heart size={16} className="fill-current" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'loyalty' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Loyalty Rewards</h2>
                  
                  <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-lg mb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Your Points</h3>
                        <p className="text-3xl font-bold">{mockUser.loyaltyPoints}</p>
                        <p className="text-sm opacity-80">Worth ${(mockUser.loyaltyPoints * 0.01).toFixed(2)} in rewards</p>
                      </div>
                      <Gift size={48} className="opacity-80" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">How to Earn Points</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">$</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Every Purchase</p>
                            <p className="text-sm text-gray-600">Earn 1 point per $1 spent</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <Star size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Product Reviews</p>
                            <p className="text-sm text-gray-600">Earn 25 points per review</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Redeem Rewards</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">$5 Off Your Next Order</p>
                            <p className="text-sm text-gray-600">Minimum order $50</p>
                          </div>
                          <button 
                            disabled={mockUser.loyaltyPoints < 100}
                            className={`px-4 py-2 rounded-md text-sm font-medium ${
                              mockUser.loyaltyPoints >= 100
                                ? 'bg-black text-white hover:bg-gray-800'
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            } transition-colors`}
                          >
                            {mockUser.loyaltyPoints >= 100 ? 'Redeem (100 pts)' : '100 pts required'}
                          </button>
                        </div>
                        <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">$15 Off Your Next Order</p>
                            <p className="text-sm text-gray-600">Minimum order $100</p>
                          </div>
                          <button 
                            disabled={mockUser.loyaltyPoints < 300}
                            className={`px-4 py-2 rounded-md text-sm font-medium ${
                              mockUser.loyaltyPoints >= 300
                                ? 'bg-black text-white hover:bg-gray-800'
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            } transition-colors`}
                          >
                            {mockUser.loyaltyPoints >= 300 ? 'Redeem (300 pts)' : '300 pts required'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;