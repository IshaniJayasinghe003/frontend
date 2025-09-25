import { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cart, setCart] = useState(location.state?.items || []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to checkout");
      navigate("/login");
      return;
    }

    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setName(res.data.firstName + " " + res.data.lastName);
      })
      .catch(() => {
        toast.error("Failed to fetch user details");
      });

    if (!location.state?.items) {
      toast.error("Please select items to checkout");
      navigate("/products");
    }
  }, []);

  function getTotal() {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }

  async function placeOrder() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }
    if (!name || !address || !phone) {
      toast.error("Please fill all the fields");
      return;
    }

    const order = {
      address,
      phone,
      items: cart.map((item) => ({
        productId: item.productId,
        qty: item.quantity,
      })),
    };

    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/orders", order, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Order placed successfully");
    } catch {
      toast.error("Failed to place order");
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 px-4 sm:px-10 py-6 flex flex-col items-center gap-6">
      {cart.map((item, index) => (
        <div
          key={item.productId}
          className="w-full max-w-4xl bg-white rounded-xl shadow-lg flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-4 relative"
        >
          {/* Image */}
          <img
            src={item.image}
            className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-lg"
          />

          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            <span className="text-gray-500 text-sm sm:text-base">#{item.productId}</span>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">{item.name}</h2>
            <span className="text-pink-600 font-semibold text-lg sm:text-xl">
              LKR {item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const newCart = [...cart];
                newCart[index].quantity -= 1;
                if (newCart[index].quantity <= 0) newCart.splice(index, 1);
                setCart(newCart);
              }}
              className="w-10 h-10 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition"
            >
              -
            </button>
            <span className="text-lg sm:text-xl font-semibold">{item.quantity}</span>
            <button
              onClick={() => {
                const newCart = [...cart];
                newCart[index].quantity += 1;
                setCart(newCart);
              }}
              className="w-10 h-10 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <span className="text-lg sm:text-xl font-bold text-gray-800 ml-4">
            LKR {(item.quantity * item.price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>

          {/* Trash Button */}
          <button
            onClick={() => {
              const newCart = [...cart];
              newCart.splice(index, 1);
              setCart(newCart);
            }}
            className="absolute top-2 right-2 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition"
          >
            <TbTrash className="text-xl" />
          </button>
        </div>
      ))}

      {/* Checkout Summary */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 gap-4">
        <button
          onClick={placeOrder}
          className="w-full sm:w-48 h-12 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Place Order
        </button>
        <span className="text-lg sm:text-xl font-bold">
          Total: LKR {getTotal().toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>

      {/* User Details Form */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-12 border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full h-12 border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full h-12 border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
      </div>
    </div>
  );
}
