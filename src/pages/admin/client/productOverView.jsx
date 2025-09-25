import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "../../../components/loader";
import ImageSlider from "../../../components/imageSlider";
import { addToCart, getCart } from "../../../utils/cart";

export default function ProductOverViewPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); // loading, success, error

  useEffect(() => {
    if (status === "loading") {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${params.productId}`)
        .then((res) => {
          setProduct(res.data);
          setStatus("success");
        })
        .catch(() => {
          setStatus("error");
        });
    }
  }, [status, params.productId]);

  if (status === "loading") return <Loader />;
  if (status === "error") return <div className="text-center text-red-500 mt-10">Error loading product</div>;

  return (
    <div className="w-full min-h-screen bg-gray-50 py-6 px-4 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Left: Image Slider */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-white rounded-2xl shadow-lg p-4">
          <ImageSlider images={product.images} />
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-start bg-white rounded-2xl shadow-lg p-6 md:p-8">
          
          {/* Product Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            {product.name}{" "}
            <span className="font-light text-gray-500 text-sm sm:text-base">
              {product.altNames.join(" | ")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-3">
            {product.description}
          </p>

          {/* Price Section */}
          <div className="mt-6 flex items-baseline gap-4">
            {product.labelledPrice > product.price ? (
              <>
                <span className="text-gray-400 text-lg line-through">
                  LKR {product.labelledPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-pink-600 text-3xl font-bold">
                  LKR {product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </>
            ) : (
              <span className="text-gray-800 text-3xl font-bold">
                LKR {product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                navigate("/checkout", {
                  state: {
                    items: [
                      {
                        productId: product.productId,
                        quantity: 1,
                        name: product.name,
                        image: product.images[0],
                        price: product.price,
                      },
                    ],
                  },
                });
              }}
              className="w-full sm:w-1/2 py-3 bg-pink-900 text-white font-semibold rounded-xl shadow-lg hover:bg-white hover:text-pink-900 hover:border hover:border-pink-900 transition"
            >
              Buy Now
            </button>

            <button
              onClick={() => {
                addToCart(product, 1);
                toast.success("Product added to cart");
              }}
              className="w-full sm:w-1/2 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow-lg hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
