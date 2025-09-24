import { useNavigate } from "react-router-dom";

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen relative">
      {/* Full Background Image */}
      <img
        src="face.jpg"
        alt="Evara Cosmetics Cover"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Top-aligned Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-start pt-16 md:pt-20 lg:pt-24 space-y-6 md:space-y-8">
        
       {/* Main Card */}
        <p className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center px-4">
            About Evara
          </p>
        <div
        className="w-11/12 sm:w-96 md:w-[500px] lg:w-[600px] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-center bg-cover bg-center relative"
          style={{ backgroundImage: "url('brush.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 text-left md:text-center">
            <p className="text-sm sm:text-base md:text-lg font-bold text-white mb-3">
              We are dedicated to bringing you a curated selection of premium skincare, makeup, haircare, and wellness products.
            </p>
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-bold text-white mb-4">
              At Evara, our mission is to inspire confidence and self-expression through high-quality, carefully selected skincare, makeup, haircare, and wellness products. We partner with brands that prioritize safety, sustainability, and ethical practices, ensuring every product supports both your well-being and the environment. Our goal is to empower customers to feel confident, cared for, and radiant every day, while embracing mindful beauty choices.
            </p>

            {/* Bullet Points */}
            <ul className="pl-4 md:pl-5 mb-4 space-y-1 sm:space-y-2 font-medium text-white">
              <li>🌿 100% Authentic & Premium Brands</li>
              <li>✨ Cruelty-Free & Sustainable</li>
              <li>💖 Empowering Confidence & Beauty</li>
              <li>🚚 Fast & Reliable Delivery</li>
            </ul>

            {/* Button */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/products")}
                className="bg-pink-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-pink-700 transition text-sm sm:text-base"
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
