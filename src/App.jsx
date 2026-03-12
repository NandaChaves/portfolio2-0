import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import StarsCanvas from "./components/canvas/stars";
import { Suspense } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
function App() {
  const [started, setStarted] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

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
    <>
    <LoadingScreen started={started} onStarted={() => setStarted(true)} />
      <MotionConfig transition={{...framerMotionConfig }}>
        <Canvas shadows={!isMobile} camera={{ position: [0, 3, 10], fov: 42 }} dpr={[1, isMobile ? 1.2 : 2]} gl={{ antialias: !isMobile,  powerPreference: "high-performance" }}>
          <Suspense fallback={null}>
          <color attach="background" args={["#050816"]}/>
          <ScrollControls pages={6} damping={0.2}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense fallback={null}>
                <Experience isMobile={isMobile} section={section} menuOpened={menuOpened} />
              </Suspense>
            </Scroll>
            <Scroll html>
              <Interface setSection={setSection} />
              {!isMobile && <StarsCanvas />}
            </Scroll>
          </ScrollControls>
          </Suspense>
        </Canvas>
        <Menu onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
