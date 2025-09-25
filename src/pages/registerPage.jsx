import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      alert("Passwords do not match");
      return;
    }
    console.log(formData);
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative bg-pink-300">

      {/* Background image with overlay */}
      <img 
        src="brush.jpg" 
        alt="Background" 
        className="absolute w-full h-full object-cover opacity-30"
      />

      <div className="relative w-full max-w-md sm:max-w-sm mx-4 bg-white rounded-xl shadow-xl p-6 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">Create Account</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name} 
              onChange={handleChange} 
              placeholder="John Doe"
              className="border rounded-lg h-9 sm:h-10 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange} 
              placeholder="example@email.com"
              className="border rounded-lg h-9 sm:h-10 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Enter password"
              className="border rounded-lg h-9 sm:h-10 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword} 
              onChange={handleChange} 
              placeholder="Confirm password"
              className="border rounded-lg h-9 sm:h-10 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <button 
            type="submit"
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold h-10 sm:h-12 rounded-lg shadow-lg transition duration-300 text-sm sm:text-base"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-3 text-sm sm:text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
