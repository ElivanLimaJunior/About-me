import React from "react";
import { Col } from "react-bootstrap";

export const ProjectsHTMLeCSS = ({ title, description, imgUrl, link }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <a href={link} target="_blank" className="project-link" rel="noopener noreferrer">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}