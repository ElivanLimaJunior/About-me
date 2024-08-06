import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCardJS } from "../Projects/ProjectCard/projectCardJS";
import { ProjectCardReact } from "../Projects/ProjectCard/projectCardReact";
import { ProjectsHTMLeCSS } from "../Projects/ProjectCard/projectCardHTMLeCSS";
// DataScience

import CienciaDeDados2 from '../../assets/Certificados/DataScience/CienciaDeDados2.png';
import CursoBasicoDeDashboardNoExcel from '../../assets/Certificados/DataScience/CursoBasicoDeDashboardsNoExcel.png';
import ExcelFormaçãoEspecialista from '../../assets/Certificados/DataScience/ExcelFormaçãoEspecialista.png';
import FormaçãoExcelVba from '../../assets/Certificados/DataScience/FormaçãoExcelVba.png';
import FormaçãoPowerBi from '../../assets/Certificados/DataScience/FormaçãoPowerBi.png';
import GestãoDeManutençãoComPowerBi from '../../assets/Certificados/DataScience/GestãoDeManutençãoComPowerBi.png';
import Python3Mundo1 from '../../assets/Certificados/DataScience/Python3Mundo1.png';
import Python3Mundo2 from '../../assets/Certificados/DataScience/Python3Mundo2.png';
import Python101ForDataScience from '../../assets/Certificados/DataScience/Python101ForDataScience.png';
import ModelagemDeBancoDeDados from '../../assets/Certificados/DataScience/ModelagemDeBancoDeDados.png';
import ModelagemDeBancoDeDadosRelacional from '../../assets/Certificados/DataScience/ModelagemDeBancoDeDadosRelacional.png';

// Gestão

import DiplomaAdministração from '../../assets/Certificados/Gestão/DiplomaAdministração.png'
import FormaçãoGestãoDaQualidade from '../../assets/Certificados/Gestão/FormaçãoGestãoDaQualidade.png'
import LogisticaDeEstoque from '../../assets/Certificados/Gestão/LogisticaDeEstoque.png'
import OAdministradorNaConteporaneidade from '../../assets/Certificados/Gestão/OAdministradorNaConteporaneidade.png'
import Bizagi from '../../assets/Certificados/Gestão/Bizagi.png'
import SixSigma from '../../assets/Certificados/Gestão/SixSigma.png'

//Web
import FormaçãoHtmlECSS from '../../assets/Certificados/Web/FormaçãoHtlmECss.png'
import formacaoFrontEnd from '../../assets/Certificados/Web/FormaçãoFrontEnd.png'
import FormacaoAcessibilidadeWeb from '../../assets/Certificados/Web/FormaçãoAcessibilidadeWeb.png'
import React from '../../assets/Certificados/Web/React.png'
import React2 from '../../assets/Certificados/Web/React2.png'
import React3 from '../../assets/Certificados/Web/React3.png'
import React4 from '../../assets/Certificados/Web/React4.png'
import SASS from '../../assets/Certificados/Web/SASS.png'
import Tailwind from '../../assets/Certificados/Web/Tailwind.png'
import TypescriptParte1 from '../../assets/Certificados/Web/TypescriptParte1.png'
import TypescriptParte2 from '../../assets/Certificados/Web/TypescriptParte2.png'
import Seo from '../../assets/Certificados/Web/SEO.png'


//Outros
import FormaçãoComunicação from '../../assets/Certificados/Outros/FormaçãoComunicação.png'
import FormaçãoComunicaçãoParaLideres from '../../assets/Certificados/Outros/FormaçãoComunicaçãoParaLideres.png'
import FormaçãoComunicaçãoParaLideres2 from '../../assets/Certificados/Outros/FormaçãoComunicaçãoParaLideres2.png'
import FormaçãoTécnicasDeVendas from '../../assets/Certificados/Outros/FormaçãoTécnicasDeVendas.png'
import FormaçãoVendasDeAltaPerformance from '../../assets/Certificados/Outros/FormaçãoVendasDeAltaPerformance.png'
import InformáticaBásica from '../../assets/Certificados/Outros/InformáticaBásica.png'
import MarketPessoal from '../../assets/Certificados/Outros/MarketPessoal.png'
import NR12 from '../../assets/Certificados/Outros/NR12.png'
import OperadorDeMicro from '../../assets/Certificados/Outros/OperadorDeMicro.png'


