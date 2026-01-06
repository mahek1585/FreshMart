import React from "react";
import { categories } from "../data/categories"; // path adjust if needed

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);

    setTimeout(() => {
      const productsSection = document.getElementById("products-section");
      if (productsSection) {
        productsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <section className="bg-white py-8 top-12 lg:top-14 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-sm lg:text-base">
            Choose from our fresh collection
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-3 lg:gap-4 flex-wrap">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`group relative flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                    : `${category.bgColor} ${category.textColor} hover:shadow-lg`
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "animate-bounce"
                      : "group-hover:scale-110 transition"
                  }`}
                />
                <span className="text-base lg:text-lg">
                  {category.name}
                </span>

                {isActive && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden grid grid-cols-3 gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`relative flex flex-col items-center justify-center p-2 rounded-2xl font-semibold transition-all active:scale-95 ${
                  isActive
                    ? `bg-gradient-to-br ${category.color} text-white shadow-xl`
                    : `${category.bgColor} ${category.textColor}`
                }`}
              >
                <div
                  className={`text-2xl mb-2 ${
                    isActive ? "animate-bounce" : ""
                  }`}
                >
                  {category.emoji}
                </div>

                <span className="text-xs font-bold text-center">
                  {category.name}
                </span>

                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">
              {selectedCategory === "All"
                ? "Showing all products"
                : `Browsing ${selectedCategory}`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
