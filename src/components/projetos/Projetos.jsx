import React, { useState } from "react";
import "./projetos.css";

function Projetos() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="projetos section" id="projetos">
      <h2 className="section_title">Projetos</h2>
      <span className="section_subtitle">Meus projetos</span>

      <div className="projetos_container container grid">
        <div className="projetos_content">
          <div>
            <i className="uil uil-web-grid projetos_icon"></i>
            <h3 className="projetos_title">Projeto <br /> “Breshopping”</h3>
          </div>

          <span className="projetos_button" onClick={() => toggleTab(1)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right projetos_button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "projetos_modal active-modal" : "projetos_modal"}>
            <div className="projetos_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projetos_modal-close"></i>
              <h3 className="projetos_modal-title">By Juliana Gaion</h3>
              <p className="projetos-modal-description">
                Projeto Web - JavaScript | HTML | CSS | React | MySQL
              </p>
              <br />
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Desenvolvi um website abrangente
                    utilizando as linguagens JavaScript, HTML,
                    CSS e React para o front-end,
                    proporcionando aos usuários uma
                    experiência moderna e interativa. No
                    back-end, integrei o MySQL como banco
                    de dados para gerenciar eficientemente o
                    armazenamento e recuperação de dados.
                    <br />
                    O site apresenta uma interface intuitiva e
                    atrativa, refletindo meu comprometimento
                    com o design responsivo e a usabilidade.
                    Utilizei React para criar componentes
                    dinâmicos que melhoram a interatividade
                    e a fluidez da experiência do usuário.

                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="projetos_content">
          <div>
            <i className="uil uil-arrow projetos_icon"></i>
            <h3 className="projetos_title">Projeto  <br />“Twitter Clone” </h3>
          </div>

          <span className="projetos_button" onClick={() => toggleTab(2)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right projetos_button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "projetos_modal active-modal" : "projetos_modal"}>
            <div className="projetos_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projetos_modal-close"></i>
              <h3 className="projetos_modal-title">By Juliana Gaion + 3 colaboradores</h3>
              <p className="projetos-modal-description">
                Projeto FullStack - JavaScript | HTML | CSS | React | Node.js | MySQL
              </p>
              <br />
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    O “Twitter Clone” é um projeto que
                    concebemos e desenvolvemos, visando
                    reproduzir as funcionalidades
                    fundamentais do Twitter, proporcionando
                    uma experiência familiar aos usuários.
                    <br />
                    Utilizei uma abordagem completa de stack
                    tecnológica, incorporando JavaScript,
                    HTML, CSS, React para o front-end e
                    Node.js para o back-end. O banco de
                    dados MySQL foi adotado para gerenciar
                    eficientemente a persistência de dados.
                    <br />
                    A interface do "Twitter Clone" é moderna
                    e responsiva, oferecendo uma experiência
                    de usuário intuitiva. A escolha do React
                    permitiu a criação de componentes
                    dinâmicos, melhorando a interatividade do
                    aplicativo. Node.js foi utilizado para criar
                    um back-end robusto, fornecendo
                    endpoints para funcionalidades como
                    postagem de tweets, perfis de usuários e
                    interações sociais.

                  </p>
                </li>
              </ul>


            </div>
          </div>
        </div>

        <div className="projetos_content">
          <div>
            <i className="uil uil-edit projetos_icon"></i>
            <h3 className="projetos_title">Site <br />Eccomerce</h3>
          </div>

          <span className="projetos_button" onClick={() => toggleTab(3)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right projetos_button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "projetos_modal active-modal" : "projetos_modal"}>
            <div className="projetos_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projetos_modal-close"></i>
              <h3 className="projetos_modal-title">By Juliana Gaion</h3>
              <p className="projetos-modal-description">
                Projeto WEB - JavaScript | HTML | CSS | React | MySQL
              </p>
              <br />
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos_modal-icon "></i>
                  <p className="projetos_modal-info">
                    O projeto "E-commerce Empório Vintage" representa um site de comércio eletrônicodesenvolvido com
                    JavaScript e React. Este projeto foi concebido para proporcionar aos usuários uma experiência de
                    compra online envolvente, concentrando-se em produtos vintage cuidadosamente selecionados.
                    A interface do site é responsiva, garantindo uma experiência consistente em diferentes
                    dispositivos. O catálogo de produtos é apresentado de forma dinâmica, facilitando a exploração e pesquisa.
                    <br />
                    O sistema de carrinho de compras e checkout é eficiente e seguro, enquanto a autenticação de usuários permite
                    que clientes criem contas, rastreiem pedidos e salvem produtos favoritos. Além disso, o site incorpora a
                    funcionalidade de avaliações e comentários, promovendo transparência e interação entre os usuários
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
