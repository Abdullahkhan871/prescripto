import React, { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Appointment from "./pages/Appointment"
import Doctors from "./pages/Doctors"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import MyAppointment from "./pages/MyAppointment"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  const [token, setToken] = useState(true)
  return (
    <div className="container w-[90%] mx-auto sm:px-4 relative text-[#1F2937]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apoinment" element={<Appointment />} />
        <Route path="/all-doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/profile" element={
          <PrivateRoute
            token={token}
            route="/login"
          >
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/my-appointment" element={
          <PrivateRoute
            token={token}
            route="/login"
          >
            <MyAppointment />
          </PrivateRoute>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}
export default App
