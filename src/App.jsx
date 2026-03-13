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

//<LoadingScreen started={started} onStarted={() => setStarted(true)} />
function App() {
  const [started, setStarted] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pages, setPages] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPages(7); 
      } else {
        setPages(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

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
      <MotionConfig transition={{ ...framerMotionConfig,}} >
        <Canvas shadows={!isMobile} camera={{ position: [0, 3, 10], fov: 42 }} dpr={[1, isMobile ? 1.2 : 2]} gl={{ antialias: !isMobile, powerPreference: "high-performance" }}>
          <Suspense fallback={null}>
          <color attach="background" args={["#050816"]}/>
          <ScrollControls pages={pages} damping={0.2}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
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
