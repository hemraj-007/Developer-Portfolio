// src/components/CustomLoadingAnimation.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const FullScreenLoader = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#2c3e50',
  color: '#ffffff',
  zIndex: 1301, // Ensure it appears above all other elements
}));

function Loader() {
  const mesh = useRef<Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshBasicMaterial color="cyan" wireframe />
    </mesh>
  );
}

const CustomLoadingAnimation: React.FC = () => {
  return (
    <FullScreenLoader>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Loader />
        <OrbitControls />
      </Canvas>
    </FullScreenLoader>
  );
};

export default CustomLoadingAnimation;
