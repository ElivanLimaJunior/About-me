import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import capa from '../../assets/img-projects/1/capa.png';

export const PowerBIProject = ({ isOriginalText }) => {
  const title = isOriginalText ? "Projeto Power BI" : "Power BI Project";
  const description = isOriginalText 
    ? "Descrição do projeto em Power BI, onde detalho as funcionalidades, dados utilizados, e insights gerados."
    : "Description of the Power BI project, where I detail the functionalities, data used, and insights generated.";

  return (
    <section className="powerbi-project">
      <Container>
        <Row>
          <Col>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="iframe-container">
              <iframe
                title="Projeto Power BI"
                src="https://app.powerbi.com/view?r=eyJrIjoiZGNmMDkwMGEtYzk2OC00YmZjLWJhMjQtZTExMDhhMTQwY2E0IiwidCI6ImU4ZDY4ZTVhLTkxYjMtNDFiNy04NDVhLTNhYzNhNzMyMGJkNCJ9"
                allowFullScreen
              />
            </div>
            <div className="mobile-view">
              <img
                src={capa}
                alt="Preview do Projeto"
                className="mobile-image"
              />
              <Button
                variant="primary"
                href="https://app.powerbi.com/view?r=eyJrIjoiZGNmMDkwMGEtYzk2OC00YmZjLWJhMjQtZTExMDhhMTQwY2E0IiwidCI6ImU4ZDY4ZTVhLTkxYjMtNDFiNy04NDVhLTNhYzNhNzMyMGJkNCJ9"
                target="_blank"
              >
                {isOriginalText ? "Ver Projeto" : "View Project"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
