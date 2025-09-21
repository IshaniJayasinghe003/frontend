export default function HomePage() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="relative w-full min-h-[90vh] flex">
        <img 
          src="face.jpg" 
          alt="Hero" 
          className="w-full h-full object-cover" 
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>

        {/* Overlay Content */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white z-20 max-w-md animate-fadeIn">
          <div className="text-6xl font-bold font-poppins mb-4 drop-shadow-xl">
            Evara Cosmetics
          </div>

          <h1 className="text-3xl font-poppins font-semibold mb-4 text-gray-200">
            Luxury Cosmetics, Everyday Confidence
          </h1>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Evara Cosmetics offers a curated selection of premium branded makeup and beauty products. 
            Find your favorites and elevate your style every day.
          </p>

          {/* Scroll Indicator with icon */}
          <div className="mt-6 text-gray-300 text-xl font-semibold animate-bounce flex items-center gap-2">
            <span>Scroll</span>
            <span className="text-2xl">↓</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-10 bg-gray-50">
        <h2 className="text-4xl font-poppins font-bold mb-12 text-center text-gray-800">
          Why Choose Evara?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl hover:scale-105 transition transform duration-300">
            <img 
              src="cos.jpeg" 
              alt="Premium Quality" 
              className="w-40 h-40 object-cover mx-auto mb-4 rounded-full hover:scale-110 transition" 
            />
            <h3 className="font-poppins text-2xl font-bold text-black mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600 text-base">
              Only the best branded cosmetics to ensure your confidence and style.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl hover:scale-105 transition transform duration-300">
            <img 
              src="bran.jpg" 
              alt="Trusted Brands" 
              className="w-40 h-40 object-cover mx-auto mb-4 rounded-full hover:scale-110 transition" 
            />
            <h3 className="font-poppins text-2xl font-bold text-black mb-2">
              Trusted Brands
            </h3>
            <p className="text-gray-600 text-base">
              Curated selection of globally recognized and trusted cosmetics brands.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl hover:scale-105 transition transform duration-300">
            <img 
              src="deli.webp" 
              alt="Fast Delivery" 
              className="w-40 h-40 object-cover mx-auto mb-4 rounded-full hover:scale-110 transition" 
            />
            <h3 className="font-poppins text-2xl font-bold text-black mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-base">
              Quick and reliable delivery so you can enjoy your products sooner.
            </p>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-10 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center rounded-t-lg">
        <h2 className="text-4xl font-poppins font-bold mb-4">
          Ready to Elevate Your Look?
        </h2>
        <p className="mb-8 text-lg">
          Explore our full collection of premium cosmetics and find your favorites today.
        </p>
        <button 
          onClick={() => window.location.href="/products"} 
          className="px-10 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition transform duration-300"
        >
          Shop Now
        </button>
      </div>

    </div>
  );
}
