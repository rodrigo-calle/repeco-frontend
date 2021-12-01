import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
 import Login from './components/login/Login'
 import Signup from './components/signup/Signup'
 import ServiceDetail from './components/service-detail/ServiceDetail'
 import Booking from './components/booking/Booking'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />   
    <Routes>      
      <Route path="/" element={<Home />} />
      <Route path="/service/:id" element={<ServiceDetail />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>        
    <Footer />
    </BrowserRouter>
    </>

    );
}

export default App;
