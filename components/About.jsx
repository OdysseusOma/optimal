import React from 'react'

const About = () => {
  return (
    <div className='svgblob-cont'>
      <div className='svgblob'>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3E3E3E" d="M46.9,-63.4C55.7,-48.5,54.1,-28.9,54.8,-11.7C55.4,5.6,58.3,20.4,53.2,32.2C48.2,44,35.3,52.7,19.8,61.2C4.4,69.8,-13.6,78.2,-25.9,73C-38.2,67.7,-44.9,48.8,-46.8,33.1C-48.6,17.4,-45.6,4.9,-42.8,-6.9C-39.9,-18.8,-37.3,-30,-30.2,-45.2C-23.1,-60.4,-11.6,-79.5,3.7,-84C19.1,-88.5,38.1,-78.3,46.9,-63.4Z" transform="translate(100 100)" />
        </svg>
      </div>
        <div className='container z-10 flex flex-col items-center justify-center m-auto space-y-12 md:space-x-12 md:flex-row md:space-y-0'>
            <h1 className='block md:hidden text-4xl pt-10 font-bold'><span className='text-blue-900'>A</span>bout</h1>
            <div className='h-[80vh] md:h-screen flex items-start md:items-center justify-center'>
              <img src="/profile.jpg" alt="" className='h-full md:h-[70%]'/>
            </div>
            <div className='max-w-[400px] lg:max-w-[600px] flex flex-col mx-auto px-6 text-center md:text-left'>
                <h1 className='hidden md:block text-5xl py-10 font-bold'><span className='text-blue-900'>A</span>bout</h1>
                <p className='pb-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Omnis pariatur voluptas, enim fuga repudiandae minus rerum? 
                    Molestiae aspernatur ullam nesciunt accusamus, ab fugit quasi 
                    repudiandae sunt velit minima unde nihil. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Omnis pariatur voluptas, enim fuga repudiandae minus rerum? 
                    Molestiae aspernatur ullam nesciunt accusamus, ab fugit quasi 
                    repudiandae sunt velit minima unde nihil. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Omnis pariatur voluptas, enim fuga repudiandae minus rerum? 
                    Molestiae aspernatur ullam nesciunt accusamus, ab fugit quasi 
                    repudiandae sunt velit minima unde nihil.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About