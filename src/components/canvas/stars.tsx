import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useRef, Suspense, useState } from "react";
import * as THREE from "three";

const Stars = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  
  // Geramos os pontos apenas uma vez
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(2000), { radius: 1.2 }) as Float32Array
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere} 
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;