import React from 'react'
import '../styles/experiencie.css'
import { experiencie } from '../utils/experiencie'

export const Experiencie = () => {
  return <>
    <section id='experience' className='section-experience'>

        <section className='section-experience-header'>
          <img src="src\assets\experiencie.svg" alt="photo" />
          <h1>Experiencia</h1>
        </section>
        
        <section className='section-experience-content'>
            {experiencie.map((experience, index) => (
                <article key={index}>
                    <div className='left-container'>
                         <h2>{experience.title}</h2>
                         <p>{experience.company}</p>
                         <p className='date'>{experience.date}</p>
                    </div>
                    <div className='right-container'>
                        <p>{experience.description}</p>
                    </div>
                </article>
            ))}
        </section>
    </section>
  </>
}
