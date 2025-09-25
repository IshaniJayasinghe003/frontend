import { useNavigate } from "react-router-dom";

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen relative bg-gray-100">
      {/* Full Background Image */}
      <img
        src="face.jpg"
        alt="Evara Cosmetics Cover"
        className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
      />

      {/* Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start pt-16 md:pt-24 px-4 md:px-12 space-y-6 md:space-y-0 md:space-x-8">
        
        {/* Small Side Card (visible on both but left-aligned on desktop, centered on mobile) */}
        <div className="bg-pink-400/30 backdrop-blur-sm rounded-3xl shadow-2xl p-4 md:p-6 w-40 md:w-48 flex items-center justify-center">
          <p className="text-white font-bold text-sm md:text-lg text-center">
            About Evara
          </p>
        </div>

        {/* Main Card */}
        <div
          className="w-full sm:w-96 md:w-[500px] lg:w-[600px] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-left bg-cover bg-center relative"
          style={{ backgroundImage: "url('brush.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#ffe5ec]/50 backdrop-blur-sm rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-sm sm:text-base md:text-lg font-medium text-black mb-3">
              We are dedicated to bringing you a curated selection of premium skincare, makeup, haircare, and wellness products.
            </p>
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-medium text-black mb-4">
              At Evara, our mission is to inspire confidence and self-expression through high-quality, carefully selected skincare, makeup, haircare, and wellness products. We partner with brands that prioritize safety, sustainability, and ethical practices, ensuring every product supports both your well-being and the environment. Our goal is to empower customers to feel confident, cared for, and radiant every day, while embracing mindful beauty choices.
            </p>

            {/* Bullet Points */}
            <ul className="pl-4 md:pl-5 mb-4 space-y-1 sm:space-y-2 font-medium text-black">
              <li>🌿 100% Authentic & Premium Brands</li>
              <li>✨ Cruelty-Free & Sustainable</li>
              <li>💖 Empowering Confidence & Beauty</li>
              <li>🚚 Fast & Reliable Delivery</li>
            </ul>

            {/* Button */}
            <div className="flex justify-center md:justify-center">
              <button
                onClick={() => navigate("/products")}
                className="bg-pink-300 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-pink-400 transition text-sm sm:text-base"
              >
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
