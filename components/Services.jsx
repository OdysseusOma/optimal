import React from 'react'

const Services = () => {
    const iterations = [
        {name: 'ticket', img: 'one two'},
        {name: 'hotel', img: 'three four'},
        {name: 'tour', img: 'five six'},
    ]
  return (
    <div className='bg-black'>
        {/* Left to right and invers image/text iterations */}
        <div className='mx-24 flex flex-col items-center justify-center space-y-12'>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-bold'>Ticketing</h1>
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
                    <h1  className='text-4xl font-bold'>Hotel Reservations</h1>
                    <p className='max-w-[600px] text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt harum 
                        quibusdam, quidem aperiam earum aliquam recusandae. Sit eveniet dolor sequi, 
                        provident eligendi similique cum voluptate veniam. Earum, adipisci dicta?
                    </p>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <h1  className='text-4xl font-bold'>Tours</h1>
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