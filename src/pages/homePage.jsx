export default function HomePage() {
  return (
    <div className="w-full relative flex flex-col bg-purple-100">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-start">
        {/* Background Image */}
       <div className="w-full h-screen bg-[url(./hero_bg.jpg)]bg-cover bg-center flex justify-center"></div>

        
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>

        {/* Text + Circle Image */}
        <div className="relative z-10 flex flex-col md:flex-row max-w-7xl px-8 md:px-20 items-start">
          {/* Text Section */}
          <div className="flex-1 pr-0 md:pr-16 mb-4 md:mb-0"> {/* Reduced margin bottom */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4"> {/* Reduced mb */}
              Welcome to Evara Collection
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-4"> {/* Reduced mb */}
              At <span className="font-semibold text-blue-600">Evara Beauty</span>, we
              believe beauty is about confidence, elegance, and self-expression. 
              We are proud to bring you a premium collection of{" "}
              <span className="font-medium">trusted branded items</span> – 
              from luxurious skincare to professional makeup essentials – all carefully selected to match your lifestyle. 
              Whether you’re preparing for a special occasion or refreshing your daily look, 
              we’re here to provide you with the best products and services that help you glow inside and out.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5"> {/* Reduced gap */}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                See More
              </button>
              <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
                Contact Now
              </button>
            </div>
          </div>

          {/* Circle Image */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/small_product.jpg"
              alt="small product"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Collections Section */}
      <div className="bg-white pt-2 pb-4"> {/* Reduced padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center"> {/* Reduced mb */}
            Our Collections
          </h2>
          <p className="text-lg text-gray-600 mb-3 text-center"> {/* Added mb for smaller gap above cards */}
            At Evara, we offer a wide range of collections to help you look and feel your best.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-white"> {/* Reduced gap and padding */}
        {/* Service 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1583875762483-47a0c5f35a7d?auto=format&fit=crop&w=500&q=80"
            alt="Makeup"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-lg font-semibold mb-2">Makeup Products</h3>
           
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
            
          </div>
        </div>
      </div>
    </div>
  );
}
