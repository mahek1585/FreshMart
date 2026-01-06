import React from 'react';
import { Search, TrendingUp, Shield, Truck, Tag } from 'lucide-react';

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = () => {
    // Scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero-section" className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-96 h-96 bg-emerald-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-400 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold text-black">Fresh Deals Every Day</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Fresh Groceries
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Delivered to Your Door
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-green-50 max-w-xl mx-auto lg:mx-0">
              Get farm-fresh fruits, vegetables, and daily essentials delivered within 2 hours. Quality guaranteed!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition group-hover:text-green-600" />
                <input
                  type="text"
                  placeholder="Try: apple, milk, bread, vegetables..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  className="w-full pl-14 pr-32 py-4 rounded-2xl text-gray-900 bg-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 placeholder-gray-400 text-base"
                />
                <button 
                  onClick={() => {
                    if (searchQuery) {
                      setSearchQuery('');
                    } else {
                      handleSearch();
                    }
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {searchQuery ? 'Clear' : 'Search'}
                </button>
              </div>
              
              {/* Popular Searches */}
              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="text-xs text-green-100">Popular:</span>
                {['Apples', 'Milk', 'Bread', 'Vegetables'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      setTimeout(handleSearch, 100);
                    }}
                    className="px-3 py-1 bg-white text-black bg-opacity-20 backdrop-blur-sm rounded-full text-xs hover:bg-opacity-30 transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white text-green-500 bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-green-100">Quality</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white text-green-500 bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold">2 Hours</p>
                  <p className="text-sm text-green-100">Delivery</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white text-green-500 bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Tag className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold">50%</p>
                  <p className="text-sm text-green-100">Off Deals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Graphics */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Main Product Circle */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-full animate-pulse"></div>
                
                {/* Floating Product Cards */}
                <div className="absolute top-0 left-1/4 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="text-5xl mb-2">🍎</div>
                  <p className="text-gray-800 font-bold text-sm">Fresh Apples</p>
                  <p className="text-green-600 font-bold">₹120/kg</p>
                </div>

                <div className="absolute top-1/4 right-0 bg-white rounded-2xl p-4 shadow-2xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                  <div className="text-5xl mb-2">🥬</div>
                  <p className="text-gray-800 font-bold text-sm">Vegetables</p>
                  <p className="text-green-600 font-bold">₹40/kg</p>
                </div>

                <div className="absolute bottom-1/4 left-0 bg-white rounded-2xl p-4 shadow-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <div className="text-5xl mb-2">🥛</div>
                  <p className="text-gray-800 font-bold text-sm">Fresh Milk</p>
                  <p className="text-green-600 font-bold">₹60/L</p>
                </div>

                <div className="absolute bottom-0 right-1/4 bg-white rounded-2xl p-4 shadow-2xl animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }}>
                  <div className="text-5xl mb-2">🍞</div>
                  <p className="text-gray-800 font-bold text-sm">Fresh Bread</p>
                  <p className="text-green-600 font-bold">₹40</p>
                </div>

                {/* Center Large Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white bg-opacity-20 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white border-opacity-30">
                  <div className="text-8xl animate-spin" style={{ animationDuration: '10s' }}>🛒</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Image */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition">
            <div className="text-6xl mb-3">🍎</div>
            <p className="font-bold">Fresh Fruits</p>
            <p className="text-sm text-green-100">Starting ₹50</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition">
            <div className="text-6xl mb-3">🥬</div>
            <p className="font-bold">Vegetables</p>
            <p className="text-sm text-green-100">Starting ₹30</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition">
            <div className="text-6xl mb-3">🥛</div>
            <p className="font-bold">Dairy</p>
            <p className="text-sm text-green-100">Starting ₹60</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition">
            <div className="text-6xl mb-3">🍞</div>
            <p className="font-bold">Bakery</p>
            <p className="text-sm text-green-100">Starting ₹40</p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;