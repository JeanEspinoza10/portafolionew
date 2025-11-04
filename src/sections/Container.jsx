import React from 'react'
import '../styles/container.css'
import { About } from '../container/About'
import { Experiencie } from '../container/Experiencie'
import { Proyects } from '../container/Projects'
import { Education } from '../container/Education'

export const Container = () => {
  return <>
    <section id='about' className='section-container'>
      <main>
        <About/>
        <Experiencie/>
        <Proyects/>
        <Education/>
      </main>
    </section>
  </>
}
