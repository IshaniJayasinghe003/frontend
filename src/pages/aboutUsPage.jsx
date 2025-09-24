import { useNavigate } from "react-router-dom";

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative">
      {/* Full Background Image */}
      <img
        src="items.webp"
        alt="Evara Cosmetics Cover"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Center Card with side margin */}
      <div className="relative z-10 flex justify-start items-center w-full h-full">
        <div
          className="rounded-3xl shadow-2xl p-10 max-w-md text-center mx-8 bg-cover bg-center relative"
          style={{ backgroundImage: "url('blush.jpg')" }} // 👈 image for card background
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl"></div>

          {/* Content above overlay */}
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Evara</h1>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              We are dedicated to bringing you a curated selection of premium
              skincare, makeup, haircare, and wellness products.
            </p>
            <p className="font-bold text-gray-900 mb-4">
              Our mission is simple: to empower your natural beauty with trusted
              brands that are safe, sustainable, and effective. At Evara, we
              believe in self-care, confidence, and conscious beauty.
            </p>

            {/* Bullet Points */}
            <ul className="pl-5 mb-6 space-y-2 inline-block text-left">
              <li>🌿 <span className="text-gray-800 font-medium">100% Authentic & Premium Brands</span></li>
              <li>✨ <span className="text-gray-800 font-medium">Cruelty-Free & Sustainable</span></li>
              <li>💖 <span className="text-gray-800 font-medium">Empowering Confidence & Beauty</span></li>
              <li>🚚 <span className="text-gray-800 font-medium">Fast & Reliable Delivery</span></li>
            </ul>

            {/* Navigate to Product Page */}
            <button
              onClick={() => navigate("/products")}
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
