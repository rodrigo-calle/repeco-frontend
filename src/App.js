import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ServiceDetail from './pages/service-detail/ServiceDetail';
import Booking from './pages/booking/Booking';
import Footer from './components/footer/Footer';
import { UserProvider } from './context/Users/UserProvider';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
