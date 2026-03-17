import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import InvestPlan from "./components/InvestPlan";

function App() {
  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<WhyUs />} />
        <Route path="/plan" element={<InvestPlan />} />
      </Routes>
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;