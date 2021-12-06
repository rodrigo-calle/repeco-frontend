import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ServiceDetail from "./components/service-detail/ServiceDetail";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";
import { UserProvider } from "./components/context/Users/UserProvider";

function App() {
  const [addCart, setAddCart] = useState([]);
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/service/:id"
            element={
              <ServiceDetail addCart={addCart} setAddCart={setAddCart} />
            }
          />
          <Route
            path="/booking"
            element={<Booking addCart={addCart} setAddCart={setAddCart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
