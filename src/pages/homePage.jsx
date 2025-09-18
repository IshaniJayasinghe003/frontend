import ProductCard from "../components/productCard"; // adjust path
import React from "react";

export default function HomePage() {
  const products = [
    {
        productId: "COS012",
        name: "Nail Polish",
        altNames: ["Nail Color", "Varnish"],
        labelledPrice: 900,
        price: 750,
        images: ["/nail.jpg"],
        description: "Quick-drying nail polish available in multiple shades.",
        stock: 100,
        isAvailable: true,
        category: "cosmetics"
  },

  ];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="w-full h-screen flex justify-start items-center px-12 bg-white">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-accent mb-4">
            Evara Cosmetics that Everyone Loves
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover premium beauty products crafted with care and loved by
            everyone. Enhance your style with Evara Cosmetics.
          </p>
          <button className="px-10 py-4 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-300">
            Explore Products
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="w-full px-12 py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
