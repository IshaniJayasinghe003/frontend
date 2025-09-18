export default function HomePage() {
  return (
    <div className="w-full h-screen flex justify-start items-center px-12">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-accent mb-4">
          Evara Cosmetics that Everyone Loves
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover premium beauty products crafted with care and loved by
          everyone. Enhance your style with Evara Cosmetics.
        </p>
        <button className="px-10 py-4 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-300">
          Explore Products
        </button>
        </div>
    </div>
  );
}
