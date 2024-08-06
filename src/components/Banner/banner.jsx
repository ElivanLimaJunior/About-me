import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg';

export const Banner = ({ isOriginalText, handleChangeText }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Data Analistycs", "Data Visualization"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const paragraphText = isOriginalText
        ? 'Sou formado em Administração e cursei Análise e Desenvolvimento de Sistemas por 2 anos, com a intenção de finalizar o curso. Atualmente, estou cursando Engenharia de Produção. Tenho uma paixão por trabalhar com dados e gosto de demonstrar como eles podem auxiliar na tomada de decisões. Estou focado em me tornar um analista de dados eficiente e pronto para o mercado de trabalho.'
        : 'I have a degree in Administration and studied Systems Analysis and Development for 2 years, with the intention of finishing the course. I am currently studying Production Engineering. I have a passion for working with data and I like to demonstrate how it can help in decision making. I am focused on becoming an efficient data analyst ready for the job market.';

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
                        <h1>{headerText}<br /> <span className="wrap">{text}</span></h1>
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
