export default function HomePage() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex">
        <img 
          src="blush.jpg" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to Evara Cosmetics
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 max-w-3xl drop-shadow-md">
            Discover beauty that empowers you. At Evara, we bring you a hand-picked collection of skincare, makeup, haircare, and wellness products designed to enhance your natural glow. From nourishing cleansers and hydrating serums to bold lipsticks and luxury fragrances, everything you need to feel confident is right here.
          </p>
          <button 
            onClick={() => window.location.href="/products"} 
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition transform duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>

    </div>
  );
}
