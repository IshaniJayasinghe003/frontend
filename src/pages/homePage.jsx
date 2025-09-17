export default function HomePage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-0">
        
        {/* Left Content */}
        <div className="flex flex-col max-w-lg text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Cosmetics that <br /> <span className="text-pink-600">Everyone loves!</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            We have a huge collection for cosmetics in our Paris Branch. 
            Our products are always quality products.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition">
              Explore Products
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Splash Background */}
          <img
            src="/splash.png" // add your pink splash background
            alt="Splash"
            className="absolute w-72 h-72 md:w-[500px] md:h-[500px] object-contain"
          />
          {/* Product Image */}
          <img
            src="/product.png" // add your cosmetic tube image
            alt="Product"
            className="relative w-56 md:w-96 object-contain"
          />
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-6 md:px-12 py-12">
        
        {/* Card 1 */}
        <div className="flex items-center gap-4 border rounded-xl shadow-md p-4 w-full max-w-xs hover:shadow-lg transition">
          <img
            src="/perfume1.png"
            alt="Cool Water by Davidoff"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
          <div>
            <h3 className="text-sm md:text-base text-gray-700">Cool Water by Davidoff</h3>
            <p className="text-lg font-bold">$25.50</p>
            <p className="text-pink-500 text-sm">-35%</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 border rounded-xl shadow-md p-4 w-full max-w-xs hover:shadow-lg transition">
          <img
            src="/perfume2.png"
            alt="Diamonds Rose"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
          <div>
            <h3 className="text-sm md:text-base text-gray-700">Diamonds Rose</h3>
            <p className="text-lg font-bold">$25.50</p>
            <p className="text-pink-500 text-sm">-35%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
