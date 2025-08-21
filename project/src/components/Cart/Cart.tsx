import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useApp();

  if (!state.isCartOpen) return null;

  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id, quantity: newQuantity } });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => dispatch({ type: 'SET_CART_OPEN', payload: false })} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              Shopping Bag ({itemCount})
            </h2>
            <button
              onClick={() => dispatch({ type: 'SET_CART_OPEN', payload: false })}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button
                  onClick={() => dispatch({ type: 'SET_CART_OPEN', payload: false })}
                  className="text-black underline"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {state.cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.selectedSize} • {item.selectedColor}
                      </p>
                      <p className="font-semibold text-gray-900">${item.price}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-200 rounded-md flex items-center justify-center hover:border-gray-400 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-200 rounded-md flex items-center justify-center hover:border-gray-400 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.cart.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-gray-900">Total</span>
                <span className="font-bold text-xl text-gray-900">${total.toFixed(2)}</span>
              </div>
              
              <button className="w-full bg-black text-white py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                Checkout
              </button>
              
              <button
                onClick={() => dispatch({ type: 'SET_CART_OPEN', payload: false })}
                className="w-full border border-gray-200 text-gray-700 py-3 rounded-md font-medium hover:border-gray-400 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;