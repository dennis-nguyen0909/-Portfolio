import React, { Suspense } from 'react'
import CanvasLoader from '../Loader'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
const Earth = ({scale}) => {
  const earth =useGLTF('./planet/scene.gltf')
  return (
    <primitive object={earth.scene} scale={scale || 2} position-y={0} rotation-y={0} />
  )
}
const EarthCanvas = ({scale})=>{
    return (
      <Canvas 
        frameloop='demand'
        shadows
        gl={{preserveDrawingBuffer:true}}
        camera={{
          fov:45,
          near:0.1,
          far:200,
          position:[-4,3,6]
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
             enableZoom={false}
             autoRotateSpeed={10}
             autoRotate // tự động xoay
             maxPolarAngle={Math.PI/2}
             minPolarAngle={Math.PI/2}
              />
            <Earth  scale={scale}/>
        </Suspense>
        <Preload all />
      </Canvas>
    )
}

export default EarthCanvas