import BallCanvas from "./canvas/ball";
import { TECHNOLOGIES } from "../constants";
// Technologies
export const Tech = () => {
  return (
    <section>
      <div className="flex flex-row flex-wrap justify-center gap-0 md:gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-24 md:w-28 h-24 md:h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};
