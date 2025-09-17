import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import AdminPage from './pages/adminPage';
import TestPage from './pages/testPage';
import ClientwebPage from './pages/admin/client/clientPage';
import ForgetPasswordPage from './pages/admin/client/forgetPassword';
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "809363394795-kfis3dejn0cec47dt4tf0pg8i5qkchd8.apps.googleusercontent.com";

function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <div className="w-full h-screen flex justify-center bg-primary items-center text-secondary">
          <Toaster position="top-right" />
          <Routes path="/">
            {/* Public Pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forget" element={<ForgetPasswordPage />} />
            <Route path="/test" element={<TestPage />} />

            {/* Admin */}
            <Route path="/admin/*" element={<AdminPage />} />

            {/* Client Web Pages */}
            <Route path="/*" element={<ClientwebPage />} />

            {/* Optional HomePage */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
