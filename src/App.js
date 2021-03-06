import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import Navbar from './components/navbar/Navbar';
// import NavbarOne from './components/navbar/NavbarOne';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ServiceDetail from './pages/service-detail/ServiceDetail';
import Booking from './pages/booking/Booking';
import Footer from './components/footer/Footer';

import { AppProvider } from './context/store';
import BookingHistory from './components/bookingHistory/BookingHistory';
import DeleteClient from './components/deleteClient/deleteClient';
import ProfileEdit from './components/profileClient/ProfileEdit';
import PaymentsClient from './components/paymentsClient/PaymentsClient';
import Profile from './components/profileClient/Profile';
import UserAdmin from './pages/userAdmin/Adminsystem';
import UserHotel from './pages/UserHotel/UserHotel';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Stadistics from './components/Stadistics/Stadistics';
import CreateRoom from './components/CreateRoom/CreateRoom';
import VerifyAccount from './components/verifyAccount/VerifyAccount';
import VerifySendMessage from './components/verifyAccount/VerifySendMessage';
import TokenExpired from './components/verifyAccount/TokenExpired';
import MenuProfile from './components/menuProfile/MenuProfile';
import InvoiceDetail from './pages/invoiceDetail/InvoiceDetail';
import PaymentProcess from './pages/paymentProcess/PaymentProcess';
import UpdateRoom from './components/UpdateRoom/UpdateRoom';
import Access from './components/Access/Access';
import NotFound from './pages/404/NotFound';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <AppProvider>
          {/* <NavbarOne /> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user/account/" element={<MenuProfile />}>
              <Route path="profile" element={<Profile />} />
              <Route path="edit" element={<ProfileEdit />} />
              <Route path="payment" element={<PaymentsClient />} />
              <Route path="booking-history" element={<BookingHistory />} />
              <Route path="delete" element={<DeleteClient />} />
            </Route>
            <Route path="/invoice/:id" element={<InvoiceDetail />} />
            <Route path="/payment" element={<PaymentProcess />} />
            <Route path="/user/account/" element={<Profile />} />
            <Route path="/user/account/edit" element={<ProfileEdit />} />
            <Route path="/userAdmin" element={<UserAdmin />} />
            <Route
              path="/userHotel"
              element={
                <Access roleUser="hotel">
                  <UserHotel />
                </Access>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="stadistics" element={<Stadistics />} />
              <Route path="createroom" element={<CreateRoom />} />
              <Route path="updateroom/:id" element={<UpdateRoom />} />
            </Route>
            <Route path="/user/activate/:hash" element={<VerifyAccount />} />
            <Route
              path="/user/activate/message"
              element={<VerifySendMessage />}
            />
            <Route path="/user/token-expired" element={<TokenExpired />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default App;
