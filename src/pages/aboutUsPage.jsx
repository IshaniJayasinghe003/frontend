import { useNavigate } from "react-router-dom";

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative">
      {/* Full Background Image */}
      <img
        src="face.jpg"
        alt="Evara Cosmetics Cover"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Center Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-8">
        
        {/* Small Title Card */}
        <div className="w-96 md:w-[500px] lg:w-[600px] h-[100px] rounded-3xl shadow-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center">
          <p className="text-white font-bold text-xl md:text-2xl">Evara Cosmetics</p>
        </div>

        {/* Main Card */}
        <div
          className="w-96 md:w-[500px] lg:w-[600px] rounded-3xl shadow-2xl p-8 md:p-12 text-center bg-cover bg-center relative"
          style={{ backgroundImage: "url('brush.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Evara</h1>
            <p className="text-base md:text-lg text-white mb-4">
              We are dedicated to bringing you a curated selection of premium
              skincare, makeup, haircare, and wellness products.
            </p>
            <p className="font-bold text-white mb-4">
              Our mission is simple: to empower your natural beauty with trusted
              brands that are safe, sustainable, and effective. At Evara, we
              believe in self-care, confidence, and conscious beauty.
            </p>

            {/* Bullet Points */}
            <ul className="pl-5 mb-6 font-bold space-y-2 inline-block text-left">
              <li>🌿 <span className="text-white font-medium">100% Authentic & Premium Brands</span></li>
              <li>✨ <span className="text-white font-medium">Cruelty-Free & Sustainable</span></li>
              <li>💖 <span className="text-white font-medium">Empowering Confidence & Beauty</span></li>
              <li>🚚 <span className="text-white font-medium">Fast & Reliable Delivery</span></li>
            </ul>

            {/* Button */}
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
