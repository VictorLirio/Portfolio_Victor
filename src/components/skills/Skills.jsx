import React from 'react'
import "./skills.css";
import Backend from './Backend';
import Frontend from './Frontend';

function Skills() {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section_title'>Habilidades</h2>
      <span className="section_subtitle">Nivel tecnico</span>

      <div className='skills_container container grid'>
        <Backend/>
        <Frontend/>

      </div>
    </section>
  )
}

export default Skills