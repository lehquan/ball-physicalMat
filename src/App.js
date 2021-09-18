import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Loader } from '@react-three/drei';
import Environment from './components/Environment';
import Ball from './components/Ball';

function App() {

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas>
        <Suspense fallback={null}>
          <pointLight position={[200, 200, 200]} color={0xffffff} intensity={1}/>
          <Environment/>
          <Ball/>
        </Suspense>
        <PerspectiveCamera
          position={[0, 0, 500]}
          fov={50}
          near={1}
          far={1000}
          makeDefault
        />
        <OrbitControls autoRotate={true} autoRotateSpeed={.5} enableDamping={true}/>
      </Canvas>
      <Loader/>
    </div>
  );
}

export default App;
