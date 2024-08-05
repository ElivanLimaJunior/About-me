import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import excelSvg from "../../assets/img/excelSvg.svg"
import powerBiSvg from "../../assets/img/powerBiSvg.svg"
import pythonSvg from "../../assets/img/pythonSvg.svg"
import programaçãoSvg from "../../assets/img/programaçãoSvg.svg"

export const Skills = ({ isOriginalText }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const title = isOriginalText ? "Skills" : "Habilidades";
    const description = isOriginalText 
        ? "Here is a breakdown of my skills." 
        : "Aqui está uma visão geral das minhas habilidades.";

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={excelSvg} alt="Excel" />
                                    <h5>Excel</h5>
                                </div>
                                <div className="item">
                                    <img src={powerBiSvg} alt="Power BI" />
                                    <h5>Power BI</h5>
                                </div>
                                <div className="item">
                                    <img src={pythonSvg} alt="Python" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={programaçãoSvg} alt="Programação em geral" />
                                    <h5>Programação em geral</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
}
