export default function HomePage() {
  return (
    <div className="relative w-full h-screen flex">
      
      {/* Background Image */}
      <img 
        src="face.jpg" 
        alt="Hero" 
        className="w-full h-full object-cover" 
      />

      {/* Overlay Content */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white z-20 max-w-md">
        
        {/* Website Name */}
        <div className="text-6xl font-semibold font-sans mb-4 drop-shadow-lg">
          Evara Cosmetics
        </div>

        {/* Tagline */}
        <h1 className="text-3xl font-sans mb-4">
          Glow Naturally, Shine Confidently
        </h1>

        {/* Paragraph */}
        <p className="text-lg leading-relaxed mb-6">
          Discover premium beauty products crafted with natural ingredients.
          From nourishing skincare to vibrant makeup, Evara Cosmetics helps you enhance your radiance
          and confidence every day. Elegance, care, and quality in every product.
        </p>

        {/* Call-to-Action Button */}
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>
    </div>
  )
}
