import React from 'react'
import logo from '../assets/school_logo.avif';
import { IoIosArrowDown } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full p-5 bg-gray-200 flex justify-between lg:justify-center lg:gap-10 items-center border-5'>
      <NavLink to='/'>
      <img src={logo} alt="school logo" className='lg:w-24 w-20 ml-5' />
      </NavLink>
      <RxHamburgerMenu className='lg:hidden text-2xl mr-5'/>
      <ol className='lg:flex gap-10 lg:justify-center hidden '>
        <li className='flex gap-1 font-medium text-base md:text-lg'><NavLink to='/about'>About</NavLink><IoIosArrowDown className='text-xl mt-1'/></li>
        <li className='flex gap-1 font-medium text-base md:text-lg'><NavLink to='/academics'>Academics</NavLink><IoIosArrowDown className='text-xl mt-1'/></li>
        <li className='flex gap-1 font-medium text-base md:text-lg'><NavLink to='/admissions'>Admissions</NavLink><IoIosArrowDown className='text-xl mt-1'/></li>
        <li className='flex gap-1 font-medium text-base md:text-lg'><NavLink to='/student-life'>Student Life</NavLink><IoIosArrowDown className='text-xl mt-1'/></li>
        <li className='flex gap-1 font-medium text-base md:text-lg'><NavLink to='/facilities'>Facilities</NavLink><IoIosArrowDown className='text-xl mt-1'/></li>
        <li className='flex gap-1 font-medium text-base md:text-lg'><NavLink to='/event'>Event</NavLink><IoIosArrowDown className='text-xl mt-1'/></li>
        <li className='flex gap-1 font-medium text-base md:text-lg'><NavLink to='/contact'>Contact Us</NavLink><IoIosArrowDown className='text-xl mt-1'/></li>
      </ol>
    </div>
  )
}

export default Navbar
