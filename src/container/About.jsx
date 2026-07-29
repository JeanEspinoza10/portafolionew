import React from "react";
import { about } from "../utils/about";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import photo from "../assets/photo.png";
import "../styles/about.css";
import { motion } from "motion/react";

export const About = () => {
  return (
    <>
      <section className="section-about">
        <section className="section-about-container">
          <motion.img
            src={photo}
            alt="photo"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            animate={{
              y: [0, -5, 0],
            }}
            style={{ animationDelay: "2s" }}
          />

          <section className="section-about-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {about[0].greeting}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {about[0].description}
            </motion.p>
          </section>

          <footer className="section-about-footer">
            <a
              href="https://www.linkedin.com/in/jcespinozacdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>

            <a
              href="https://github.com/JeanEspinoza10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </footer>
        </section>
      </section>
    </>
  );
};
