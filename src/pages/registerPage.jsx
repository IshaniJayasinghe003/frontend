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
    // TODO: handle registration logic (API call)
    console.log(formData);
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Account</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name} 
              onChange={handleChange} 
              placeholder="John Doe"
              className="border rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange} 
              placeholder="example@email.com"
              className="border rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Enter password"
              className="border rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword} 
              onChange={handleChange} 
              placeholder="Confirm password"
              className="border rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <button 
            type="submit"
            className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold h-12 rounded-lg shadow-lg transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
