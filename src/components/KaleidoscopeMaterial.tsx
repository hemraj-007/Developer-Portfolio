// src/components/KaleidoscopeMaterial.tsx
import React, { forwardRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { ShaderMaterial, Vector2 } from 'three';

const KaleidoscopeShaderMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new Vector2(),
  },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform float time;
  uniform vec2 resolution;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    float a = atan(p.y, p.x) + time * 0.5;
    float k = 6.0; // Number of reflections
    a = mod(a, 2.0 * 3.14159 / k) * k;
    vec3 color = vec3(0.5 + 0.5 * cos(time + vec3(0.0, 2.0, 4.0)));
    gl_FragColor = vec4(color, 1.0);
  }
  `
);

extend({ KaleidoscopeShaderMaterial });

const KaleidoscopeMaterial = forwardRef<ShaderMaterial>((props, ref) => {
  useFrame(({ clock, size }) => {
    if (ref && 'current' in ref && ref.current) {
      (ref.current as any).uniforms.time.value = clock.getElapsedTime();
      (ref.current as any).uniforms.resolution.value.set(size.width, size.height);
    }
  });

  return <kaleidoscopeShaderMaterial ref={ref} attach="material" {...props} />;
});

export default KaleidoscopeMaterial;
