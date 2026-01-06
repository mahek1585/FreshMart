import React from 'react';
import ProductCard from './ProductCard';
import { Package } from 'lucide-react';

const ProductGrid = ({ products, addToCart, toggleFavorite, favorites }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
            Fresh Products
          </h2>
          <p className="text-gray-600">
            {products.length} products found
          </p>
        </div>
        
        {/* Sort Dropdown (Optional) */}
        <select className="hidden md:block px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(product.id)}
            />
          ))}
        </div>
      ) : (
        // No Products Found
        <div className="text-center py-20">
          <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            No Products Found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;