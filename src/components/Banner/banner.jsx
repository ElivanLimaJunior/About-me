import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-DataScience.png';

export const Banner = ({ isOriginalText, handleChangeText }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Data Analistycs", "Data Visualization"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const paragraphText = isOriginalText
        ? 'Sou formado em Administração, cursei Análise e Desenvolvimento de Sistemas por dois anos e atualmente estou cursando Engenharia de Produção. Tenho grande paixão por dados, automação e tecnologia, e estou focado em construir soluções que apoiem a tomada de decisões. Meu objetivo é atuar na área de dados, utilizando ferramentas como Power BI, Excel e projetos de Data Science para gerar valor e inovação.'
        : 'I have a degree in Administration, studied Systems Analysis and Development for two years, and I am currently pursuing a degree in Production Engineering. I am passionate about data, automation, and technology, and I am focused on building solutions that support decision-making. My goal is to work as a data analyst, using tools like Power BI, Excel, and Data Science projects to deliver value and innovation.';


    const tagline = isOriginalText ? "Bem-vindo ao meu Portfólio" : "Welcome to my Portfolio";
    const headerText = isOriginalText ? "Olá! Eu sou Elivan!" : "Hi! I'm Elivan!";
    const buttonText = isOriginalText ? "Em Inglês" : "Em Português";
    

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let fullText = toRotate[loopNum];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum === toRotate.length - 1 ? 0 : loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">{tagline}</span>
                        <h1>{headerText}<br /> <span className="wrap">{text || "|"}</span></h1>
                        <p>{paragraphText}</p>
                        <button onClick={handleChangeText}>{buttonText} <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
