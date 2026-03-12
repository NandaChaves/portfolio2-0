import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Ball from "./canvas/ball";
import { TECHNOLOGIES } from "../constants";

function TechGrid() {
  const { viewport } = useThree();

  // número de colunas baseado na largura do viewport
  const cols =
    viewport.width > 14 ? 8 :
    viewport.width > 10 ? 6 :
    viewport.width > 6 ? 5 : 4;

  const spacing = 4.8 ;

  return (
    <>
      {TECHNOLOGIES.map((tech, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;

        // centralização real
        const offsetX = ((cols - 1) * spacing) / 2;

        const x = col * spacing - offsetX;
        const y = -row * spacing;

        return (
          <Ball
            key={tech.name}
            imgUrl={tech.icon}
            position={[x, y, 0]}
          />
        );
      })}
    </>
  );
}

const TechCanvas = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 22], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />

      <Suspense fallback={null}>
        <TechGrid />
      </Suspense>
    </Canvas>
  );
};

export default TechCanvas;