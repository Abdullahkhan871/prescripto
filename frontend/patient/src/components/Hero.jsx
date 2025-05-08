import React from 'react'
import { assets } from "../assets/assets"
import { NavLink } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='bg-[#5F6FFF] rounded-lg'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-5 pt-5 sm:pt-10 px-6 md:px-0'>
                <div className='md:w-[45%] flex flex-col gap-4'>
                    <h1 className='font-semibold text-white text-3xl sm:text-4xl md:text-3xl xl:text-5xl'>Book Appointment
                        With Trusted Doctors</h1>
                    <div className='flex items-center justify-between gap-4'>
                        <img className='w-20 object-cover' src={assets.group_profiles} alt="image" />
                        <p className='text-sm lg:text-lg text-white'>Simply browse through our extensive list of trusted doctors,
                            schedule your appointment hassle-free.</p>
                    </div>
                    <div>
                        <NavLink to="/apoinment" className='py-2 px-6 text-base lg:text-lg inline-flex gap-2 items-center bg-white rounded-full'>Book appointment <img src={assets.arrow_icon} alt="" /> </NavLink>
                    </div>
                </div>
                <div className='md:w-[40%]'>
                    <img className='max-w-full object-cover' src={assets.header_img} alt="Hero image" />
                </div>
            </div>
        </div>
    )
}

export default Hero