import { useNavigate } from "react-router-dom";

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative">
      {/* Cover Image */}
      <img 
        src="usp.webp" 
        alt="Evara Cosmetics Cover" 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay for slight dim effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

      {/* Transparent White Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl 
                      p-10 max-w-lg text-center">
        {/* All content centered */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Evara</h1>
        <p className="text-lg text-gray-700 mb-4">
          We are dedicated to bringing you a curated selection of premium skincare, makeup, haircare, and wellness products.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is simple: to empower your natural beauty with trusted brands that are safe, sustainable, and effective. At Evara, we believe in self-care, confidence, and conscious beauty.
        </p>

        {/* Bullet Points */}
        <ul className="list-disc text-gray-600 pl-5 mb-6 space-y-2 inline-block text-left">
          <li>🌿 <span className="text-pink-400 font-medium">100% Authentic & Premium Brands</span></li>
          <li>✨ <span className="text-pink-400 font-medium">Cruelty-Free & Sustainable</span></li>
          <li>💖 <span className="text-pink-400 font-medium">Empowering Confidence & Beauty</span></li>
          <li>🚚 <span className="text-pink-400 font-medium">Fast & Reliable Delivery</span></li>
        </ul>

        {/* Navigate to Product Page */}
        <button
          onClick={() => navigate("/products")} // Replace "/products" with your actual product page route
          className="bg-white  text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}
