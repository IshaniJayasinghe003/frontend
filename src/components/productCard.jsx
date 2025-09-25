import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/overview/${product.productId}`}
      className="w-[300px] h-[420px] flex flex-col shrink-0 rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl hover:scale-105 transition transform duration-300"
    >
      {/* Product Image */}
      <div className="relative w-full h-[260px]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="flex flex-col p-4 flex-grow">
        {/* Product ID (small + subtle) */}
        <span className="text-gray-400 text-xs mb-1">
          #{product.productId}
        </span>

        {/* Product Name */}
        <h1 className="text-lg font-bold text-gray-800 truncate">
          {product.name}
        </h1>

        {/* Price Section */}
        <div className="mt-3">
          {product.labelledPrice > product.price ? (
            <p className="text-sm">
              <span className="line-through text-gray-400 mr-2">
                ${product.labelledPrice.toFixed(2)}
              </span>
              <span className="text-pink-600 font-semibold">
                ${product.price.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
          ) : (
            <span className="text-gray-800 font-semibold">
              ${product.price.toLocaleString("en-US", {
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
          className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          View Details
        </button>
      </div>
    </Link>
  );
}
