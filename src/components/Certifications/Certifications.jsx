import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCardJS } from "../ProjectCard/projectCardJS";
import { ProjectCardReact } from "../ProjectCard/projectCardReact";
import { ProjectsHTMLeCSS } from "../ProjectCard/projectCardHTMLeCSS";
// REACT

import GestãoDeManutençãoComPowerBi from '../../assets/Certificados/GestãoDeManutençãoComPowerBi.png'
// JS


//HTML E CSS


export const Certificados = ({ isOriginalText }) => {
    const projectsExcel = [
        {
            title: "Services Request",
            description: "Services Request",
            imgUrl: GestãoDeManutençãoComPowerBi,
            link: null
        },
    ];
    const projectsPowerBi = [
        {
            title: "Gestão De Manutenção Com Power Bi",
            description: "Evento online ministrado pela Maintenance intelligence",
            imgUrl: GestãoDeManutençãoComPowerBi,
            link: null
        },
    ];
    const projectsPython = [
        {
            title: "Services Request",
            description: "Services Request",
            imgUrl: GestãoDeManutençãoComPowerBi,
            link: null
        },
    ];
    const Outros = [
        {
            title: "Services Request",
            description: "Services Request",
            imgUrl: GestãoDeManutençãoComPowerBi,
            link: "#"
        },
    ]

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
                            <a className="project-link2" href="https://github.com/ElivanLimaJunior" rel="noreferrer" target="_blank">
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
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Outros</Nav.Link>
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