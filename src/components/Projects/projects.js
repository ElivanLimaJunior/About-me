import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCardJS } from "../ProjectCard/projectCardJS";
import { ProjectCardReact } from "../ProjectCard/projectCardReact";
import { ProjectsHTMLeCSS } from "../ProjectCard/projectCardHTMLeCSS";
import colorSharp2 from "../../assets/img/color-sharp2.png"
// REACT

import ServicesRequest from '../../assets/img-projects/1/capa.png'
// JS


//HTML E CSS


export const Projects = ({ isOriginalText }) => {
    const projectsExcel = [
        {
            title: "Services Request",
            description: "Services Request",
            imgUrl: ServicesRequest,
            link: "https://app.powerbi.com/view?r=eyJrIjoiZGNmMDkwMGEtYzk2OC00YmZjLWJhMjQtZTExMDhhMTQwY2E0IiwidCI6ImU4ZDY4ZTVhLTkxYjMtNDFiNy04NDVhLTNhYzNhNzMyMGJkNCJ9"
        },
    ];
    const projectsPowerBi = [
        {
            title: "Services Request",
            description: "Services Request",
            imgUrl: ServicesRequest,
            link: "https://app.powerbi.com/view?r=eyJrIjoiZGNmMDkwMGEtYzk2OC00YmZjLWJhMjQtZTExMDhhMTQwY2E0IiwidCI6ImU4ZDY4ZTVhLTkxYjMtNDFiNy04NDVhLTNhYzNhNzMyMGJkNCJ9"
        },
    ];
    const projectsPython = [
        {
            title: "Services Request",
            description: "Services Request",
            imgUrl: ServicesRequest,
            link: "https://app.powerbi.com/view?r=eyJrIjoiZGNmMDkwMGEtYzk2OC00YmZjLWJhMjQtZTExMDhhMTQwY2E0IiwidCI6ImU4ZDY4ZTVhLTkxYjMtNDFiNy04NDVhLTNhYzNhNzMyMGJkNCJ9"
        },
    ];
    const projectsProgramação = [
        {
            title: "Services Request",
            description: "Services Request",
            imgUrl: ServicesRequest,
            link: "https://app.powerbi.com/view?r=eyJrIjoiZGNmMDkwMGEtYzk2OC00YmZjLWJhMjQtZTExMDhhMTQwY2E0IiwidCI6ImU4ZDY4ZTVhLTkxYjMtNDFiNy04NDVhLTNhYzNhNzMyMGJkNCJ9"
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
                                    <Nav.Link eventKey="fourth">Programação</Nav.Link>
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
                                            projectsProgramação.map((project, index) => {
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
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}