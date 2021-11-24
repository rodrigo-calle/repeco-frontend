import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import ServiceDetail from './components/service-detail/ServiceDetail'
import Booking from './components/booking/Booking'

function App() {
  return (
    <>
    <Navbar />
    {/*<Home />    
    {/* <Login></Login> */}
    {/* <Signup></Signup>       */}
    {/* <ServiceDetail></ServiceDetail> */}    
    <Booking />

    </>

    );
}

export default App;
