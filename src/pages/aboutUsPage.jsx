export default function AboutUsPage() {
  return (
    <div className="w-full h-screen relative flex">
  <img src="usp.webp" alt="Evara Cosmetics Cover" className="w-full h-full object-cover" />
  
  {/* Dark overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
  
  {/* Overlay Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
    <p className="text-lg md:text-xl text-white mb-6">
      We are dedicated to bringing you a curated selection of premium skincare, makeup, haircare, and wellness products.
    </p>
    <p className="text-white mb-6">
      Our mission is simple: to empower your natural beauty with trusted brands that are safe, sustainable, and effective. At Evara, we believe in self-care, confidence, and conscious beauty.
    </p>
    <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition">
      Explore Products
    </button>
  </div>
</div>

  );
}