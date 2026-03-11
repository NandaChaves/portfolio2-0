import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import herobgPath from '/src/assets/space.png';

export const Background = () => {
  const material = useRef();
  const sphereRef = useRef();
  const color = useRef({ color: "#2b2c3e" }); // Cor que ficará *atrás* da imagem
  const imageOpacity = useRef({ opacity: 1 }); // Controla a visibilidade da imagem
  const data = useScroll(0);
  const tl = useRef(null);

  // Carrega a textura da imagem
  const texture = useTexture(herobgPath, (tex) => {
    // Configura a textura para que ela não seja mapeada de forma distorcida
    // e seja exibida no lado interno da esfera.
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 1); 
    tex.flipY = false; // Importante para não ficar invertida
  });

  useFrame((state) => {
    // Atualiza o progresso da linha do tempo com base no scroll
    if (tl.current) {
      tl.current.progress(data.scroll.current);
    }

    // Aplica a cor de fundo
    if (material.current) {
      material.current.color = new THREE.Color(color.current.color);
      // Aplica a opacidade da imagem (esmaece a imagem para mostrar a cor)
      if (material.current.map) {
        material.current.map.opacity = imageOpacity.current.opacity;
      }
    }
    
    // Mantém a esfera centralizada na câmera
    if (sphereRef.current) {
      sphereRef.current.position.y = state.camera.position.y;
    }
  });

  useEffect(() => {
    // Cria a linha do tempo do GSAP
    tl.current = gsap.timeline();
    
    tl.current
      // 1ª Etapa (Seção Inicial): Mantém a imagem visível e a cor original
      .to(imageOpacity.current, { opacity: 1 }, 0)
      .to(color.current, { color: "#2b2c3e" }, 0) // Garante a cor inicial por trás

      // 2ª Etapa (Próxima Seção): Esmaece a imagem e muda para a primeira cor
      .to(imageOpacity.current, { opacity: 0 }, 1)
      .to(color.current, { color: "#212121" }, 1)

      // 3ª Etapa (E assim por diante, apenas mudando as cores e mantendo a imagem opaca)
      .to(color.current, { color: "#7a7ca5" })
      .to(color.current, { color: "#8c89af" })
      .to(color.current, { color: "#080a18" })
      .to(color.current, { color: "#656674" }); // Última página extra

  }, []);
  return (
    <group ref={sphereRef}>
      <Sphere scale={[100, 100, 100]}>
        <meshBasicMaterial 
          ref={material} 
          side={THREE.BackSide} 
          toneMapped={false}
          map={texture} // Define a imagem como textura
          map-color={0xFFFFFF} // Garante que a cor da imagem não seja tingida
          transparent={true} // Necessário para controlar a opacidade
        />
      </Sphere>
    </group>
  );
};