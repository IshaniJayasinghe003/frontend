import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/overview/${product.productId}`}
      className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl hover:scale-105 transition transform duration-300"
    >
      {/* Product Image */}
      <div className="relative w-full h-60 sm:h-64 md:h-[260px] lg:h-72">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full shadow-md">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="flex flex-col p-3 sm:p-4 flex-grow">
        {/* Product ID */}
        <span className="text-gray-400 text-xs sm:text-sm mb-1">
          #{product.productId}
        </span>

        {/* Product Name */}
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">
          {product.name}
        </h1>

        {/* Price Section */}
        <div className="mt-2 sm:mt-3">
          {product.labelledPrice > product.price ? (
            <p className="text-sm sm:text-base">
              <span className="line-through text-gray-400 mr-2">
                LKR {product.labelledPrice.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <span className="text-pink-600 font-semibold">
                LKR {product.price.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
          ) : (
            <span className="text-gray-800 font-semibold text-sm sm:text-base">
              LKR {product.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          )}
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `/overview/${product.productId}`;
          }}
          className="mt-3 sm:mt-4 w-full bg-pink-500 text-white py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-pink-600 transition"
        >
          View Details
        </button>
      </div>
    </Link>
  );
}
