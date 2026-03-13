import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import herobgPath from '/src/assets/space.png';

export const Background = () => {
  const material = useRef();
  const sphereRef = useRef();
  const color = useRef({ color: "#2b2c3e" }); 
  const imageOpacity = useRef({ opacity: 1 });
  const data = useScroll(0);
  const tl = useRef(null);

  const texture = useTexture(herobgPath, (tex) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 1); 
    tex.flipY = false; 
  });

  useFrame((state) => {
    if (tl.current) {
      tl.current.progress(data.scroll.current);
    }

    if (material.current) {
      material.current.color = new THREE.Color(color.current.color);
      if (material.current.map) {
        material.current.map.opacity = imageOpacity.current.opacity;
      }
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.y = state.camera.position.y;
    }
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    
    tl.current
      .to(imageOpacity.current, { opacity: 1 }, 0)
      .to(color.current, { color: "#2b2c3e" }, 0)

      .to(imageOpacity.current, { opacity: 0 }, 1)
      .to(color.current, { color: "#3c3b3b" }, 1)

      .to(color.current, { color: "#7a7ca5" })
      .to(color.current, { color: "#8c89af" })
      .to(color.current, { color: "#14172f" })
      .to(color.current, { color: "#656674" }); 

  }, []);

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Detecta se a tela é menor que 768px (padrão mobile/tablet)
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);
  
  return (
    <group ref={sphereRef}>
      <Sphere scale={isMobile ? [60,60,50] : [100,100,100]}>
        <meshBasicMaterial 
          ref={material} 
          side={THREE.BackSide} 
          toneMapped={false}
          map={texture} 
          color={isMobile ? "#050816" : undefined} 
          transparent={!isMobile} 
        />
      </Sphere>
    </group>
  );
};