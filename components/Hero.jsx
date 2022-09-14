import React from 'react'

const Hero = () => {
  return (
    <main 
    style={{
    backgroundImage: `url('/hero.png')`,
    height: '90vh',
    width: '100%',
    backgroundRepeat: 'no-repeat'
    }}
    >
    <div className=' absolute z-10 flex flex-col justify-center w-full items-center md:items-end lg:w-1/2' style={{height: 'inherit'}}>
        <div className='flex flex-col items-center space-y-4 md:items-end xl:block'>
        <h1 className='font-bold text-6xl px-2 text-center lg:px-0 lg:text-right xl:text-left lg:w-[550px] xl:text-8xl'>Travel the world with ease</h1>
        <button className='flex text-[10px] lg:text-[20px] bg-blue-900 px-[15px] py-[10px] rounded-[30px] hover:bg-blue-700'>Learn More</button>
        </div>
    </div>
    <div className='relative h-[inherit]'>
        <div className='absolute bg-black opacity-70 h-[inherit] w-full z-5 top-[0px]'></div>
    </div>
    </main>
  )
}

export default Hero