import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

const CanvasWrapper = ({ children, className = '', cameraPosition = [0, 0, 5] }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          {children}
          {/* <Environment preset="city" /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
