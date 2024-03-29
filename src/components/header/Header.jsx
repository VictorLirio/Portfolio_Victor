import React, { useState } from 'react';
import "./header.css";

const Header = () => {
  /*=============== Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 300) header.classList.add ("scroll-header")
    else header.classList.remove("scroll-header")
  })

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home")
  
  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" className="nav_logo">Juliana</a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className='nav_list grid'>
            <li className='nav_item'>
              <a href="#home" onClick={() => setActiveNav ('#home')} className={activeNav === "#home"
               ? "nav_link active-link"  : "nav_link "}>
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className='nav_item'>
              <a href="#about" onClick={() => setActiveNav ('#about')} className={activeNav === "#about"
               ? "nav_link active-link"  : "nav_link "}>
                <i className="uil uil-user nav_icon"></i> Sobre mim
              </a>
            </li>

            <li className='nav_item'>
              <a href="#skills" onClick={() => setActiveNav ('#skills')} className={activeNav === "#skills"
               ? "nav_link active-link"  : "nav_link "}>
                <i className="uil uil-file-alt nav_icon"></i> Habilidades
              </a>
            </li>

            <li className='nav_item'>
              <a href="#projetos" onClick={() => setActiveNav ('#projetos')} className={activeNav === "#projetos"
               ? "nav_link active-link"  : "nav_link "}>
                <i className="uil uil-briefcase-alt nav_icon"></i> Projetos
              </a>
            </li>

            <li className='nav_item'>
              <a href="#qualificacoes" onClick={() => setActiveNav ('#qualificacoes')} className={activeNav === "#qualificacoes"
               ? "nav_link active-link"  : "nav_link "}>
                <i className="uil uil-scenery nav_icon"></i> Qualificações
              </a>
            </li>

            <li className='nav_item'>
              <a href="#contato" onClick={() => setActiveNav ('#contato')} className={activeNav === "#contato"
               ? "nav_link active-link"  : "nav_link "}>
                <i className="uil uil-message nav_icon"></i> Contato
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav_close"onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;