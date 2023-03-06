import { OrbitControls,Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Fox from './Fox'
const Foxx = () => {
  return (
  <Canvas>
    <Stage environment="city"  intensity={0.6} >
    <Fox/>
    </Stage>
  

    <OrbitControls enableZoom={false}/>
      
  
  </Canvas>
  )
}

export default Foxx;