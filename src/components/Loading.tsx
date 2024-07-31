// src/components/Loading.tsx
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, useProgress, Plane } from '@react-three/drei';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import KaleidoscopeMaterial from './KaleidoscopeMaterial';
import { ShaderMaterial } from 'three';

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

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

const Loading: React.FC = () => {
  const materialRef = useRef<ShaderMaterial>(null);

  return (
    <FullScreenLoader>
      <Canvas>
        <Plane args={[2, 2]}>
          <KaleidoscopeMaterial ref={materialRef} />
        </Plane>
        <Loader />
      </Canvas>
    </FullScreenLoader>
  );
};

export default Loading;
