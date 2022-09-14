import React, { useRef, useState, useEffect } from 'react'
import { Canvas, Camera, useLoader} from '@react-three/fiber'
import { Suspense } from 'react'
import Earth from './Earth'

const ThreeD = () => {
  return (
    <div className='h-screen'>
    <Canvas camera={{ position: [0, 0, 1], fov: 45 }}>
        <Suspense fallback={null}>
            <Earth />
        </Suspense>
    </Canvas>
    </div>
  )
}

export default ThreeD


