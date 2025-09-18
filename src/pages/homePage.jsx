// HomePage.jsx
import { Link } from "react-router-dom";
import { products } from "./ProductPage"; // ✅ import products from your product page

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16">
        {/* Left Text */}
        <div className="flex-1 space-y-6 text-left">
          <h1 className="text-5xl font-bold">
            Cosmetics <span className="text-pink-500">that</span>
            <br /> Everyone loves!
          </h1>
          <p className="text-gray-600 max-w-md">
            We have a huge collection of cosmetics in our Paris Branch.  
            Our products are always high quality and trusted by everyone.
          </p>

          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-pink-600"
          >
            Explore Products
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-12 md:mt-0">
          <img
            src="/hero_product.png" // ✅ put your image inside public folder
            alt="Hero Product"
            className="w-[400px] md:w-[500px] object-contain"
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="px-12 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="flex flex-wrap gap-6">
          {products.slice(0, 3).map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-4 border rounded-xl px-6 py-4 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-medium">{p.name}</h3>
                <p className="text-lg font-bold">${p.price}</p>
                <p className="text-sm text-gray-400">{p.discount}</p>
              </div>
            </div>
          ))}

          {/* Explore More Button */}
          <Link
            to="/products"
            className="flex items-center justify-center px-6 py-4 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600"
          >
            Explore More →
          </Link>
        </div>
      </section>
    </div>
  );
}

