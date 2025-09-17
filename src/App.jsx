 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import "./App.css"; 
 import HomePage from "./pages/homePage";
 import LoginPage from "./pages/loginPage";
 import RegisterPage from "./pages/registerPage"; 
 import AdminPage from "./pages/adminPage";
 import TestPage from "./pages/testPage";
 import { Toaster } from "react-hot-toast"; 
 import ClientWebPage from "./pages/client/clientPage"; {/*✅ fixed import*/}
 import { GoogleOAuthProvider } from "@react-oauth/google";
 import ForgetPasswordPage from "./pages/client/forgetPassword";

 const clientId = "1086978250852-q498jik4ukaq8q6m66ar26dgt6chjv24.apps.googleusercontent.com"; 

function App() { 
return (
 <GoogleOAuthProvider clientId={clientId}> 
<BrowserRouter> 
<div className="w-full h-screen flex justify-center items-center bg-primary text-secondary"> 
<Toaster position="top-right" />
 <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/test" element={<TestPage />} />
      <Route path="/register" element={<RegisterPage />} /> 
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/forget" element={<ForgetPasswordPage />} /> 
      <Route path="/*" element={<ClientWebPage />} /> 
</Routes> 
</div> 
</BrowserRouter> 
</GoogleOAuthProvider> ); 
} 
export default App;