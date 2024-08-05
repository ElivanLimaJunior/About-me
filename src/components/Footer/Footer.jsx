import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
            <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <div className="social-icon mb-2">
              <a href="https://www.linkedin.com/in/mayconpachecooficial/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/mayconpachecooficial" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="ms-3">
                <i className="bi bi-github"></i>
              </a>
            </div>
            <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
              Copyright 2024. &copy; Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
