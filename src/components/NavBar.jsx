import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';
import githubLogo from '../assets/img/github.svg';
import pdfLogo from '../assets/img/pdf.png';
import resume from '../assets/resume.pdf';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function NavBarComp() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Router>
      <Navbar className={scrolled ? "scrolled" : ""} expand="md">
        <Container>
          <Navbar.Brand href="/">
              <img className='nav__logo' src={logo} alt='Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                  <a target="_blank" href="https://github.com/sanaeas"><img src={githubLogo} alt='' /></a>
                  <a target="_blank" href={resume}><img src={pdfLogo} alt='' /></a>
              </div>
              <HashLink to="#connect">
              <button className="vvd">
                  <span>Let's Connect</span>
              </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBarComp