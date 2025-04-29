import React from "react";
import logo from '../../assets/img/about-me5.png';

export const AbouteMe = ({ isOriginalText }) => {
    const title = isOriginalText ? "Sobre Mim" : "About Me";
    const description1 = isOriginalText 
        ? "Olá! Meu nome é Elivan e sou apaixonado por dados, automação de processos e tecnologia. Estou cursando Engenharia de Produção e estou focado em construir uma carreira sólida em Análise de Dados, Ciência de Dados e soluções para a Indústria 4.0."
        : "Hello! My name is Elivan and I am passionate about data, process automation, and technology. I am currently studying Production Engineering and focusing on building a strong career in Data Analysis, Data Science, and Industry 4.0 solutions.";

    const description2 = isOriginalText 
        ? "Minha formação em Administração, combinada com meus estudos em Análise e Desenvolvimento de Sistemas e Engenharia de Produção, me proporcionaram uma visão ampla e prática dos negócios e da tecnologia. Hoje, meu objetivo é transformar dados em insights estratégicos para impulsionar decisões inteligentes e gerar valor para as empresas."
        : "My background in Business Administration, combined with my studies in Systems Analysis and Production Engineering, has given me a broad and practical understanding of business and technology. Today, my goal is to turn data into strategic insights to drive smart decisions and generate value for companies.";
    
        const description3 = isOriginalText 
        ? "Criei este portfólio para apresentar meus projetos em Power BI, Excel, Python e Data Science, refletindo minha evolução profissional. Aqui, compartilho as soluções que desenvolvi e os conhecimentos que venho adquirindo nessa jornada de constante aprendizado e inovação."
        : "I created this portfolio to showcase my projects in Power BI, Excel, and Data Science, reflecting my professional growth. Here, I share the solutions I have developed and the knowledge I am continually acquiring on this journey of learning and innovation."; 

    return (
        <div className="about-me">
            <div className="about-me-content">
                <div className="image-section">
                    <img src={logo} alt="Elivan" />
                </div>
                <div className="text-section">
                    <h1>{title}</h1>
                    <p>{description1}</p>
                    <br></br>
                    <p>{description2}</p>
                    <br></br>
                    <p>{description3}</p>
                </div>
            </div>
        </div>
    );
};
