import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Appointment from "./pages/Appointment"
import Doctors from "./pages/Doctors"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import MyAppointment from "./pages/MyAppointment"
import Signup from "./pages/Signup"
import Login from "./pages/Login"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apoinment" element={<Appointment />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-appointment" element={<MyAppointment />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App