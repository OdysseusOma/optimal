import React from 'react'

const Services = () => {

  return (
    <div className='svgwave-cont'>
        <div className='svgwave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#00000e" fillOpacity="1" d="M0,128L24,133.3C48,139,96,149,144,144C192,139,240,117,288,101.3C336,85,384,75,432,69.3C480,64,528,64,576,90.7C624,117,672,171,720,197.3C768,224,816,224,864,192C912,160,960,96,1008,80C1056,64,1104,96,1152,117.3C1200,139,1248,149,1296,154.7C1344,160,1392,160,1416,160L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
        </div>
        <div className='mx-auto w-full flex items-center justify-center'>
          <h1 className='font-bold text-3xl md:text-5xl py-10 z-[2]'><span className='text-blue-900'>S</span>ervices We Offer</h1>
        </div>
        {/* Left to right and invers image/text iterations */}
        <div className='mx-24 flex flex-col items-center justify-center space-y-12'>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Ticketing</h1>
                    <p className='max-w-[600px] text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt harum 
                        quibusdam, quidem aperiam earum aliquam recusandae. Sit eveniet dolor sequi, 
                        provident eligendi similique cum voluptate veniam. Earum, adipisci dicta?
                    </p>
                </div>
                <img src="/ticket2.jpg" alt="" className='w-[400px]'/>
            </div>

            <div className='flex flex-col md:flex-row'>
                <img src="/hotel.jpg" alt="" className='w-[400px]'/>
                <div className='text-center flex flex-col items-center justify-center'>
                    <h1  className='text-2xl md:text-3xl font-bold'>Hotel Reservations</h1>
                    <p className='max-w-[600px] text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt harum 
                        quibusdam, quidem aperiam earum aliquam recusandae. Sit eveniet dolor sequi, 
                        provident eligendi similique cum voluptate veniam. Earum, adipisci dicta?
                    </p>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <h1  className='text-2xl md:text-3xl font-bold'>Tours</h1>
                    <p className='max-w-[600px] text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt harum 
                        quibusdam, quidem aperiam earum aliquam recusandae. Sit eveniet dolor sequi, 
                        provident eligendi similique cum voluptate veniam. Earum, adipisci dicta?
                    </p>
                </div>
                <img src="/tours.jpg" alt="" className='w-[400px]'/>
            </div>
        </div>
    </div>
  )
}

export default Services