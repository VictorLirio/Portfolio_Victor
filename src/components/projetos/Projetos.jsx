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
            <h3 className="projetos_title">Projetos<br /> Freelance</h3>
          </div>

          <span className="projetos_button" onClick={() => toggleTab(1)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right projetos_button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "projetos_modal active-modal" : "projetos_modal"}>
            <div className="projetos_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projetos_modal-close"></i>
              <h3 className="projetos_modal-title">Desenvolvedor web freelancer</h3>
              <p className="projetos-modal-description">
              Desenvolvimento de um sistema escolar (Python e Django)


              </p>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Desenvolvimento de um sistema de gestão acadêmica para monitorar o desempenho dos alunos.
                    
                  </p>
                </li>
              </ul>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Abrangeu áreas como notas, faltas, ocorrências, proporcionando uma visão integrada e organizada do comportamento dos estudantes.
                  </p>
                </li>
              </ul>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  A solução implementada ofereceu uma abordagem eficaz para o acompanhamento e registro abrangente do desempenho dos alunos, 
                  contribuindo para uma gestão acadêmica mais eficiente e organizada.
                  </p>
                </li>
              </ul>
              <span></span>
              <p className="projetos-modal-description">
              Criação de sites (JavaScript, React, Node, SQL)

              </p>
<span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Concentração específica em lojas virtuais e diversos nichos, destacando uma abordagem estratégica para atender às necessidades específicas 
                  desses setores.
                  </p>
                </li>
              </ul>

              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Especialização no desenvolvimento frontend com o objetivo de oferecer eficiência e atratividade visual, resultando em soluções personalizadas para 
                  atender às demandas específicas e variadas dos clientes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projetos_content">
          <div>
            <i className="uil uil-arrow projetos_icon"></i>
            <h3 className="projetos_title">Projetos na empresa <br />EMP </h3>
          </div>

          <span className="projetos_button" onClick={() => toggleTab(2)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right projetos_button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "projetos_modal active-modal" : "projetos_modal"}>
            <div className="projetos_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projetos_modal-close"></i>
              <h3 className="projetos_modal-title">Estagio Desenvolvimento Full Stack</h3>
              <p className="projetos-modal-description">
              Desenvolvimento de um sistema interno (PHP e React)
              </p>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Criação interna de um sistema FAQ com foco principal em facilitar a integração de novos funcionários.
                  </p>
                </li>
              </ul>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Utilização de tecnologias adequadas para a lógica do servidor, interface do usuário e armazenamento de dados, 
                  proporcionando uma solução ágil e acessível. Adição de funcionalidades específicas para orientação e suporte, 
                  transformando o sistema em uma ferramenta valiosa durante o processo de adaptação da equipe.
                  </p>
                </li>
              </ul>
              <span></span>
              <p className="projetos-modal-description">
              Desenvolvimento do sistema de contratos (Java e SQL)
              </p>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Desenvolvimento de um sistema dedicado à gestão de contratos para diversas empresas.
                  </p>
                </li>
              </ul>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Assegurou o pagamento de impostos em conformidade com as leis estaduais, incluindo o acompanhamento eficiente das obrigações fiscais.
                  </p>
                </li>
              </ul>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Proporcionou uma solução abrangente que não apenas garantiu a conformidade, mas também facilitou a gestão tributária para as empresas envolvidas, 
                  otimizando os processos relacionados a obrigações fiscais.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projetos_content">
          <div>
            <i className="uil uil-edit projetos_icon"></i>
            <h3 className="projetos_title">Projetos na empresa <br />Storaze</h3>
          </div>

          <span className="projetos_button" onClick={() => toggleTab(3)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right projetos_button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "projetos_modal active-modal" : "projetos_modal"}>
            <div className="projetos_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projetos_modal-close"></i>
              <h3 className="projetos_modal-title">Analista de Desenvolvimento de SoftWare</h3>
              <p className="projetos-modal-description">
              Desenvolvimento do projeto “Social” (Java e SQL)
              </p>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos_modal-icon "></i>
                  <p className="projetos_modal-info">
                  Atuação como líder no projeto "Social", com o objetivo de abordar deficiências nos sistemas sociais municipais de prefeituras.
                  </p>
                </li>
              </ul>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Ênfase nas áreas relacionadas ao bem-estar da comunidade, visando melhorar a qualidade de vida dos cidadãos.
                  </p>
                </li>
              </ul>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Desenvolvimento de uma iniciativa para facilitar o acesso das pessoas a tratamentos e serviços sociais, promovendo a inclusão e a assistência necessária.
                  </p>
                </li>
              </ul>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Busca por otimização dos processos municipais, oferecendo uma solução abrangente e eficaz para melhorar a eficiência na gestão de programas sociais.
                  </p>
                </li>
              </ul>
              <span></span>
              <ul className="projetos_modal-projetos grid ">
                <li className="projetos_modal-projeto">
                  <i className="uil uil-check-circle projetos-modal-icon"></i>
                  <p className="projetos_modal-info">
                  Contribuição para o desenvolvimento do município ao garantir que recursos e assistência estejam disponíveis, demonstrando cuidado e atenção aos cidadãos locais.
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
