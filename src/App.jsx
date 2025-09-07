
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import AdminPage from './pages/adminPage';
import TestPage from './pages/testPage';
import {Toaster} from "react-hot-toast"
import ClientwebPage from './pages/admin/client/clientPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgetPasswordPage from './pages/admin/client/forgetPassword';
const clientId = 
"809363394795-kfis3dejn0cec47dt4tf0pg8i5qkchd8.apps.googleusercontent.com"
const clientSecret = 
"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"



function App(){
  return(
    <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
    <div className="w-full h-screen flex justify-center bg-primary items-center text-secondary">
    <Toaster position="top-right"/>
   <Routes path="/">
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<TestPage/>} />    
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
         <Route path="/forget" element={<ForgetPasswordPage/>}/>
        <Route path="/*" element={<ClientwebPage />} />
    </Routes>
    </div>
    </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
