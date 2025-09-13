export default function HomePage() {
  return (
    <div className="w-full relative flex flex-col px-4 md:px-12">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center">
        <img
          src="/hero_bg.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>

        {/* Text Content */}
        <div className="relative text-left text-black max-w-2xl z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-pink-600">
            Welcome to Evara Cosmetic Collection
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-blue-600">Evara Beauty</span>, we
            believe beauty is about confidence, elegance, and self-expression. 
            We are proud to bring you a premium collection of <span className="font-medium">trusted branded items</span> – 
            from luxurious skincare to professional makeup essentials – all carefully selected to match your lifestyle. 
            Whether you’re preparing for a special occasion or refreshing your daily look, 
            we’re here to provide you with the best products and services that help you glow inside and out.
          </p>

          {/* Services Cards Immediately After Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {/* Service 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-52 md:h-60">
              <img
                src="https://images.unsplash.com/photo-1583875762483-47a0c5f35a7d?auto=format&fit=crop&w=500&q=80"
                alt="Facials"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-sm md:text-lg font-semibold mb-2">Makeup Products</h3>
                <button className="bg-pink-600 px-3 py-1 rounded-lg text-xs md:text-sm">
                  See More Products →
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-52 md:h-60">
              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2e8db7d0d0?auto=format&fit=crop&w=500&q=80"
                alt="Skincare"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-sm md:text-lg font-semibold mb-2">Hair Care Products</h3>
                <button className="bg-pink-600 px-3 py-1 rounded-lg text-xs md:text-sm">
                  See More Products →
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-52 md:h-60">
              <img
                src="https://images.unsplash.com/photo-1580130852049-97ebf2e4b4e6?auto=format&fit=crop&w=500&q=80"
                alt="Makeup"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-sm md:text-lg font-semibold mb-2">Personal Care</h3>
                <button className="bg-pink-600 px-3 py-1 rounded-lg text-xs md:text-sm">
                  See More Products →
                </button>
              </div>
            </div>

            {/* Service 4 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-52 md:h-60">
              <img
                src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=500&q=80"
                alt="Hair Care"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-sm md:text-lg font-semibold mb-2">Fragrances</h3>
                <button className="bg-pink-600 px-3 py-1 rounded-lg text-xs md:text-sm">
                  See More Products →
                </button>
              </div>
            </div>

            {/* Service 5 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-52 md:h-60">
              <img
                src="https://images.unsplash.com/photo-1580130852049-97ebf2e4b4e6?auto=format&fit=crop&w=500&q=80"
                alt="Skincare"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-sm md:text-lg font-semibold mb-2">Skincare Products</h3>
                <button className="bg-pink-600 px-3 py-1 rounded-lg text-xs md:text-sm">
                  See More Products →
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}
