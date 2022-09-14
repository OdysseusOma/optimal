import React from 'react'
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";


const Earth = () => {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, ['8k_earth_daymap.jpg', '8k_earth_normal_map.jpg', '8k_earth_specular_map.jpg', '8k_earth_clouds.jpg'])


  return (
    <>
        <ambientLight intensity={0.3} color="#ffffff" />
        <pointLight intensity={1.0} position={[10, 10, 10]} />
        <mesh position={[0, 0, -3]}> 
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
        </mesh>

    </>
  )
}

export default Earth