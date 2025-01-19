import React from 'react'
import linkedin from '../assets/linkedin.svg'
import '../styles/footer.css'

export const Footer = () => {
  return <>
    <section className='main-footer'>
        <section className='section-footer'>
          <section className='section-footer-content'>
          <p>© 2025 Jean Espinoza</p>
                <a href="https://www.linkedin.com/in/jcespinozacdev/"
                               target="_blank"
                            > 
                                <img src={linkedin} alt="linkedin"  />
                            </a>

          </section>
    
                
        </section>
    </section>
  </>
}
