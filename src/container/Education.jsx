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

                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  slidesPerView={5}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={3000}
                  breakpoints={{
                    320: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },

                    640: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },

                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {[...item.values, ...item.values].map((skill, skillIndex) => (
                    <SwiperSlide key={skillIndex}>
                      <div className="skill-item">
                        <img src={skill.url} alt={skill.name} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};
