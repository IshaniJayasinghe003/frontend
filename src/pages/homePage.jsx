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
    <div className="w-full bg-white">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center h-[80vh] px-12 gap-12">
        
        {/* Left Column: Text + Button */}
        <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold text-accent mb-3">
            Evara Cosmetics that Everyone Loves
          </h1>
          <p className="text-lg text-gray-600 mb-3">
            Discover premium beauty products crafted with care and loved by everyone. Enhance your style with Evara Cosmetics.
          </p>
          <button className="px-10 py-4 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-300">
            Explore Products
          </button>

        </div>

        {/* Right Column: Hero Background Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/hero_bg.jpg" alt="Hero Cosmetics" className="w-full max-w-lg rounded-lg shadow-lg" />
        </div>

      </div>

      {/* Featured Products Section */}
      <div className="w-full px-12 pt-2 pb-6 bg-white">
        <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
          {products.map((product) => (
            <div key={product.productId} className="snap-start flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
