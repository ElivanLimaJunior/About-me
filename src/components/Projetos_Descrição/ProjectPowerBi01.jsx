import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { NavBar2 } from "../NavBar/NavBar2";
import { Footer } from "../Footer/Footer";

import capaProjeto from '../../assets/img-projects/1/capa.png';

export const ProjectPowerBi01 = ({ isOriginalText, handleChangeText }) => {
  return (
    <>
      <NavBar2 isOriginalText={isOriginalText} handleChangeText={handleChangeText} />

      <section className="project-details">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h2 className="project-title">Gestão de Manutenção com Power BI</h2>

              <p className="project-description">
              Este projeto foi desenvolvido durante um evento online promovido pela Maintenance Intelligence, com foco na aplicação prática da análise de dados na manutenção industrial. Através do Power BI, desenvolvi um dashboard interativo que integra indicadores-chave de desempenho (KPIs), como Disponibilidade Operacional, MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair) e o Backlog de Ordens de Serviço.
              </p>

              <div className="project-image-wrapper">
                <iframe
                  title="Dashboard Solicitações de Serviço"
                  width="100%"
                  height="450"
                  src="https://app.powerbi.com/view?r=eyJrIjoiZGNmMDkwMGEtYzk2OC00YmZjLWJhMjQtZTExMDhhMTQwY2E0IiwidCI6ImU4ZDY4ZTVhLTkxYjMtNDFiNy04NDVhLTNhYzNhNzMyMGJkNCJ9"
                  frameBorder="0"
                  allowFullScreen
                  className="project-iframe"
                ></iframe>
              </div>


              <a
                href="https://app.powerbi.com/view?r=eyJrIjoiZGNmMDkwMGEtYzk2OC00YmZjLWJhMjQtZTExMDhhMTQwY2E0IiwidCI6ImU4ZDY4ZTVhLTkxYjMtNDFiNy04NDVhLTNhYzNhNzMyMGJkNCJ9"
                className="project-link-btn"
                target="_blank"
                rel="noreferrer"
              >
                Ver Projeto <ArrowRightCircle size={20} />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};
