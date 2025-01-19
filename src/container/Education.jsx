import React from "react";
import {  hability } from "../utils/education";
import educationSvg from "../assets/education.svg";
import "../styles/educations.css";

export const Education = () => {
  return (
    <>
      <section className="section-education">
        <section className="section-education-header">
          <img src={educationSvg} alt="photo" />
          <h1>Habilidades</h1>
        </section>
        <section className="section-education-content">
          {hability.map((hability, habilityIndex) => (
            <article key={`hability-${habilityIndex}`}>
              <div className="container-header">
                <h2>{hability.title}</h2>
              </div>
              <div
                key={`hability-content-${habilityIndex}`}
                className="container-content"
              >
                <div className="carousel-track">
                  <div
                    className="group-original"
                    key={`hability-${habilityIndex}-value-original`}
                  >
                    {hability.values.map((value, valueIndex) => (
                      <div key={`item-${habilityIndex}-${valueIndex}-original`}>
                        <img src={value.url} alt="tech-stack" />
                      </div>
                    ))}
                  </div>

                  <div
                    className="group-clone"
                    aria-hidden="true"
                    key={`hability-${habilityIndex}-value-clone`}
                  >
                    {hability.values.map((value, valueIndex) => (
                      <div key={`item-${habilityIndex}-${valueIndex}-clone`}>
                        <img src={value.url} alt="tech-stack" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
};
