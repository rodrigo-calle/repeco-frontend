import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Login from './components/login/Login'
// import Signup from './components/signup/Signup'
// import ServiceDetail from './components/service-detail/ServiceDetail'
// import Booking from './components/booking/Booking'
import Footer from './components/footer/Footer'
//import { render } from "react-dom";
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/login" element={< Login />} />
    </Routes>
    {/*   <Home />  */}   
    {/* <Login></Login> */}
    {/* <Signup></Signup>       */}
    {/* <ServiceDetail></ServiceDetail> */}    
    {/* <Booking /> */}
    <Footer />
    </>

    );
}

export default App;
