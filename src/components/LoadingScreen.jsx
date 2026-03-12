import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";


export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();
  const [smoothedProgress, setSmoothedProgress] = useState(0);

  useEffect(() => {
    // Garante que o progresso só aumente, nunca diminua visualmente
    setSmoothedProgress((prev) => Math.max(prev, progress));
  }, [progress]);

return (
    <div className={`loading-screen ${started ? "loading-screen--hidden" : ""}`}>
      <div className="loading-screen__board">
        <h1 className="loading-screen__title">FERNANDA FORTES</h1>
        <div className="progress__container">
          <div 
            className="progress__bar" 
            style={{ width: `${smoothedProgress}%` }} // Usa o valor suavizado
          ></div>
        </div>
        <div className="progress__number">{smoothedProgress.toFixed(0)}%</div>
        
        {/* Usamos o smoothedProgress para liberar o botão */}
        {smoothedProgress >= 100 && (
          <button className="loading-screen__button" onClick={onStarted}>
            Portfólio
          </button>
        )}
      </div>
    </div>
  );
};