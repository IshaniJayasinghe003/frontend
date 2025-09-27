import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/`,
        formData
      );
      console.log(res.data);
      alert("Registered successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative bg-gray-100 font-">
      {/* Background image with overlay */}
      <img
        src="hero_bg.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div> 

      <div className="relative w-full max-w-md sm:max-w-sm mx-4 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800 drop-shadow-md">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="border border-gray-300 rounded-lg h-10 sm:h-12 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="border border-gray-300 rounded-lg h-10 sm:h-12 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="border border-gray-300 rounded-lg h-10 sm:h-12 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="border border-gray-300 rounded-lg h-10 sm:h-12 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="border border-gray-300 rounded-lg h-10 sm:h-12 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold h-12 rounded-xl shadow-lg transition duration-300 text-base sm:text-lg"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm sm:text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
