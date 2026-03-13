import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Ball from "./canvas/ball";
import { TECHNOLOGIES } from "../constants";

function TechGrid() {
  const { viewport } = useThree();

  const isMobile = viewport.width < 6;
  const cols = viewport.width > 14 ? 8 : viewport.width > 10 ? 6 : viewport.width > 6 ? 5 : 4;
  const spacing = isMobile ? 5 : 5.5;

  // CÁLCULO DINÂMICO:
  const rows = Math.ceil(TECHNOLOGIES.length / cols);
  const gridHeight = (rows - 1) * spacing;
  const gridWidth = (cols - 1) * spacing;

  return (
    <>
    {TECHNOLOGIES.map((tech, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;

        // Centraliza horizontalmente e verticalmente no viewport
        const x = col * spacing - gridWidth / 2;
        const y = -(row * spacing) + gridHeight / 2; 

        return (
          <Ball
            key={tech.name}
            imgUrl={tech.icon}
            position={[x, y, 0]}
            scale={isMobile ? 1 : 2.6}
          />
        );
      })}
    </>
  );
}

const TechCanvas = () => {
  const isMobileView = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
     camera={{ 
        position: isMobileView ? [0, 0, 25] : [0, 0, 20], 
        fov: isMobileView ? 50 : 42 
      }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />

      <Suspense fallback={null}>
        <TechGrid />
      </Suspense>
    </Canvas>
  );
};

export default TechCanvas;