export const Certificados = ({ isOriginalText }) => {
    const projectsExcel = [
        {
            title: "Services Request",
            description: "Services Request",
            imgUrl: GestãoDeManutençãoComPowerBi,
            link: "https://media.discordapp.net/attachments/1270360975115292766/1270361024373067850/GestaoDeManutencaoComPowerBi.png?ex=66b36b66&is=66b219e6&hm=8e387116a5f21df74efc95341f87e4865699b53523bbd7901c2062b0d57714cd&=&format=webp&quality=lossless&width=892&height=671"
        },
        {
            title: "Python 3 - Mundo1",
            description: "Realizado no Curso em Vídeo com um professor com a melhor didatica que já vi, o Guanabara.",
            imgUrl: Python3Mundo1,
            link: null
        },
        {
            title: "Python 3 - Mundo 2",
            description: "Services Request",
            imgUrl: Python3Mundo2,
            link: null
        },
        {
            title: "Python 101 For Data Science",
            description: "Services Request",
            imgUrl: Python101ForDataScience,
            link: null
        },
        {
            title: "Excel Formação Especialista",
            description: "Services Request",
            imgUrl: ExcelFormaçãoEspecialista,
            link: null
        },
        {
            title: "Formação Excel e Vba",
            description: "Services Request",
            imgUrl: FormaçãoExcelVba,
            link: null
        },
        {
            title: "Curso Basico DeDashboard No Excel",
            description: "Services Request",
            imgUrl: CursoBasicoDeDashboardNoExcel,
            link: null
        },
        {
            title: "Introdução à Ciência De Dados 2.0",
            description: "Services Request",
            imgUrl: CienciaDeDados2,
            link: null
        },
        {
            title: "Formação Power Bi",
            description: "Services Request",
            imgUrl: FormaçãoPowerBi,
            link: null
        },
        {
            title: "Modelagem De Banco De Dados",
            description: "Services Request",
            imgUrl: ModelagemDeBancoDeDados,
            link: null
        },
        {
            title: "Modelagem De Banco DeDados Relacional",
            description: "Services Request",
            imgUrl: ModelagemDeBancoDeDadosRelacional,
            link: null
        },
    ];
    const projectsWeb = [
        {
            title: "Formação Html e CSS",
            description: "Services Request",
            imgUrl: FormaçãoHtmlECSS,
            link: "#"
        },
        {
            title: "formação Front End",
            description: "Services Request",
            imgUrl: formacaoFrontEnd,
            link: "#"
        },
        {
            title: "Formacao Acessibilidade Web",
            description: "Services Request",
            imgUrl: FormacaoAcessibilidadeWeb,
            link: "#"
        },
        {
            title: "React: Desenvolvendo com Javascript",
            description: "Services Request",
            imgUrl: React,
            link: "#"
        },
        {
            title: "React: Como os Componentes Funcionam",
            description: "Services Request",
            imgUrl: React2,
            link: "#"
        },
        {
            title: "React: Comece Seu Projeto Full Stack",
            description: "Services Request",
            imgUrl: React3,
            link: "#"
        },
        {
            title: "React Com Javascript: Lidando com arquivos Estáticos",
            description: "Services Request",
            imgUrl: React4,
            link: "#"
        },
        {
            title: "SASS: CSS Sintaticamente Espetacular",
            description: "Services Request",
            imgUrl: SASS,
            link: "#"
        },
        {
            title: "Tailwind CSS",
            description: "Services Request",
            imgUrl: Tailwind,
            link: "#"
        },
        {
            title: "Typescript Parte 1",
            description: "Services Request",
            imgUrl: TypescriptParte1,
            link: "#"
        },
        {
            title: "Typescript Parte 2",
            description: "Services Request",
            imgUrl: TypescriptParte2,
            link: "#"
        },
        {
            title: "Seo: Otimização de Sites",
            description: "2",
            imgUrl: Seo,
            link: null
        },
    ];
    const projectsGestão = [
        {
            title: "Diploma Superior Administração",
            description: "Services Request",
            imgUrl: DiplomaAdministração,
            link: null
        },        
        {
            title: "Formação Gestão Da Qualidade",
            description: "Services Request",
            imgUrl: FormaçãoGestãoDaQualidade,
            link: null
        },        
        {
            title: "Logistica De Estoque",
            description: "Services Request",
            imgUrl: LogisticaDeEstoque,
            link: null
        },        
        {
            title: "O Administrador Na Conteporaneidade",
            description: "Services Request",
            imgUrl: OAdministradorNaConteporaneidade,
            link: null
        },
        {
            title: "Bizagi",
            description: "Services Request",
            imgUrl: Bizagi,
            link: null
        },   
        {
            title: "Six Sigma",
            description: "Services Request",
            imgUrl: SixSigma,
            link: null
        },   
    ];
    const Outros = [
        {
            title: "Formação Comunicação",
            description: "2",
            imgUrl: FormaçãoComunicação,
            link: null
        },
        {
            title: "Formação Comunicação Para Lideres - 40 horas",
            description: "2",
            imgUrl: FormaçãoComunicaçãoParaLideres,
            link: null
        },
        {
            title: "Formação Comunicação Para Lideres - 46 horas",
            description: "2",
            imgUrl: FormaçãoComunicaçãoParaLideres2,
            link: null
        },
        {
            title: "Formação Técnicas De Vendas",
            description: "2",
            imgUrl: FormaçãoTécnicasDeVendas,
            link: null
        },
        {
            title: "Formação Vendas De Alta Performance",
            description: "2",
            imgUrl: FormaçãoVendasDeAltaPerformance,
            link: null
        },
        {
            title: "Informática Básica",
            description: "2",
            imgUrl: InformáticaBásica,
            link: null
        },
        {
            title: "Market Pessoal",
            description: "2",
            imgUrl: MarketPessoal,
            link: null
        },
        {
            title: "NR 12",
            description: "2",
            imgUrl: NR12,
            link: null
        },
        {
            title: "Operador De Micro",
            description: "2",
            imgUrl: OperadorDeMicro,
            link: null
        },        
    ]

    const title = isOriginalText ? "Certificados" : "Certifications";
    const description = isOriginalText 
        ? "Aqui você encontra minhas certificações."
        : "Here you can find my certifications.";

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>{title}</h2>
                        <p>
                            {description}
                            <a className="project-link2" href="https://github.com/ElivanLimaJunior" rel="noreferrer" target="_blank">
                                <em></em>
                            </a>
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Data Science</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Desenv. Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Gestão e inovação</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Outros Cursos</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsExcel.map((project, index) => {
                                                return (
                                                    <ProjectCardJS
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsWeb.map((project, index) => {
                                                return (
                                                    <ProjectCardReact
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projectsGestão.map((project, index) => {
                                                return (
                                                    <ProjectsHTMLeCSS
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        {
                                            Outros.map((project, index) => {
                                                return (
                                                    <ProjectCardJS
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}