export default function HomePage() {
  return (
    <div className="w-full relative flex flex-col px-4 md:px-12">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-start">
        {/* Background Image */}
        <img
          src="/hero_bg.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>

        {/* Text + Small Circle Image */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-left text-black px-4 md:px-12 max-w-5xl">
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Welcome to Evara Cosmetic Collection
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-semibold text-blue-600">Evara Beauty</span>, we
              believe beauty is about confidence, elegance, and self-expression. 
              We are proud to bring you a premium collection of{" "}
              <span className="font-medium">trusted branded items</span> – 
              from luxurious skincare to professional makeup essentials – all carefully selected to match your lifestyle. 
              Whether you’re preparing for a special occasion or refreshing your daily look, 
              we’re here to provide you with the best products and services that help you glow inside and out.
            </p>
          </div>


          {/* Small Circle Image */}
          <div className="mt-6 md:mt-0 md:ml-12 flex-shrink-0">
            <img
              src="/small_product.jpg" // replace with your small image
              alt="small product"
              className="w-56 h-56 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10 bg-white">
        {/* Service 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1583875762483-47a0c5f35a7d?auto=format&fit=crop&w=500&q=80"
            alt="Makeup"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-lg font-semibold mb-2">Makeup Products</h3>
            <button className="bg-pink-600 px-4 py-2 rounded-lg">See More →</button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600185365926-3a2e8db7d0d0?auto=format&fit=crop&w=500&q=80"
            alt="Hair Care"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-lg font-semibold mb-2">Hair Care Products</h3>
            <button className="bg-pink-600 px-4 py-2 rounded-lg">See More →</button>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1580130852049-97ebf2e4b4e6?auto=format&fit=crop&w=500&q=80"
            alt="Personal Care"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-lg font-semibold mb-2">Personal Care</h3>
            <button className="bg-pink-600 px-4 py-2 rounded-lg">See More →</button>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=500&q=80"
            alt="Fragrances"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-lg font-semibold mb-2">Fragrances</h3>
            <button className="bg-pink-600 px-4 py-2 rounded-lg">See More →</button>
          </div>
        </div>

        {/* Service 5 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600185365926-3a2e8db7d0d0?auto=format&fit=crop&w=500&q=80"
            alt="Skincare"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-lg font-semibold mb-2">Skincare Products</h3>
            <button className="bg-pink-600 px-4 py-2 rounded-lg">See More →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
