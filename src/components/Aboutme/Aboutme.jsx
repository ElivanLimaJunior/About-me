import React from "react";
import logo from '../../assets/img/about-me.jpeg';

export const AbouteMe = ({ isOriginalText }) => {
    const title = isOriginalText ? "Sobre Mim" : "About Me";
    const description1 = isOriginalText 
        ? "Olá! Meu nome é Elivan e sou um entusiasta da tecnologia, apaixonado por trabalhar com dados e automação de processos. Estou atualmente cursando Engenharia de Produção e me preparando para um futuro promissor na Indústria 4.0."
        : "Hello! My name is Elivan and I am a technology enthusiast, passionate about working with data and its applications. My goal is to become an efficient data analyst and help companies make informed decisions based on concrete data.";
    const description2 = isOriginalText 
        ? "Minha formação em Administração e os dois anos de Análise e Desenvolvimento de Sistemas me proporcionaram uma base sólida, e, ao conseguir uma bolsa para Engenharia de Produção, abracei essa oportunidade de crescimento. Meu objetivo é me tornar um analista eficiente, capaz de auxiliar as empresas a tomar decisões informadas por meio da análise de dados concretos."
        : "I am always learning and developing in the areas of data analysis and programming. Currently, I am studying Production Engineering and have experience in Python, React, and JavaScript.";
    const description3 = isOriginalText 
        ? "Decidi criar este portfólio para compartilhar meus estudos e as tecnologias que estou atualmente aprendendo. Nele, você encontrará os projetos que já realizei ou nos quais participei, refletindo minha jornada de aprendizado e desenvolvimento."
        : "When I'm not working or studying, I like to spend time at the gym and exercise at home.";

    return (
        <div className="about-me">
            <div className="about-me-content">
                <div className="image-section">
                    <img src={logo} alt="Elivan" />
                </div>
                <div className="text-section">
                    <h1>{title}</h1>
                    <br></br>
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
