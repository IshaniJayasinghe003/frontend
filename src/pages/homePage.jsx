import { Link } from "react-router-dom";



export default function HomePage() {
  // Products array (can later fetch from backend)
  const products = [
    {
      productId: "COS012",
      name: "Nail Polish",
      altNames: ["Nail Color", "Varnish"],
      labelledPrice: 900,
      price: 750,
      images: ["/images/nail_polish.jpg"],
      description: "Quick-drying nail polish available in multiple shades.",
      stock: 100,
      isAvailable: true,
      category: "cosmetics"
    },
    {
      productId: "COS013",
      name: "Luxury Face Cream",
      labelledPrice: 50,
      price: 40,
      images: ["/images/cream.png"],
      description: "Nourishing face cream for smooth skin.",
      stock: 50,
      isAvailable: true,
      category: "cosmetics"
    }
    // add more products here
  ];

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
            <Link
              to="/products"
              className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition"
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 flex justify-center items-center">
          <img
            src="/splash.png"
            alt="Splash"
            className="absolute w-72 h-72 md:w-[500px] md:h-[500px] object-contain"
          />
          <img
            src="/product.png"
            alt="Product"
            className="relative w-56 md:w-96 object-contain"
          />
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="px-6 md:px-20 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {products.map((product) => (
            <div
              key={product.productId}
              className="flex flex-col items-center border rounded-xl shadow-md p-4 w-full max-w-xs hover:shadow-lg transition"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
              <p className="text-gray-500 line-through">{product.labelledPrice} LKR</p>
              <p className="text-green-600 font-bold">{product.price} LKR</p>
              <p className="mt-2 text-sm text-gray-600 text-center">{product.description}</p>

              <Link
                to={`/products/${product.productId}`}
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition"
              >
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
