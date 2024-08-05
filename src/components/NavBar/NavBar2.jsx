import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importando o Link do React Router

import logo from '../../assets/img/logo.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import translate2 from '../../assets/img/translation.png';

export const NavBar2 = ({ isOriginalText, handleChangeText }) => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <div className="circle-container">
                        <img src={logo} alt="Logo" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                            {isOriginalText ? 'Home' : 'Início'}
                        </Link>
                        <Link to="/projeto01" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                            {isOriginalText ? 'Projects' : 'Projetos'}
                        </Link>
                        <Link to="/certifications" className={activeLink === 'certifications' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certifications')}>
                            {isOriginalText ? 'Certifications' : 'Certificados'}
                        </Link>
                        <Link to="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>
                            {isOriginalText ? 'About me' : 'Sobre mim'}
                        </Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/elivanjunior/" target="_blank" rel="noreferrer">
                                <img src={navIcon1} alt="" />
                            </a>
                            <a href="https://www.instagram.com/ei.elivan/" target="_blank" rel="noreferrer">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                        <button className="vvd" onClick={handleChangeText}>
                            <span>{isOriginalText ? "Em Português" : "In English"}</span>
                            <img src={translate2} alt="translate" style={{ width: '20px', height: '20px', marginLeft: '20px' }} />
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
