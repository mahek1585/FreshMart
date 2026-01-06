import React from 'react';
import { ShoppingCart, User, Menu, X, Heart, Bell, MapPin, Phone } from 'lucide-react';

const Header = ({ cartCount, showCart, setShowCart, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Free Delivery on Orders Above ₹500</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-green-200 transition">Track Order</a>
              <span>|</span>
              <a href="#" className="hover:text-green-200 transition">Help & Support</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="text-4xl animate-bounce">🛒</div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  FreshMart
                </span>
                <p className="text-xs text-gray-500 font-medium">Farm to Home</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button 
                onClick={() => scrollToSection('hero-section')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('products-section')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition relative group"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('products-section')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition relative group"
              >
                Deals
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact-section')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </nav>

            {/* Right Side Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              <button className="hidden md:flex relative p-3 hover:bg-green-50 rounded-xl transition-all duration-300 group">
                <Bell className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* Wishlist */}
              <button className="hidden md:flex relative p-3 hover:bg-green-50 rounded-xl transition-all duration-300 group">
                <Heart className="w-5 h-5 text-gray-600 group-hover:text-red-500 group-hover:fill-red-500 transition" />
              </button>

              {/* User Profile */}
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 hover:bg-green-50 rounded-xl transition-all duration-300 group">
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="text-left hidden xl:block">
                  <p className="text-xs text-gray-500">Hello,</p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition">Sign In</p>
                </div>
              </button>

              {/* Shopping Cart */}
              <button 
                onClick={() => setShowCart(!showCart)}
                className="relative px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 group"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline font-semibold">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 hover:bg-green-50 rounded-xl transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gradient-to-br from-white to-green-50 border-t border-gray-100 shadow-xl">
            <nav className="px-4 py-6 space-y-1">
              <button 
                onClick={() => scrollToSection('hero-section')}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-xl transition-all duration-300 font-medium"
              >
                <span>Home</span>
                <span className="text-green-600">→</span>
              </button>
              <button 
                onClick={() => scrollToSection('products-section')}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-xl transition-all duration-300 font-medium"
              >
                <span>Products</span>
                <span className="text-green-600">→</span>
              </button>
              <button 
                onClick={() => scrollToSection('products-section')}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-xl transition-all duration-300 font-medium"
              >
                <span>Deals</span>
                <span className="text-green-600">→</span>
              </button>
             
              <button 
                onClick={() => scrollToSection('contact-section')}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-xl transition-all duration-300 font-medium"
              >
                <span>Contact</span>
                <span className="text-green-600">→</span>
              </button>
              
              {/* Mobile User Section */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-lg transition">
                  <User className="w-5 h-5" />
                  <span className="font-semibold">Sign In / Register</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;