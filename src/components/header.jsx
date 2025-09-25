import { Link, useNavigate } from "react-router-dom";
import { BiCart, BiStore } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <header className="h-[100px] bg-tertiary flex justify-center items-center relative">
      {isOpen && (
        <div className="fixed z-[100] top-0 right-0 w-[100vw] h-[100vh] bg-[#00000050]">
          <div className="h-full w-[350px] bg-white flex flex-col">
            <div className="w-full bg-tertiary h-[100px] flex pl-[45px] flex-row items-center gap-[20px]">
              <GiHamburgerMenu
                className="text-white text-4xl md:hidden"
                onClick={() => setIsOpen(close)}
              />
              <img
                className="w-[150px] h-[100px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
                src="/eva.png"
                alt="Eva"
              />
            </div>
            <div className="w-full h-full flex flex-col p-[45px] items-start">
              <button
                className="text-accent text-2xl flex items-center mb-4"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/");
                }}
              >
                <HiHome className="mr-2" />
                Home
              </button>
              <button
                className="text-accent text-2xl flex items-center mb-4"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/products");
                }}
              >
                <BiStore className="mr-2" />
                Products
              </button>
              <button
                className="text-accent text-2xl flex items-center"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/cart");
                }}
              >
                <BiCart className="mr-2" />
                Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <img
        className="w-[150px] h-[100px] object-cover absolute md:left-[40px] cursor-pointer"
        onClick={() => navigate("/")}
        src="/eva.png"
        alt="Eva"
      />

      <GiHamburgerMenu
        className="text-white text-4xl absolute md:hidden left-[40px]"
        onClick={() => setIsOpen(true)}
      />

      <div className="hidden w-full md:flex justify-center items-center">
        <Link to="/" className="text-white text-2xl">
          Home
        </Link>
        <Link to="/products" className="ml-4 text-white text-xl">
          Products
        </Link>
        <Link to="/reviews" className="ml-4 text-white text-xl">
          Reviews
        </Link>
        <Link to="/about-us" className="ml-4 text-white text-xl">
          About Us
        </Link>
        <Link to="/contact-us" className="ml-4 text-white text-xl">
          Contact Us
        </Link>
        <Link to="/cart" className="absolute right-[250px]">
          <BiCart className="text-white text-3xl ml-4" />
        </Link>
        {
          token!=null&&<button className="absolute right-[80px] text-white text-xl ml-4" onClick={
            ()=>{
              localStorage.removeItem("token");
              navigate("/login")
            }
          }>
            Logout
          </button>
        }
      </div>
    </header>
  );
}
