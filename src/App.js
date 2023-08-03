import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projetos from './components/projetos/Projetos';
import Qualificacoes from './components/qualificacoes/Qualificacoes';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Projetos/>
      <Qualificacoes/>
      <Contato/>
    </main>

      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default App;
