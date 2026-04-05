import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import InvestPlan from "./components/InvestPlan";
import Invest from "./pages/Invest";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import VerifyEmail from "./pages/VerifyEmail";
import { ContextProvider } from "./context";
import ProtectedRoute from "./pages/ProtectedRoute";
import ChangePlan from "./pages/ChangePlan";
import InvestMore from "./pages/InvestMore";
import Restrict from "./pages/Restrict";

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    
    <MainLayout>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<WhyUs />} />
        <Route path="/plan" element={<InvestPlan />} />
        <Route path="/invest" element={<ProtectedRoute><Invest /></ProtectedRoute>} />
        <Route path="/change-plan" element={<ProtectedRoute><ChangePlan /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/invest-more" element={<ProtectedRoute><InvestMore /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Restrict /></ProtectedRoute>} />
        
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </MainLayout>
    
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;