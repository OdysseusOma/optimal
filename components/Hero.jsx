import React from 'react'

const Hero = () => {
  return (
    <main 
    style={{
    backgroundImage: `url('/hero.png')`,
    // Uncomment height and width to get background image 
    // Leaving them commented out will make 3D earth the hero page
    height: '90vh',
    width: '100%',
    
    // width: '100vw',
    backgroundRepeat: 'no-repeat'
    }}
    >
    <div className=' absolute z-10 flex flex-col justify-center w-full items-center lg:w-1/2' style={{height: 'inherit'}}>
        <div className='container flex flex-col items-center space-y-4 md:max-w-[400px] md:block'>
          <h1 className='font-bold text-6xl px-2 text-center lg:px-0 md:text-left lg:w-[550px] xl:text-8xl'>Travel the world with ease</h1>
          <button className='text-[10px] lg:text-[20px] bg-blue-900 px-[15px] py-[10px] rounded-[30px] hover:bg-blue-700'>Learn More</button>
        </div>
    </div>
    <div className='relative h-[inherit]'>
        <div className='absolute bg-black opacity-70 h-[inherit] w-full z-5 top-[0px]'></div>
    </div>
    </main>
  )
}

export default Hero