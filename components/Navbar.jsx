import React from 'react'
import profilePic from '../public/OPTIMAL.png'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar = () => {
    // const [toggle, setToggle] = useState(false)
    const btnClick = () => {
        const btn = document.getElementById('menu-btn')
        const nav = document.getElementById('menu')

        btn.classList.toggle('open')
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
    }
  return (
        <nav className='flex justify-between items-center z-10 h-[100px] w-full bg-black'>
          <div className='flex container justify-between items-center gap-10 w-[90%] h-fit mx-auto'>

            <div className='scale-50 md:scale-70 lg:scale-100'>
              <Image
                src={profilePic}
              />
            </div>

            <div className='hidden md:flex justify-between gap-10 items-center'>
              <ul className='hidden flex font-bold md:gap-10 lg:gap-20 md:flex md:text-[15px] md:text-[15px]'>
                <li className='hover:text-blue-700 cursor-pointer'>Home</li>
                <li className='hover:text-blue-700 cursor-pointer'>Services</li>
                <li className='hover:text-blue-700 cursor-pointer'>About</li>
                <li className='hover:text-blue-700 cursor-pointer'>Testimonies</li>
              </ul>
              <button className='text-[10px] lg:text-[15px] bg-blue-900 px-[15px] py-[10px] rounded-[30px] hover:bg-blue-700'>Contact Us</button>
            </div>

          {/* Hamburger Icon */}
          <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={btnClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className="z-20 absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-black sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#" className='hover:text-blue-700'>Home</a>
            <a href="#" className='hover:text-blue-700'>Services</a>
            <a href="#" className='hover:text-blue-700'>About</a>
            <a href="#" className='hover:text-blue-700'>Testimonies</a>
            <a href="#" className='hover:text-blue-700'>Contact Us</a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar