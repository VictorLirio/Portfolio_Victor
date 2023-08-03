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
            <h3 className="projetos_title">Design do<br /> Produto</h3>
          </div>

          <span className="projetos_button" onClick={() => toggleTab(1)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right projetos_button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "projetos_modal active-modal" : "projetos_modal"}>
            <div className="projetos_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projetos_modal-close"></i>
              <h3 className="projetos_modal-title">Produto Designer</h3>
              <p className="projetos-modal-description">
                ESCREVER SOBRE O PROJETO AQUI
              </p>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projetos_content">
          <div>
            <i className="uil uil-arrow projetos_icon"></i>
            <h3 className="projetos_title">Projeto <br />2 </h3>
          </div>

          <span className="projetos_button" onClick={() => toggleTab(2)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right projetos_button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "projetos_modal active-modal" : "projetos_modal"}>
            <div className="projetos_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projetos_modal-close"></i>
              <h3 className="projetos_modal-title">Projeto 2</h3>
              <p className="projetos-modal-description">
                ESCREVER SOBRE O PROJETO AQUI
              </p>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projetos_content">
          <div>
            <i className="uil uil-edit projetos_icon"></i>
            <h3 className="projetos_title">Projeto <br />3</h3>
          </div>

          <span className="projetos_button" onClick={() => toggleTab(3)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right projetos_button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "projetos_modal active-modal" : "projetos_modal"}>
            <div className="projetos_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projetos_modal-close"></i>
              <h3 className="projetos_modal-title">Projeto 3</h3>
              <p className="projetos-modal-description">
                ESCREVER SOBRE O PROJETO AQUI
              </p>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos_modal-icon "></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                    Eu desenvolvi essa aplicação
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
