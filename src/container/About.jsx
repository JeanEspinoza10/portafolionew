import React from 'react'
import { about } from '../utils/about'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import '../styles/about.css'

export const About = () => {

  return <>
    <section className='section-about'>
       <img src="src\assets\photo.png" alt="photo" />
       <section className='section-about-content'>
         <h1>{about[0].greeting}</h1>
         <p>{about[0].description}</p>
       </section>
       <footer className='section-about-footer'>
            <a href="https://www.linkedin.com/in/jcespinozacdev/"
               target="_blank"
            > 
                <img src={linkedin} alt="linkedin"  />
            </a>
            <a href="https://www.linkedin.com/in/jcespinozacdev/"
               target="_blank"
            > 
                <img src={github} alt="github"  />
            </a>
       </footer>
    </section>
  </>
}
