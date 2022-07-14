import particlesOptions from "../../particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "./particles.css";
import { HomeData, HomeIcons } from "./styles";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Hello() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        options={particlesOptions as unknown as ISourceOptions}
        init={particlesInit}
      />
      <HomeData>
        <h1>Nazareno Gonzalez</h1>
        <p>Frontend Developer</p>

        <HomeIcons>
          <button>
            <a
              href="https://www.linkedin.com/in/nazareno-gonzalez-62b028204/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </button>
          <button>
            <a
              href="https://github.com/Lemongnz"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </button>
        </HomeIcons>
      </HomeData>
    </>
  );
}
