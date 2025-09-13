export default function HomePage() {
  return (
    <div className="flex items-center justify-between min-h-screen bg-gray-50 px-10">
      
      {/* Left Side - Text */}
      <div className="w-1/2 pr-10">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Glow with Confidence
        </h1>
        <p className="text-2xl text-blue-500 mb-4">
          Beauty that celebrates you!
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At <span className="font-semibold">[Your Brand Name]</span>, we believe
          beauty is about self-expression and confidence. Explore our latest
          collections and discover the glow that’s uniquely yours.
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-700 transition">
          Shop Now
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1616422276123-2ecb43f1f2d7?auto=format&fit=crop&w=800&q=80"
          alt="Cosmetics Banner"
          className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}

