export default function AboutUsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-gray-50">
      
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
        <img 
          src="abus.jpg" 
          alt="Evara Cosmetics" 
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
      
      {/* Right Side - Info */}
      <div className="md:w-1/2 w-full md:pl-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-6 text-white-800">About Evara</h1>
        
        <p className="text-xl text-bold text-gray-700 mb-4 leading-relaxed">
          Welcome to <span className="font-semibold">Evara Cosmetics</span>!  
          We are dedicated to bringing you a curated selection of premium 
          skincare, makeup, haircare, and wellness products.
        </p>

        <p className="text-lg text-bold text-gray-600 mb-4 leading-relaxed">
          Our mission is simple: to empower your natural beauty with trusted 
          brands that are safe, sustainable, and effective. At Evara, we 
          believe in self-care, confidence, and conscious beauty.
        </p>

        <ul className="list-disc text-lg pl-5 text-gray-600 mb-6">
          <li>🌿 100% Authentic & Premium Brands</li>
          <li>✨ Cruelty-Free & Sustainable</li>
          <li>💖 Empowering Confidence & Beauty</li>
          <li>🚚 Fast & Reliable Delivery</li>
        </ul>

        <p className="text-gray-700 font-medium">
          Discover beauty that feels as good as it looks — only at Evara.
        </p>
      </div>
    </div>
  )
}
