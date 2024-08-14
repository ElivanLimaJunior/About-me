import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/LogoFooter2.png";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import navIcon2 from '../../assets/img/Footergithub.svg';

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
              <a href="https://www.linkedin.com/in/elivanjunior/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.instagram.com/ei.elivan/" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://github.com/ElivanLimaJunior" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt='' />
              </a>
            </div>
            <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
            Copyright 2024. © Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
