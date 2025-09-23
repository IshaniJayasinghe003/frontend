import { useNavigate } from "react-router-dom";

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex">
      {/* Left Side - Image */}
      <div className="w-1/2 h-full">
        <img
          src="face.jpg"
          alt="Evara Cosmetics Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Transparent Card */}
      <div className="w-1/2 flex justify-center items-center p-8">
        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-md text-center">
          <h1 className="text-4xl font-bold text-black-800 mb-4">About Evara</h1>
          <p className="text-lg font-semibold text-black-700 mb-4">
            We are dedicated to bringing you a curated selection of premium
            skincare, makeup, haircare, and wellness products.
          </p>
          <p className="text-black-600 mb-4">
            Our mission is simple: to empower your natural beauty with trusted
            brands that are safe, sustainable, and effective. At Evara, we
            believe in self-care, confidence, and conscious beauty.
          </p>

          {/* Bullet Points */}
          <ul className="pl-5 mb-6 space-y-2 inline-block text-left">
            <li>
              🌿{" "}
              <span className="text-black-500 font-medium">
                100% Authentic & Premium Brands
              </span>
            </li>
            <li>
              ✨{" "}
              <span className="text-black-500 font-medium">
                Cruelty-Free & Sustainable
              </span>
            </li>
            <li>
              💖{" "}
              <span className="text-black-500 font-medium">
                Empowering Confidence & Beauty
              </span>
            </li>
            <li>
              🚚{" "}
              <span className="text-black-500 font-medium">
                Fast & Reliable Delivery
              </span>
            </li>
          </ul>

          {/* Navigate to Product Page */}
          <button
            onClick={() => navigate("/products")}
            className="bg-white-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-white-700 transition"
          >
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
}
