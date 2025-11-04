import React from "react";
import { proyects } from "../utils/proyects";
import proyectsSvg from "../assets/proyects.svg";
import "../styles/proyects.css";

export const Proyects = () => {
  return (
    <>
      <section id="proyects" className="section-proyects">
        <section className="section-proyects-header">
          <img src={proyectsSvg} alt="photo" />
          <h1>Proyectos</h1>
        </section>
        <section className="section-proyects-content">
          {proyects.map((proyect, index) => (
            <article key={index}>
              <div className="left-container">
                <a href={proyect.link} target="_blank" rel="noopener noreferrer">
                  <img src={proyect.img_url} alt="photo" />
                </a>
              </div>
              <div className="right-container">
                <h2>{proyect.title}</h2>
                <div className="tech-stack">
                  {proyect.tech_stack.map((tech, index) => (
                    <div key={index}>
                      <img src={tech.url} alt="photo" />
                    </div>
                  ))}
                </div>
                <p>{proyect.description}</p>
              </div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
};
