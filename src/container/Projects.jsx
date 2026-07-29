import React from "react";
import { proyects } from "../utils/proyects";
import proyectsSvg from "../assets/proyects.svg";
import "../styles/proyects.css";
import { motion } from "motion/react";

export const Proyects = () => {
  return (
    <>
      <section id="projects" className="section-projects">
        <section className="section-projects-container">
          <motion.section
            className="section-projects-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={proyectsSvg} alt="Proyectos" />
            <h1>Proyectos</h1>
          </motion.section>

          <section className="section-projects-content">
            {proyects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="left-container">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      src={project.img_url}
                      alt={project.title}
                      whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                    />
                  </a>
                </div>

                <div className="right-container">
                  <h2>{project.title}</h2>

                  <div className="tech-stack">
                    {project.tech_stack.map((tech, techIndex) => (
                      <motion.img
                        key={techIndex}
                        src={tech.url}
                        alt="Tecnología"
                        whileHover={{
                          scale: 1.15,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      />
                    ))}
                  </div>

                  <p>{project.description}</p>
                </div>
              </motion.article>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};
