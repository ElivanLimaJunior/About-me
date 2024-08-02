import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";

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
                                    <img src={meter1} alt="Excel" />
                                    <h5>Excel</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Power BI" />
                                    <h5>Power BI</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Python" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="SQL" />
                                    <h5>SQL</h5>
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
