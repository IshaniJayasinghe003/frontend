import { Link, Route, Routes } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6"; 
import { GiShoppingBag } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import ProductsAdminPage from "./admin/productsAdminPage";
import AddProductAdminPage from "./admin/addProductAdminPage";
import UpdateProductpage from "./admin/updateProduct";
import OrdersPageAdmin from "./admin/ordersPageAdmin";





export default function AdminPage() {
    return (
        <div className="w-full h-screen flex ">
        <div className="w-[300px] h-full flex flex-col items-center">
          <span className="text-3xl font-bold my-5">Admin Panel</span>

          <Link className="flex flex-row h-[60px] w-full  border p-[20px] items-center text-2xl  gap-[25px]"to="/admin/products"><FaBoxArchive />Products</Link>
          <Link className="flex flex-row h-[60px] w-full  border p-[20px] items-center text-2xl  gap-[25px]"to="/admin/users"><GiShoppingBag />Users</Link>
          <Link className="flex flex-row h-[60px] w-full  border p-[20px] items-center text-2xl  gap-[25px]"to="/admin/orders"><IoPeopleSharp />Orders</Link>
          <Link className="flex flex-row h-[60px] w-full  border p-[20px] items-center text-2xl  gap-[25px]"to="/admin/settings"><IoSettings />Settings</Link>
          </div>    
        <div className="w-[calc(100%-300px)] h-full">
       <Routes path="/*">
                <Route path="/" element={<h1>Dashboard</h1>} />
                 <Route path="products" element={<ProductsAdminPage />} />
                <Route path="newProduct" element={<AddProductAdminPage />} />
                <Route path="/users" element={<h1>Users</h1>} />
                <Route path="/orders" element= {<OrdersPageAdmin />}/>
                <Route path="/UpdateProduct/*" element={<UpdateProductpage />} />
            </Routes>
        </div>
       
        </div>
    );
}