import React from "react";
import "../styles/experiencie.css";
import { calculateExperience, experiencie } from "../utils/experiencie";
import experiencieSvg from "../assets/experiencie.svg";
import { motion } from "motion/react";

export const Experiencie = () => {
  const experienceTime = calculateExperience();
  return (
    <>
      <section id="experience" className="section-experience">
        <section className="section-experience-container">
          <motion.section
            className="section-experience-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={experiencieSvg} alt="Experiencia" />
            <h1>Experiencia</h1>
            <span className="experience-years">
              +{experienceTime.years} años
              {experienceTime.months > 0 && ` ${experienceTime.months} meses`}
            </span>
          </motion.section>

          <section className="section-experience-content">
            {experiencie.map((experience, index) => (
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
                  <h2>{experience.title}</h2>
                  <p>{experience.company}</p>
                  <p className="date">{experience.date}</p>
                </div>

                <div className="right-container">
                  <p>{experience.description}</p>
                </div>
              </motion.article>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};
