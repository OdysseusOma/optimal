import React, { useRef, useState, useEffect } from 'react'
import { Canvas, Camera, useLoader} from '@react-three/fiber'
import { Suspense } from 'react'
import Earth from './Earth'

const ThreeD = () => {
   /* eslint-disable no-eval */
  return (
    <div className='h-[80vh] bg-[#00000e]'>
      <div className='h-[70%]'>
        <Canvas camera={{ position: [0, 0, -4], fov: 45 }}>
            <Suspense fallback={null}>
                <Earth />
            </Suspense>
        </Canvas>
      </div>
      <div className='flex flex-col items-center justify-evenly w-full h-[30%]'>
        <h1 className='font-bold text-2xl max-w-[500px] text-center'>
          There is so much to see, don't worry, we'll get you there
        </h1>
      </div>
    </div>
  )
}

export default ThreeD


