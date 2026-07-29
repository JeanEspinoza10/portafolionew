import React from "react";
import { hability } from "../utils/education";
import educationSvg from "../assets/education.svg";
import "../styles/educations.css";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export const Education = () => {
  return (
    <>
      <section className="section-education">
        <section className="section-education-container">
          <motion.section
            className="section-education-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={educationSvg} alt="Habilidades" />
            <h1>Habilidades</h1>
          </motion.section>

          <section className="section-education-content">
            {hability.map((item, index) => (
              <section key={index} className="skill-category">
                <h2>{item.title}</h2>

                <motion.div
                  className="skills-container"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  {item.values.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      animate={{
                        y: [0, -5, 0, 5, 0],
                        rotate: [0, 1, 0, -1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: skillIndex * 0.2,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 5,
                      }}
                    >
                      <img src={skill.url} alt={skill.name} />
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};
