import React, { useRef } from 'react'
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'


const Earth = () => {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, ['8k_earth_daymap.jpg', '8k_earth_normal_map.jpg', '8k_earth_specular_map.jpg', '8k_earth_clouds.jpg'])
    const earthRef = useRef()
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 6;
        cloudsRef.current.rotation.y = elapsedTime / 6;
    });


  return (
    <>
        <ambientLight intensity={0.2} color="#ffffff" />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
        <pointLight color='#ffffff' intensity={1.0} position={[18, 7, 10]} />
        <mesh ref={cloudsRef}>
            <sphereGeometry args={[1.005, 32, 32]} />
            <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={earthRef}> 
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.6} />
            <OrbitControls enableZoom={true} 
                enablePan={true} 
                enableRotate={true} 
                zoomSpeed={0.6} 
                panSpeed={0.5} 
                rotateSpeed={0.4} 
            />
        </mesh>

    </>
  )
}

export default Earth