export default function AboutUsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 
    bg-gradient-to-r from-pink-50 via-white to-purple-50">
      
      {/* Left Side - Images */}
      <div className="md:w-1/2 w-full flex flex-col items-center mb-8 md:mb-0">
        {/* Big Cover Image */}
        <img 
          src="usp.webp" 
          alt="Evara Cosmetics Cover" 
          className="rounded-2xl shadow-lg w-full max-w-md object-cover mb-6"
        />

        {/* Small Image */}
        <img 
          src="small.webp" 
          alt="Evara Cosmetics Small" 
          className="rounded-xl shadow-md w-2/3 max-w-sm object-cover"
        />
      </div>
      
      {/* Right Side - Info */}
      <div className="md:w-1/2 w-full md:pl-12 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Evara</h1>
        
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-pink-600">Evara Cosmetics</span>!  
          We are dedicated to bringing you a curated selection of premium 
          skincare, makeup, haircare, and wellness products.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          Our mission is simple: to empower your natural beauty with trusted 
          brands that are safe, sustainable, and effective. At Evara, we 
          believe in self-care, confidence, and conscious beauty.
        </p>

        <ul className="list-disc text-lg pl-5 text-gray-600 space-y-2">
          <li>🌿 <span className="text-pink-600 font-medium">100% Authentic & Premium Brands</span></li>
          <li>✨ <span className="text-pink-600 font-medium">Cruelty-Free & Sustainable</span></li>
          <li>💖 <span className="text-pink-600 font-medium">Empowering Confidence & Beauty</span></li>
          <li>🚚 <span className="text-pink-600 font-medium">Fast & Reliable Delivery</span></li>
        </ul>

        <p className="text-gray-700 font-medium">
          Discover beauty that feels as good as it looks — only at <span className="text-pink-600">Evara</span>.
        </p>
      </div>
    </div>
  )
}
