import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';

const FloatingBox = ({ position, color }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.3;
    mesh.current.rotation.y = time * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.2} 
          metalness={0.8} 
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, color }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.2;
    mesh.current.rotation.y = time * 0.4;
    mesh.current.rotation.z = time * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={mesh} position={position}>
        <torusGeometry args={[1.2, 0.4, 16, 100]} />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.15} 
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

const FloatingOctahedron = ({ position, color }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.25;
    mesh.current.rotation.y = time * 0.35;
  });

  return (
    <Float speed={1.8} rotationIntensity={2.5} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <>
      {/* Ambient light for overall brightness */}
      <ambientLight intensity={0.6} />
      
      {/* Key lights */}
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#60a5fa" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#a855f7" />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#06b6d4" />

      {/* Floating 3D shapes */}
      <FloatingBox position={[-3, 2, 0]} color="#3b82f6" />
      <FloatingTorus position={[4, -2, -2]} color="#ec4899" />
      <FloatingOctahedron position={[0, 4, -5]} color="#8b5cf6" />
      
      {/* Background stars */}
      <Stars radius={200} depth={100} count={500} factor={2} saturation={0.5} fade speed={0.5} />
      
      {/* Background color */}
      <color attach="background" args={['#0f172a']} />
    </>
  );
};

export default HeroScene;
