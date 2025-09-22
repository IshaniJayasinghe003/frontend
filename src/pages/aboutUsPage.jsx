export default function AboutUsPage() {
  return (
    <div className="w-full h-screen relative">
      {/* Cover Image */}
      <img 
        src="usp.webp" 
        alt="Evara Cosmetics Cover" 
        className="w-full h-full object-cover"
      />
      
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      
      {/* Overlay Text on the Right */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-right max-w-md px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
        <p className="text-lg md:text-xl text-white mb-4">
          We are dedicated to bringing you a curated selection of premium skincare, makeup, haircare, and wellness products.
        </p>
        <p className="text-white mb-6">
          Our mission is simple: to empower your natural beauty with trusted brands that are safe, sustainable, and effective. At Evara, we believe in self-care, confidence, and conscious beauty.
        </p>

        {/* Bullet Points */}
        <ul className="list-disc text-lg pl-5 text-white space-y-2 mb-6">
          <li>🌿 <span className="text-pink-400 font-medium">100% Authentic & Premium Brands</span></li>
          <li>✨ <span className="text-pink-400 font-medium">Cruelty-Free & Sustainable</span></li>
          <li>💖 <span className="text-pink-400 font-medium">Empowering Confidence & Beauty</span></li>
          <li>🚚 <span className="text-pink-400 font-medium">Fast & Reliable Delivery</span></li>
        </ul>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition">
          Explore Products
        </button>
      </div>
    </div>
  );
}
