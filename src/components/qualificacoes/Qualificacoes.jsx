import React, { useState } from "react";
import "./qualificacoes.css";

function Qualificacoes() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualificacoes section" id="qualificacoes">
      <h2 className="section_title">Qualificações</h2>
      <span className="section_subtitle">Minha carreira profissional</span>

      <div className="qualificacoes_container container">
        <div className="qualificacoes_tabs">
          <div
            className={
              toggleState === 1
                ? "qualificacoes_button qualificacoes_active button--flex"
                : "qualificacoes_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualificacoes_icon"></i>{" "}
            Experiencia
          </div>

          <div
            className={
              toggleState === 2
                ? "qualificacoes_button qualificacoes_active button--flex"
                : "qualificacoes_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualificacoes_icon"></i>{" "}
            Educação
          </div>
        </div>

        <div className="qualificacoes_sections">
          <div
            className={
              toggleState === 1
                ? "qualificacoes_content qualificacoes_content-active"
                : "qualificacoes_content"
            }
          >
            <div className="qualificacoes_data">
              <div>
                <h3 className="qualificacoes_title">Analista de Desenvolvimento de SoftWare</h3>
                <span className="qualificacoes_subtitle">
                Storaze
                </span>
                <div className="qualificacoes_calendar">
                  <i className="uil uil-calendar-alt">2023 - 2023</i>
                </div>
              </div>
              <div>
                <span className="qualificacoes_rounder"></span>
                <span className="qualificacoes_line"></span>
              </div>
            </div>

            <div className="qualificacoes_data">

              <div>
                <span className="qualificacoes_rounder"></span>
                <span className="qualificacoes_line"></span>
              </div>

              <div>
                <h3 className="qualificacoes_title">Estagio Desenvolvimento Full Stack</h3>
                <span className="qualificacoes_subtitle">
                EMP - Sistemas e Serviços
                </span>
                <div className="qualificacoes_calendar">
                  <i className="uil uil-calendar-alt">2022 - 2023</i>
                </div>
              </div>
            </div>

            <div className="qualificacoes_data">
              <div>
                <h3 className="qualificacoes_title">Auxiliar de T.I</h3>
                <span className="qualificacoes_subtitle">
                Storaze
                </span>
                <div className="qualificacoes_calendar">
                  <i className="uil uil-calendar-alt">2022 - 2022 </i>
                </div>
              </div>
              <div>
                <span className="qualificacoes_rounder"></span>
                <span className="qualificacoes_line"></span>
              </div>
            </div>

            <div className="qualificacoes_data">
              
              <div>
                <span className="qualificacoes_rounder"></span>
                <span className="qualificacoes_line"></span>
              </div>
              
              <div>
                <h3 className="qualificacoes_title">Desenvolvedor web freelancer</h3>
                <span className="qualificacoes_subtitle">
                Freelance
                </span>
                <div className="qualificacoes_calendar">
                  <i className="uil uil-calendar-alt">2021 - 2022</i>
                </div>
              </div>
            </div>

            
          </div>

          <div
            className={
              toggleState === 2
                ? "qualificacoes_content qualificacoes_content-active"
                : "qualificacoes_content"
            }
          >
            <div className="qualificacoes_data">
              <div>
                <h3 className="qualificacoes_title">Ciência da Computação</h3>
                <span className="qualificacoes_subtitle">
                  UNIP - Universidade Paulista
                </span>
                <div className="qualificacoes_calendar">
                  <i className="uil uil-calendar-alt">2020 - 2024</i>
                </div>
              </div>

              <div>
                <span className="qualificacoes_rounder"></span>
                <span className="qualificacoes_line"></span>
              </div>
            </div>

            <div className="qualificacoes_data">
              <div></div>

              <div>
                <span className="qualificacoes_rounder"></span>
                <span className="qualificacoes_line"></span>
              </div>

              <div>
                <h3 className="qualificacoes_title">Desenvolvimento WEB</h3>
                <span className="qualificacoes_subtitle">Udemy</span>
                <div className="qualificacoes_calendar">
                  <i className="uil uil-calendar-alt">118 horas</i>
                </div>
              </div>
            </div>

            <div className="qualificacoes_data">
              <div>
                <h3 className="qualificacoes_title">Curso de Python 3 </h3>
                <span className="qualificacoes_subtitle">
                Udemy
                </span>
                <div className="qualificacoes_calendar">
                  <i className="uil uil-calendar-alt">141 horas</i>
                </div>
              </div>

              <div>
                <span className="qualificacoes_rounder"></span>
                <span className="qualificacoes_line"></span>
              </div>
            </div>

            <div className="qualificacoes_data">

              <div>
                <span className="qualificacoes_rounder"></span>
                <span className="qualificacoes_line"></span>
              </div>

              <div>
                <h3 className="qualificacoes_title">Java COMPLETO </h3>
                <span className="qualificacoes_subtitle">
                Udemy
                </span>
                <div className="qualificacoes_calendar">
                  <i className="uil uil-calendar-alt">54 horas</i>
                </div>
              </div>

            </div>

            <div className="qualificacoes_data">
              <div>
                <h3 className="qualificacoes_title">PHP do Zero </h3>
                <span className="qualificacoes_subtitle">
                Udemy
                </span>
                <div className="qualificacoes_calendar">
                  <i className="uil uil-calendar-alt">19 horas</i>
                </div>
              </div>

              <div>
                <span className="qualificacoes_rounder"></span>
                <span className="qualificacoes_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualificacoes;
