import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlLogo from '../assets/img/html5.png';
import cssLogo from '../assets/img/css3.png';
import jsLogo from '../assets/img/java-script.png';
import reactLogo from '../assets/img/react.png';
import ColorSharp from '../assets/img/color-sharp.png';

function Skills() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ut praesentium tempora accusantium iusto eaque.
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={htmlLogo} alt="" />
                    <h5>HTML</h5>
                </div>
                <div className="item">
                    <img src={cssLogo} alt="" />
                    <h5>CSS</h5>
                </div>
                <div className="item">
                    <img src={jsLogo} alt="" />
                    <h5>JavaScript</h5>
                </div>
                <div className="item">
                    <img src={reactLogo} alt="" />
                    <h5>ReactJS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={ColorSharp} />
    </section>
  );
}

export default Skills;
