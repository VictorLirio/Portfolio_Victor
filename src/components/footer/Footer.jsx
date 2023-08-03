import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer_title">
        <h1 className="footer_title">Victor</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className='footer_link'>Sobre mim</a>
          </li>

          <li>
            <a href="#portfolio" className='footer_link'>Projetos</a>
          </li>    
        </ul>

        <div className="footer_social">
        <a href="https://www.instagram.com/vitera_dias" className="footer_social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/victordomingos-dev/" className="footer_social-link" target="_blank" rel="noreferrer">
        <i className="bx bxl-linkedin"></i>
        </a>
        
        <a href="https://github.com/VictorLirio" className="footer_social-link" target="_blank" rel="noreferrer">
        <i className="bx bxl-github"></i>
        </a>
        </div>

        <span className="footer_copy">&#169; VictorDias. All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer