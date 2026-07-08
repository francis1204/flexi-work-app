"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { pointer } = state;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.12,
      0.03
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.08,
      0.03
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      pointer.x * 0.15,
      0.03
    );
  });

  return <group ref={group}>{children}</group>;
}

function FloatingCube({ position, size = 0.22, color = "#60A5FA" }: { position: [number, number, number]; size?: number; color?: string; }) {
  return (
    <Float speed={1.4} floatIntensity={1.1} rotationIntensity={0.8}>
      <mesh position={position}>
        <boxGeometry args={[size, size * 0.65, size]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.45}
          toneMapped={false}
          metalness={0.35}
          roughness={0.28}
        />
      </mesh>
    </Float>
  );
}

function GlowRing({ position, scale = 1, color = "#7DD3FC" }: { position: [number, number, number]; scale?: number; color?: string; }) {
  return (
    <Float speed={1.1} floatIntensity={0.7} rotationIntensity={0.2}>
      <mesh position={position} scale={scale} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[0.9, 0.02, 16, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.8}
          toneMapped={false}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <ParallaxRig>
      <ambientLight intensity={0.28} />
      <directionalLight position={[2, 4, 4]} intensity={0.8} color="#DBEAFE" />
      <pointLight position={[-1.5, 1.2, 1]} intensity={0.35} color="#38BDF8" />
      <pointLight position={[1.8, -0.4, 1.4]} intensity={0.25} color="#93C5FD" />

      <FloatingCube position={[1.2, 0.6, 0.3]} color="#60A5FA" />
      <FloatingCube position={[0.35, -0.7, 0.15]} size={0.18} color="#A5B4FC" />
      <FloatingCube position={[1.7, -0.2, -0.25]} size={0.14} color="#7DD3FC" />

      <GlowRing position={[0.55, 0.9, -0.4]} scale={0.9} color="#60A5FA" />
      <GlowRing position={[1.6, -0.35, 0.2]} scale={1.05} color="#7DD3FC" />

      <Sparkles
        count={38}
        scale={[6, 4, 3]}
        size={1.8}
        speed={0.3}
        color="#93C5FD"
      />
    </ParallaxRig>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 45 }}
      dpr={[1, 1.5]}
      className="!absolute inset-0"
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl, scene }) => {
        gl.setClearAlpha(0);
        scene.background = null;
      }}
    >
      <Scene />
    </Canvas>
  );
}
