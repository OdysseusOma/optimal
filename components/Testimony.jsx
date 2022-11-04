import React from 'react'
import SwipeSection from './SwipeSection'


const Testimony = () => {
  return (
    <div id='testimonials' className=''>
      <div className='testimonial-block'>
        <div className='testimonial-section'>
          <h1 className='text-5xl py-10 font-bold'><span className='text-blue-900'>T</span>estimonials</h1>
          <SwipeSection />
        </div>
      </div>
    </div>
  )
}

export default Testimony