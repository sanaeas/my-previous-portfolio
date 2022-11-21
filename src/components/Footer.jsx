import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import githubLogo from '../assets/img/github.svg';
import pdfLogo from '../assets/img/pdf.png';
import resume from '../assets/resume.pdf';

function Footer() {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a target="_blank" href="https://github.com/sanaeas"><img src={githubLogo} alt="Icon" /></a>
                <a target="_blank" href={resume}><img src={pdfLogo} alt="Icon" /></a>
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }

  export default Footer;