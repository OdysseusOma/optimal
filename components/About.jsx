import React from 'react'

const About = () => {
  return (
    <div className='bg-black'>
        <div className='container flex flex-col items-center justify-center m-auto space-y-12 md:space-x-12 md:flex-row md:space-y-0'>
            <img src="/profile.jpg" alt="" className='h-[600px]'/>
            <div className='max-w-[600px] flex flex-col mx-auto px-6 text-center md:text-left'>
                <h1 className='text-4xl'>About</h1>
                <p>
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