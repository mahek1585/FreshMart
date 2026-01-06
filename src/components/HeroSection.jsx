import React from 'react';
import { Search, TrendingUp, Shield, Truck, Tag } from 'lucide-react';

/* ---------- CONSTANT DATA (NO UI CHANGE) ---------- */

const popularSearches = ['Apples', 'Milk', 'Bread', 'Vegetables'];

const stats = [
  { icon: Shield, value: '100%', label: 'Quality' },
  { icon: Truck, value: '2 Hours', label: 'Delivery' },
  { icon: Tag, value: '50%', label: 'Off Deals' },
];

const floatingProducts = [
  { emoji: '🍎', name: 'Fresh Apples', price: '₹120/kg', className: 'top-0 left-1/4 -translate-x-1/2', duration: '3s',},
  { emoji: '🥬', name: 'Vegetables', price: '₹40/kg', className: 'top-1/4 right-0', duration: '3.5s', delay: '0.5s', },
  { emoji: '🥛', name: 'Fresh Milk', price: '₹60/L', className: 'bottom-1/4 left-0', duration: '4s', delay: '1s', },
  { emoji: '🍞', name: 'Fresh Bread',price: '₹40', className: 'bottom-0 right-1/4', duration: '3.2s', delay: '0.3s', },
];

const mobileCards = [
  { emoji: '🍎', title: 'Fresh Fruits', price: 'Starting ₹50' },
  { emoji: '🥬', title: 'Vegetables', price: 'Starting ₹30' },
  { emoji: '🥛', title: 'Dairy', price: 'Starting ₹60' },
  { emoji: '🍞', title: 'Bakery', price: 'Starting ₹40' },
];

/* ---------- COMPONENT ---------- */

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = () => {
    const section = document.getElementById('products-section');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero-section"
      className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-96 h-96 bg-emerald-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-400 opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ---------- LEFT ---------- */}
          <div className="space-y-6 text-center lg:text-left z-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold text-black">
                Fresh Deals Every Day
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Fresh Groceries
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Delivered to Your Door
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-green-50 max-w-xl mx-auto lg:mx-0">
              Get farm-fresh fruits, vegetables, and daily essentials delivered
              within 2 hours. Quality guaranteed!
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-600" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Try: apple, milk, bread, vegetables..."
                  className="w-full pl-14 pr-32 py-4 rounded-2xl text-gray-900 bg-white shadow-2xl focus:ring-4 focus:ring-green-300 outline-none"
                />
                <button
                  onClick={() =>
                    searchQuery ? setSearchQuery('') : handleSearch()
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2.5 rounded-xl font-semibold hover:scale-105 transition"
                >
                  {searchQuery ? 'Clear' : 'Search'}
                </button>
              </div>

              {/* Popular */}
              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="text-xs text-green-100">Popular:</span>
                {popularSearches.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSearchQuery(item);
                      setTimeout(handleSearch, 100);
                    }}
                    className="px-3 py-1 bg-white/20 text-black rounded-full text-xs hover:bg-opacity-30"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 text-green-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="text-sm text-green-100">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- RIGHT ---------- */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />

              {floatingProducts.map((item) => (
                <div
                  key={item.name}
                  className={`absolute ${item.className} bg-white p-4 rounded-2xl shadow-2xl animate-bounce`}
                  style={{
                    animationDuration: item.duration,
                    animationDelay: item.delay,
                  }}
                >
                  <div className="text-5xl mb-2">{item.emoji}</div>
                  <p className="font-bold text-sm text-gray-800">{item.name}</p>
                  <p className="text-green-600 font-bold">{item.price}</p>
                </div>
              ))}

              {/* Center */}
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
                <div className="text-8xl animate-spin" style={{ animationDuration: '10s' }}>
                  🛒
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- MOBILE ---------- */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-4">
          {mobileCards.map((card) => (
            <div
              key={card.title}
              className="bg-white/10 rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <div className="text-6xl mb-3">{card.emoji}</div>
              <p className="font-bold">{card.title}</p>
              <p className="text-sm text-green-100">{card.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
