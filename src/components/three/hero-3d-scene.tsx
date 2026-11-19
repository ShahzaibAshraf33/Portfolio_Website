"use client";

import React, { useRef, useMemo, Suspense, useSyncExternalStore } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { HeroFallback } from "./hero-fallback";

function checkWebGLSupport() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

function subscribeWebGL() {
  return () => {};
}

function TileWallGrid({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const groupRef = useRef<THREE.Group>(null);

  const tiles = useMemo(() => {
    const list: { position: [number, number, number]; key: string }[] = [];
    const cols = 9;
    const rows = 9;
    const spacing = 0.65;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = (c - cols / 2) * spacing;
        const y = (r - rows / 2) * spacing;
        const dist = Math.sqrt(x * x + y * y);
        const z = -dist * 0.15 - 0.8;
        list.push({ position: [x, y, z], key: `${c}-${r}` });
      }
    }
    return list;
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    const targetX = mouse.current[0] * 0.18;
    const targetY = mouse.current[1] * 0.18;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
  });

  return (
    <group ref={groupRef}>
      {tiles.map((tile) => (
        <mesh key={tile.key} position={tile.position}>
          <boxGeometry args={[0.55, 0.55, 0.06]} />
          <meshStandardMaterial
            color="#22070A"
            emissive="#520D13"
            emissiveIntensity={0.35}
            roughness={0.4}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function PortraitPlane({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, "/images/portrait-cutout.webp");

  useFrame(() => {
    if (!meshRef.current) return;
    const targetX = mouse.current[0] * 0.1;
    const targetY = mouse.current[1] * 0.1;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.08);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.08);
  });

  return (
    <mesh ref={meshRef} position={[0, -0.2, 0.2]}>
      <planeGeometry args={[2.5, 3.2]} />
      <meshBasicMaterial map={texture} transparent alphaTest={0.02} side={THREE.DoubleSide} />
    </mesh>
  );
}

function SceneLights({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const pointLightRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (pointLightRef.current) {
      pointLightRef.current.position.x = mouse.current[0] * 3;
      pointLightRef.current.position.y = mouse.current[1] * 3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} color="#FFEFEF" />
      <pointLight ref={pointLightRef} position={[0, 0, 2]} color="#C42B2B" intensity={3.5} distance={7} />
      <pointLight position={[-2, 2, -0.5]} color="#FF3333" intensity={2.0} distance={5} />
      <pointLight position={[2, -2, -0.5]} color="#7A1218" intensity={2.5} distance={5} />
      <directionalLight position={[0, 3, 3]} intensity={1.2} color="#FFFFFF" />
    </>
  );
}

export default function Hero3DScene() {
  const hasWebGL = useSyncExternalStore(subscribeWebGL, checkWebGLSupport, () => false);
  const mouse = useRef<[number, number]>([0, 0]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = [x, y];
  };

  const handlePointerLeave = () => {
    mouse.current = [0, 0];
  };

  if (!hasWebGL) {
    return <HeroFallback />;
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full aspect-[4/5] sm:aspect-[1/1] max-w-[540px] mx-auto flex items-center justify-center select-none"
    >
      <Suspense fallback={<HeroFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 3.8], fov: 45 }}
          className="w-full h-full rounded-2xl overflow-hidden"
          gl={{ antialias: true, alpha: true }}
        >
          <SceneLights mouse={mouse} />
          <TileWallGrid mouse={mouse} />
          <PortraitPlane mouse={mouse} />
        </Canvas>
      </Suspense>

      {/* Glass frame overlay with crimson rim glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 shadow-[0_0_35px_rgba(196,43,43,0.35)]" />
      
      {/* Floating status badge */}
      <div className="pointer-events-none absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-[#121214]/90 border border-[#C42B2B]/40 text-[10px] font-mono text-[#E4E4E7] tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C42B2B] animate-ping" />
        <span>3D REACT THREE FIBER</span>
      </div>
    </div>
  );
}
