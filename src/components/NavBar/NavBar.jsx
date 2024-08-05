import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import translate2 from '../../assets/img/translation.png';

export const NavBar = ({ isOriginalText, handleChangeText  }) => {
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
                    <div className="circle-container"> {/* Contêiner do círculo */}
                        <img src={logo} alt="Logo" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{isOriginalText ? 'Home' : 'Início'}</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{isOriginalText ? 'Projects' : 'Projetos'}</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{isOriginalText ? 'Certifications' : 'Certificados'}</Nav.Link>
                        <Nav.Link href="#About-me" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{isOriginalText ? 'About me' : 'Sobre mim'}</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/elivanjunior/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.instagram.com/ei.elivan/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
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
