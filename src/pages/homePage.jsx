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

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      Welcome to Evara Cosmetics
    </h1>
    <p className="text-lg md:text-xl text-white mb-6">
      Discover beauty that empowers you. At Evara, we bring you a hand-picked collection of skincare, makeup, haircare, and wellness products designed to enhance your natural glow. From nourishing cleansers and hydrating serums to bold lipsticks and luxury fragrances, everything you need to feel confident is right here.
    </p>
    <button 
      onClick={() => window.location.href="/products"} 
      className="px-10 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition transform duration-300"
    >
      Shop Now
    </button>
  </div>
</div>

  </div>
  );
}