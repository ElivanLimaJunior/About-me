import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCardReact = ({ title, description, imgUrl, link }) => {
    const isInternalLink = link && link.startsWith("/");

    return (
        <Col size={12} sm={6} md={4}>
            {isInternalLink ? (
                <Link to={link} className="project-link">
                    <div className="proj-imgbx">
                        <img src={imgUrl} alt={title} />
                        <div className="proj-txtx">
                            <h4>{title}</h4>
                            <span>{description}</span>
                        </div>
                    </div>
                </Link>
            ) : (
                <a href={link} target="_blank" className="project-link" rel="noopener noreferrer">
                    <div className="proj-imgbx">
                        <img src={imgUrl} alt={title} />
                        <div className="proj-txtx">
                            <h4>{title}</h4>
                            <span>{description}</span>
                        </div>
                    </div>
                </a>
            )}
        </Col>
    );
};
