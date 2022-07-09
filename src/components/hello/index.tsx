import particlesOptions from "../../particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "./particles.css";

export default function Hello() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <div>Nazareno Gonzalez</div>
    </>
  );
}
