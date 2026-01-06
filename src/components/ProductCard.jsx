import React from 'react';
import { Heart, Star, Plus, ShoppingCart, Zap } from 'lucide-react';

const ProductCard = ({ product, addToCart, toggleFavorite, isFavorite }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      {/* Product Image Section */}
      <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 p-8 overflow-hidden">
        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-10 group/heart"
        >
          <Heart
            className={`w-5 h-5 transition-all duration-300 ${
              isFavorite 
                ? 'fill-red-500 text-red-500 scale-110' 
                : 'text-gray-400 group-hover/heart:text-red-400'
            }`}
          />
        </button>

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1 animate-pulse">
            <Zap className="w-3 h-3" />
            <span>{product.discount}% OFF</span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-block bg-white bg-opacity-90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            {product.category}
          </span>
        </div>

        {/* Product Emoji/Image */}
        <div className="text-8xl text-center group-hover:scale-110 transition-transform duration-500 my-4">
          {product.image}
        </div>

        {/* Decorative Circle */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
      </div>

      {/* Product Details Section */}
      <div className="p-5">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2 font-medium">
            {product.rating}
          </span>
          <span className="text-xs text-gray-400 ml-1">
            ({product.reviews || '120'})
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-black text-green-600">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500 font-medium">
              per {product.unit}
            </span>
          </div>

          {/* Stock Badge */}
          <div className={`px-2.5 py-1 rounded-full text-xs font-bold ${
            product.inStock 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          className={`w-full py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 group/btn ${
            product.inStock
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl hover:scale-105 active:scale-95'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className={`w-5 h-5 ${product.inStock ? 'group-hover/btn:animate-bounce' : ''}`} />
          <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
        </button>

        {/* Quick View Link */}
        <button className="w-full mt-2 text-sm text-gray-600 hover:text-green-600 font-medium transition-colors">
          Quick View →
        </button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-400 to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
    </div>
  );
};

export default ProductCard;