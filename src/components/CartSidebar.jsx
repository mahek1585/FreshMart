import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const CartSidebar = ({ showCart, setShowCart, cart, updateQuantity, removeFromCart, totalPrice }) => {
  if (!showCart) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity" onClick={() => setShowCart(false)}>
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto transform transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
                <p className="text-sm text-gray-500">{cart.length} items</p>
              </div>
            </div>
            <button 
              onClick={() => setShowCart(false)} 
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Cart Content */}
        <div className="p-6">
          {cart.length === 0 ? (
            // Empty Cart
            <div className="text-center py-20">
              <div className="text-7xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some products to get started!</p>
              <button 
                onClick={() => setShowCart(false)}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition">
                    {/* Product Image */}
                    <div className="text-5xl bg-white rounded-xl p-3 shadow-sm">
                      {item.image}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-500">₹{item.price} / {item.unit}</p>
                      <p className="text-sm font-bold text-green-600 mt-1">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1.5 bg-white rounded-lg hover:bg-gray-200 transition shadow-sm"
                      >
                        <Minus className="w-4 h-4 text-gray-700" />
                      </button>
                      <span className="font-bold text-gray-800 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1.5 bg-white rounded-lg hover:bg-gray-200 transition shadow-sm"
                      >
                        <Plus className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-800 pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-green-600">₹{totalPrice}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Proceed to Checkout</span>
              </button>

              {/* Continue Shopping */}
              <button 
                onClick={() => setShowCart(false)}
                className="w-full mt-3 text-gray-600 py-3 font-semibold hover:text-green-600 transition"
              >
                Continue Shopping
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;