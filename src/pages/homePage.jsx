export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>

        {/* Text Content */}
        <div className="relative text-left text-white px-4">
          <h1 className="text-6xl font-extrabold mb-4 text-pink-600">
            Welcome to Evara Beauty
          </h1>
          <p className="text-2xl text-gray-800 mb-2">
            A Full Beauty & Co Experience
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            At <span className="font-semibold text-pink-600">Evara Beauty</span>, we
            believe beauty is about confidence, elegance, and self-expression. 
            We are proud to bring you a premium collection of <span className="font-medium">trusted branded items</span> – 
            from luxurious skincare to professional makeup essentials – all carefully selected to match your lifestyle. 
            Whether you’re preparing for a special occasion or refreshing your daily look, 
            we’re here to provide you with the best products and services that help you glow inside and out.
          </p>

        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 bg-white">
        {/* Service 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1583875762483-47a0c5f35a7d?auto=format&fit=crop&w=500&q=80"
            alt="Facials"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-xl font-semibold mb-2">Make Up </h3>
            <button className="bg-pink-600 px-4 py-2 rounded-lg">See More Products →</button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600185365926-3a2e8db7d0d0?auto=format&fit=crop&w=500&q=80"
            alt="Skincare"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-xl font-semibold mb-2">Skincare</h3>
            <button className="bg-pink-600 px-4 py-2 rounded-lg">See More Products →</button>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1580130852049-97ebf2e4b4e6?auto=format&fit=crop&w=500&q=80"
            alt="Makeup"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-xl font-semibold mb-2">Hair Care</h3>
            <button className="bg-pink-600 px-4 py-2 rounded-lg">See More Products →</button>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=500&q=80"
            alt="Hair Care"
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-xl font-semibold mb-2">Body Care</h3>
            <button className="bg-pink-600 px-4 py-2 rounded-lg">See More Products →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
