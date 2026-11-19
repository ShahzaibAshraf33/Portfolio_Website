"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Pure deterministic pseudo-random function
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function DotGlobeSphere({ isVisible }: { isVisible: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate 2500 points distributed over a sphere using Fibonacci spiral
  const { positions, colors } = useMemo(() => {
    const count = 2500;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const radius = 1.6;

    const baseRed = new THREE.Color("#C42B2B");
    const deepRed = new THREE.Color("#641917");
    const brightRed = new THREE.Color("#FF4D4D");

    const phi = Math.PI * (Math.sqrt(5) - 1); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      pos[i * 3] = x * radius;
      pos[i * 3 + 1] = y * radius;
      pos[i * 3 + 2] = z * radius;

      // Pure deterministic color variation
      const rand = pseudoRandom(i + 1);
      const lerpColor = rand > 0.85 ? brightRed : (rand > 0.5 ? baseRed : deepRed);
      col[i * 3] = lerpColor.r;
      col[i * 3 + 1] = lerpColor.g;
      col[i * 3 + 2] = lerpColor.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((_, delta) => {
    if (!isVisible || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.25;
    pointsRef.current.rotation.x = 0.2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

export function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[190px] flex items-center justify-center">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3.2], fov: 50 }}
        className="w-full h-full pointer-events-none"
        gl={{ alpha: true, antialias: false }}
      >
        <DotGlobeSphere isVisible={isVisible} />
      </Canvas>
      {/* Globe central glow backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-28 h-28 rounded-full bg-[#C42B2B]/20 blur-xl" />
      </div>
    </div>
  );
}
