export default function HomePage() {
  return (
    <div className="relative w-full h-screen flex">
      
      {/* Background Image */}
      <img 
        src="face.jpg" 
        alt="Hero" 
        className="w-full h-full object-cover" 
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Overlay Content */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white z-20 max-w-md animate-fadeIn">
        
        {/* Website Name */}
        <div className="text-6xl font-bold font-Raleway mb-4 drop-shadow-xl">
          Evara Cosmetics
        </div>

        {/* Tagline */}
        <h1 className="text-3xl font-serif italic mb-4">
          Glow Naturally, Shine Confidently
        </h1>

        {/* Paragraph */}
        <p className="text-lg leading-relaxed mb-6 text-gray-200">
          Discover premium beauty products crafted with natural ingredients.
          From nourishing skincare to vibrant makeup, Evara helps you embrace
          elegance, radiance, and confidence every day.
        </p>

        {/* Call-to-Action Button */}
        <button className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  )
}
