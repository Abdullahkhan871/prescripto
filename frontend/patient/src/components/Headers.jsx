import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Headers = () => {
    const [token, setToken] = useState(true);
    const [menuToggle, setMenuToggle] = useState(false);

    function menuOnOff() {
        setMenuToggle((pre) => !pre)
    }


    return (
        <header className='w-full fixed top-0 left-0 border-b border-[#ADADAD] bg-white backgrdrop-blur-md z-50'>
            <div className="container w-[90%] mx-auto py-4 md:px-6 sm:w-full">
                {/* big screen navbar */}
                <div className='flex justify-between items-center gap-2'>
                    <div className='logo-box'>
                        <NavLink to="/">
                            <img src={assets.logo} alt="Logo" title='logo' className='cursor-pointer ' />
                        </NavLink>
                    </div>
                    <nav className='hidden md:block'>
                        <ul className='flex gap-5 font-medium'>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/all-doctors">
                                    All Doctors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className='hidden md:block'>

                        {/* if user not login show create account  */}
                        {/* else show Profile icon */}

                        {
                            token && token ? (
                                <div className="group cursor-pointer relative">
                                    <div className='profile flex items-center gap-2 '>
                                        <img src={assets.profile_pic} className='max-w-10 max-h-10 rounded-full' alt="" />
                                        <img src={assets.dropdown_icon} alt="" />
                                    </div>
                                    <div className='pt-[60px] absolute top-0 right-0'>
                                        <div className='hidden group-hover:flex flex-col gap-4 p-4 bg-[#e4e4e4] rounded-b-lg min-w-40 w-max'>                                            <NavLink to="/profile" className='py-1 px-2 transition-all duration-75 ease-in hover:bg-[#d4d4d4]'>
                                            My Profile
                                        </NavLink>
                                            <NavLink to="/my-appointment" className='py-1 px-2 transition-all duration-75 ease-in hover:bg-[#d4d4d4]'>
                                                My Appointments
                                            </NavLink>
                                            <NavLink className='py-1 px-2 transition-all duration-75 ease-in hover:bg-[#d4d4d4]'>
                                                Logout
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                            ) :
                                (
                                    <NavLink to="/signup" className="text-white bg-[#1f33e3] p-3 px-6   rounded-full transition-all duration-75 ease-in hover:bg-[#1f34ed] ">Create Account</NavLink>
                                )
                        }
                    </div>

                    {/* Mobile screen navbar */}

                    <div className='md:hidden text-right'>

                        <img src={assets.menu_icon} alt="" className='max-w-6' onClick={menuOnOff} />

                        <nav className={`min-h-screen w-3/4 absolute top-0 right-0 bg-[#e4e4e4]  transition-all ease-in-out duration-300 ${menuToggle ? "translate-0" : "translate-x-full"}`}>
                            <div className='p-4 flex justify-end'>
                                <img src={assets.cross_icon} alt="" className='max-w-10' onClick={menuOnOff} />
                            </div>
                            <ul className='p-4 flex flex-col items-end gap-5 font-medium'>
                                <li>
                                    <NavLink to="/" className="text-2xl" onClick={menuOnOff}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/all-doctors" className="text-2xl" onClick={menuOnOff}>
                                        All Doctors
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="text-2xl" onClick={menuOnOff}>
                                        ABOUT
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="text-2xl" onClick={menuOnOff}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/profile" className="text-2xl" onClick={menuOnOff}>
                                        My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-appointment" className="text-2xl" onClick={menuOnOff}>
                                        My Appointments
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="text-2xl" onClick={menuOnOff}>
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Headers