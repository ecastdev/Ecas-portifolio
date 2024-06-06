
import './App.css';
import InterfacePortifolio from './components/interfaceportifo';
import Navbar1 from './components/navbar';
import { Email, Facebook, Twitter, WhatsApp, YouTube } from "@mui/icons-material";
// // 3D rendering
// import React, { useRef, useEffect, useState, Suspense } from "react";
import React, {  useState } from "react";
// R3F
// import { Canvas, useFrame } from "react-three-fiber";
import { Canvas } from "react-three-fiber";
// React Spring
// import { a, useTransition } from "@react-spring/web";
//Intersection Observer
// import { useInView } from "react-intersection-observer";
import { useLoader } from '@react-three/fiber';
// import { Html, useProgress, useGLTF,  } from '@react-three/drei';
// import { OBJLoader } from "three-stdlib";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scroll, ScrollControls } from "@react-three/drei";
// import { ScrollCenter } from "./components/scrollcenter";

function Model({ url }) {
  const gltf = useLoader(GLTFLoader ,'https://models.readyplayer.me/6658b4c836c854537e293781.glb');
  // const gltf = useLoader(GLTFLoader, './gun_satellite_panel_computer.glb');
  return <primitive object={gltf.scene} scale={1} />;
}

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  );
};

function App() {
  const [section, setSection] = useState(0);
  return (
    <div className=" bg-zinc-900 flex flex-col items-center justify-center w-full h-full">
      <Navbar1/>
      <div className=' hidden lg:block gap-10 fixed top-20 right-16'>
        <ul>
          <Email color='secondary'/>
        </ul>
        <ul>
          <Facebook color='secondary'/>  
        </ul>
        <ul>
          <Twitter color='secondary'/>  
        </ul>
        <ul>
          <WhatsApp color='secondary'/>  
       </ul>
        <ul>
          <YouTube color='secondary'/> 
        </ul>    
     </div>
     <InterfacePortifolio/>
       {/* R3F Canvas */}
      <Canvas
        concurrent
        colorManagement
        shadows camera={{ position: [0, 3, 10], fov: 42 }}> 
        
         
            <ScrollControls  pages={5} damping={0.1}>
            
            
                <Lights />
                <mesh >
                   <Model/>
                </mesh>
                
              
                <Scroll html >
                  <InterfacePortifolio/>
                  
               </Scroll>

            </ScrollControls>
          
         
         
      </Canvas>
      
    </div>
  );
}

export default App;
