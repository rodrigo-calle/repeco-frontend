import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ServiceDetail from './pages/service-detail/ServiceDetail';
import Booking from './pages/booking/Booking';
import Footer from './components/footer/Footer';
import { UserProvider } from './context/UserProvider';
import ProfileEdit from './components/profileClient/ProfileEdit';
import PaymentsClient from './components/paymentsClient/PaymentsClient';
import BookingHistory from './components/bookingHistory/BookingHistory';
import DeleteClient from './components/deleteClient/deleteClient';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user/account/edit" element={<ProfileEdit />} />
            <Route path="/user/account/payment" element={<PaymentsClient />} />
            <Route
              path="/user/account/booking-history"
              element={<BookingHistory />}
            />
            <Route path="/user/account/delete" element={<DeleteClient />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default App;
