import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen relative">

      {/* Top Navigation Links */}
      <div className="absolute top-0 left-0 w-full flex justify-center gap-4 sm:gap-8 p-4 z-20 bg-black/30">
        <Link to="/reviews" className="text-white text-xl font-semibold hover:text-white transition">
          Reviews
        </Link>
        <Link to="/about-us" className="text-white text-xlfont-semibold hover:text-whitetransition">
          About Us
        </Link>
        <Link to="/contact-us" className="text-white text-xl font-semibold hover:text-white transition">
          Contact Us
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex">

        {/* Background Image */}
        <img 
          src="blush.jpg" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Overlay Text */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-10 md:px-20 min-h-screen">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to Evara Cosmetics
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 max-w-3xl drop-shadow-md">
            Discover beauty that empowers you. At Evara, we bring you a hand-picked collection of skincare, makeup, haircare, and wellness products designed to enhance your natural glow. From nourishing cleansers and hydrating serums to bold lipsticks and luxury fragrances, everything you need to feel confident is right here.
          </p>
          <button 
            onClick={() => window.location.href="/products"} 
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-pink-300 text-white font-semibold rounded-full shadow-lg hover:bg-pink-400 hover:scale-105 transition transform duration-300"
          >
            Shop Now
          </button>
        </div>

      </div>
    </div>
  );
}
