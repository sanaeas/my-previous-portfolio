import React from 'react';
import { Col } from 'react-bootstrap';
import githubLogo from '../assets/img/github.svg';
import linkIcon from '../assets/img/link.svg';

function ProjectCard({ title, description, imgUrl, githubUrl, deployUrl }) {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <div className="proj__links">
                  <a href={githubUrl} target="_blank" className="proj__link">
                    <img className='proj__icon' src={githubLogo} />
                  </a>
                  <a href={deployUrl} target="_blank" className="proj__link">
                    <img className='proj__icon' src={linkIcon} />
                  </a>
                </div>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard