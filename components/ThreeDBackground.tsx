"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Particle system component
function FloatingParticles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const initialPositions = useRef<Float32Array | null>(null);
  const particleCountRef = useRef(count);

  // Generate random particle positions - keep them closer to camera
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      // Keep particles in a smaller, visible range
      positions[i] = (Math.random() - 0.5) * 15;
    }
    initialPositions.current = new Float32Array(positions);
    particleCountRef.current = count;
    return positions;
  }, [count]);

  // Animate particles with time-based movement - truly autonomous
  useFrame((state) => {
    if (!mesh.current || !initialPositions.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Always apply rotation for visual motion
    mesh.current.rotation.x = Math.sin(time * 0.08) * 0.15;
    mesh.current.rotation.y = time * 0.04;
    mesh.current.rotation.z = Math.cos(time * 0.06) * 0.1;
    
    // Update positions if geometry is ready
    if (mesh.current.geometry) {
      const positionAttribute = mesh.current.geometry.attributes.position;
      
      if (positionAttribute && positionAttribute.array && positionAttribute.array.length > 0) {
        const bufferSize = positionAttribute.array.length;
        const expectedSize = particleCountRef.current * 3;
        
        // Only update positions if sizes match
        if (bufferSize === expectedSize && initialPositions.current.length === expectedSize) {
          const positions = positionAttribute.array as Float32Array;
          const actualCount = Math.min(particleCountRef.current, positions.length / 3);
          
          for (let i = 0; i < actualCount; i++) {
            const i3 = i * 3;
            if (i3 + 2 >= initialPositions.current.length) break;
            
            const baseX = initialPositions.current[i3];
            const baseY = initialPositions.current[i3 + 1];
            const baseZ = initialPositions.current[i3 + 2];
            
            // Create smooth, continuous motion
            positions[i3] = baseX + Math.sin(time * 0.3 + i * 0.1) * 2;
            positions[i3 + 1] = baseY + Math.cos(time * 0.25 + i * 0.15) * 2;
            positions[i3 + 2] = baseZ + Math.sin(time * 0.35 + i * 0.08) * 2;
          }
          positionAttribute.needsUpdate = true;
        }
      }
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B0000" // red-600
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Secondary particle system with different color
function FloatingParticlesSecondary({ count = 150 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const initialPositions = useRef<Float32Array | null>(null);
  const particleCountRef = useRef(count);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      // Keep particles in a smaller, visible range
      positions[i] = (Math.random() - 0.5) * 18;
    }
    initialPositions.current = new Float32Array(positions);
    particleCountRef.current = count;
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current || !initialPositions.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Always apply rotation for visual motion
    mesh.current.rotation.x = -Math.sin(time * 0.07) * 0.2;
    mesh.current.rotation.z = time * 0.025;
    mesh.current.rotation.y = Math.cos(time * 0.05) * 0.1;
    
    // Update positions if geometry is ready
    if (mesh.current.geometry) {
      const positionAttribute = mesh.current.geometry.attributes.position;
      
      if (positionAttribute && positionAttribute.array && positionAttribute.array.length > 0) {
        const bufferSize = positionAttribute.array.length;
        const expectedSize = particleCountRef.current * 3;
        
        // Only update positions if sizes match
        if (bufferSize === expectedSize && initialPositions.current.length === expectedSize) {
          const positions = positionAttribute.array as Float32Array;
          const actualCount = Math.min(particleCountRef.current, positions.length / 3);
          
          for (let i = 0; i < actualCount; i++) {
            const i3 = i * 3;
            if (i3 + 2 >= initialPositions.current.length) break;
            
            const baseX = initialPositions.current[i3];
            const baseY = initialPositions.current[i3 + 1];
            const baseZ = initialPositions.current[i3 + 2];
            
            positions[i3] = baseX + Math.cos(time * 0.28 + i * 0.12) * 1.8;
            positions[i3 + 1] = baseY + Math.sin(time * 0.32 + i * 0.18) * 1.8;
            positions[i3 + 2] = baseZ + Math.cos(time * 0.38 + i * 0.1) * 1.8;
          }
          positionAttribute.needsUpdate = true;
        }
      }
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFA100" // amber-500
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={1}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Third particle system
function FloatingParticlesTertiary({ count = 100 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const initialPositions = useRef<Float32Array | null>(null);
  const particleCountRef = useRef(count);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      // Keep particles in a smaller, visible range
      positions[i] = (Math.random() - 0.5) * 20;
    }
    initialPositions.current = new Float32Array(positions);
    particleCountRef.current = count;
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current || !initialPositions.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Always apply rotation for visual motion
    mesh.current.rotation.y = -time * 0.035;
    mesh.current.rotation.x = Math.cos(time * 0.09) * 0.12;
    mesh.current.rotation.z = Math.sin(time * 0.07) * 0.08;
    
    // Update positions if geometry is ready
    if (mesh.current.geometry) {
      const positionAttribute = mesh.current.geometry.attributes.position;
      
      if (positionAttribute && positionAttribute.array && positionAttribute.array.length > 0) {
        const bufferSize = positionAttribute.array.length;
        const expectedSize = particleCountRef.current * 3;
        
        // Only update positions if sizes match
        if (bufferSize === expectedSize && initialPositions.current.length === expectedSize) {
          const positions = positionAttribute.array as Float32Array;
          const actualCount = Math.min(particleCountRef.current, positions.length / 3);
          
          for (let i = 0; i < actualCount; i++) {
            const i3 = i * 3;
            if (i3 + 2 >= initialPositions.current.length) break;
            
            const baseX = initialPositions.current[i3];
            const baseY = initialPositions.current[i3 + 1];
            const baseZ = initialPositions.current[i3 + 2];
            
            positions[i3] = baseX + Math.sin(time * 0.4 + i * 0.14) * 1.5;
            positions[i3 + 1] = baseY + Math.cos(time * 0.33 + i * 0.16) * 1.5;
            positions[i3 + 2] = baseZ + Math.sin(time * 0.37 + i * 0.11) * 1.5;
          }
          positionAttribute.needsUpdate = true;
        }
      }
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#14b8a6" // teal-500
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={1}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Main 3D Background Component
export default function ThreeDBackground({ isMobile = false }: { isMobile?: boolean }) {
  const [mounted, setMounted] = useState(false);
  // Lock particle counts on initial mount to prevent buffer size mismatches on resize
  // Use window check to get accurate initial value
  const [particleCount] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 100 : 200;
    }
    return isMobile ? 100 : 200;
  });
  const [secondaryCount] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 75 : 150;
    }
    return isMobile ? 75 : 150;
  });
  const [tertiaryCount] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 50 : 100;
    }
    return isMobile ? 50 : 100;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1, width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        style={{ background: "transparent", width: '100%', height: '100%' }}
        dpr={[1, 2]}
      >
        {/* Multiple particle systems for depth and visual richness */}
        <FloatingParticles count={particleCount} />
        <FloatingParticlesSecondary count={secondaryCount} />
        <FloatingParticlesTertiary count={tertiaryCount} />
      </Canvas>
    </div>
  );
}
