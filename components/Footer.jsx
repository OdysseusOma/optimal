import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
        
        <footer className="bg-veryDarkBlue">
      {/* <!-- Flex Container --> */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 
      mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!-- Logo and social links container --> */}
        <div className="flex flex-col-reverse items-center justify-between 
        space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <div className='font-bold text-2xl md:text-4xl'>
            Optimal
          </div>
          {/* <!-- Social Links --> */}
          <div className="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}
            <a href="#">
              <img src="/icon-facebook.svg" alt="" className="h-8" />
            </a>
            {/* <!-- Link 2 --> */}
            <a href="#">
              <img src="/icon-twitter.svg" alt="" className="h-8" />
            </a>
            {/* <!-- Link 3 --> */}
            <a href="#">
              <img src="/icon-instagram.svg" alt="" className="h-8" />
            </a>
          </div>
        </div>

        {/* <!-- List Container --> */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#" className="hover:text-blue-700">Services</a>
            <a href="#" className="hover:text-blue-700">About</a>
            <a href="#" className="hover:text-blue-700">Testimonies</a>
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input type="text" className="flex-1 px-4 rounded-full focus:outline-none"
              placeholder="Sign up to our newsletters"/>
              <button className="px-6 py-2 text-white rounded-full bg-blue-900 
              hover:bg-blue-700 focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer