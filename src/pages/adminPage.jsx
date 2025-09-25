import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6"; 
import { GiShoppingBag } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import ProductsAdminPage from "./admin/productsAdminPage";
import AddProductAdminPage from "./admin/addProductAdminPage";
import UpdateProductpage from "./admin/updateProduct";
import OrdersPageAdmin from "./admin/ordersPage";
import { useState, useEffect } from "react";
import axios from "axios";                    
import toast from "react-hot-toast";
import Loader from "../components/loader";

export default function AdminPage() {
    const navigate = useNavigate();
    const [adminValidated, setAdminValidated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You are not logged in"); 
            navigate("/login");
        } else {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/users", {
                headers: { Authorization: `Bearer ${token}` },
            }).then((response) => {
                if (response.data.role === "admin") {
                    setAdminValidated(true);
                } else {
                    toast.error("You are not authorized");
                    navigate("/login");
                }
            }).catch(() => {
                toast.error("You are not authorized");
                navigate("/login");
            });
        }
    }, []);

    return (
        <div className="w-full h-screen flex">
            {adminValidated ? (
                <>
                    {/* Sidebar */}
                    <div className="w-[300px] h-full flex flex-col items-center">
                        <span className="text-3xl font-bold my-5">Admin Panel</span>

                        <Link className="flex flex-row h-[60px] w-full border p-[20px] items-center text-2xl gap-[25px]" to="/admin/products">
                            <FaBoxArchive />Products
                        </Link>
                        <Link className="flex flex-row h-[60px] w-full border p-[20px] items-center text-2xl gap-[25px]" to="/admin/users">
                            <GiShoppingBag />Users
                        </Link>
                        <Link className="flex flex-row h-[60px] w-full border p-[20px] items-center text-2xl gap-[25px]" to="/admin/orders">
                            <IoPeopleSharp />Orders
                        </Link>
                        <Link className="flex flex-row h-[60px] w-full border p-[20px] items-center text-2xl gap-[25px]" to="/admin/settings">
                            <IoSettings />Settings
                        </Link>
                    </div>    

                    {/* Main content */}
                    <div className="w-[calc(100%-300px)] h-full relative">
                        <Routes>
                            {/* Dashboard with background + welcome message */}
                            <Route
                                path="/"
                                element={
                                    <div className="w-full h-full relative">
                                        {/* Background image */}
                                        <div
                                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: "url('/bran.jpg')" }}
                                        ></div>

                                        {/* Overlay content */}
                                        <div className="relative w-full h-full flex justify-center items-center">
                                            <h1 className="text-4xl font-bold text-white text-center p-4 bg-black/50 rounded-md">
                                                Welcome to the Admin Dashboard!
                                                <p className="text-lg font-normal mt-2">
                                                    Here you can manage Products, Users, Orders, and Settings
                                                </p>
                                            </h1>
                                        </div>
                                    </div>
                                }
                            />

                            <Route path="products" element={<ProductsAdminPage />} />
                            <Route path="newProduct" element={<AddProductAdminPage />} />
                            <Route path="UpdateProduct/*" element={<UpdateProductpage />} />
                            <Route path="users" element={<h1>Users</h1>} />
                            <Route path="orders" element={<OrdersPageAdmin />} />
                            <Route path="settings" element={<h1>Settings</h1>} />
                        </Routes>
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}
