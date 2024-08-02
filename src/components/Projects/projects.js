import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCardJS } from "../ProjectCard/projectCardJS";
import { ProjectCardReact } from "../ProjectCard/projectCardReact";
import { ProjectsHTMLeCSS } from "../ProjectCard/projectCardHTMLeCSS";
import colorSharp2 from "../../assets/img/color-sharp2.png"
// REACT

import helloWorld from '../../assets/img-projects/19/capa.png'
import loginForm from '../../assets/img-projects/20/capa.png'
import styledComponents from '../../assets/img-projects/8/capa.png'
// JS

import aluraPlay from '../../assets/img-projects/12/capa.png'
import ttBank from '../../assets/img-projects/13/capa.png'
import hypotenuse from '../../assets/img-projects/21/capa.png'
//HTML E CSS
import starbucks from '../../assets/img-projects/22/capa.png'
import ajax from '../../assets/img-projects/23/capa.png'

export const Projects = ({ isOriginalText }) => {
    const projectsExcel = [
        {
            title: "Alura Play",
            description: "Learning how to create requests.",
            imgUrl: aluraPlay,
            link: "https://alura-play-sandy.vercel.app/index.html"
        },
        {
            title: "TtBank",
            description: "Validating data through a bank account form.",
            imgUrl: ttBank,
            link: "https://tt-bank.vercel.app/"
        },
        {
            title: "Calculate the Hypotenuse",
            description: '',
            imgUrl: hypotenuse,
            link: "https://calculate-a-hypotenuse.vercel.app/"
        },
    ];
    const projectsPowerBi = [
        {
            title: "Hello world!",
            description: "My first portfolio made in React.",
            imgUrl: helloWorld,
            link: "https://ola-mundo-two.vercel.app/"
        },
        {
            title: "Login Form",
            description: "Junior React Developer Job Test",
            imgUrl: loginForm,
            link: "https://desafio-jr-react-5k8j.vercel.app/"
        },
        {
            title: "Styled Components",
            description: "Learn how to write CSS code within JavaScript.",
            imgUrl: styledComponents,
            link: "https://styled-components-self.vercel.app/"
        },
    ];
    const projectsPython = [
        {
            title: "Starbucks Project",
            description: "",
            imgUrl: starbucks,
            link: "https://starbucks-project-nine.vercel.app/"
        },
        {
            title: "Ajax Project",
            description: "",
            imgUrl: ajax,
            link: "https://p-rojeto-ajax.vercel.app/"
        },
    ];

    const title = isOriginalText ? "Projects" : "Projetos";
    const description = isOriginalText 
        ? "Here you can find my main projects. The code for all of them is on my " 
        : "Aqui você pode encontrar meus principais projetos. O código de todos eles está no meu ";

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>{title}</h2>
                        <p>
                            {description}
                            <a className="project-link2" href="Home" rel="noreferrer" target="_blank">
                                <em>GitHub</em>
                            </a>
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Excel</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Power Bi</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Python</Nav.Link>
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
                                            projectsPowerBi.map((project, index) => {
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
                                            projectsPython.map((project, index) => {
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
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}