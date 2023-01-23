import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import fashionShop from '../assets/img/fashionShop.png';
import libraryProject from '../assets/img/library.png';
import moviesProject from '../assets/img/movies.png';
import portfolioProject from '../assets/img/portfolio.png';
import googleClone from '../assets/img/googleClone.png';
import twitterClone from '../assets/img/twitterClone.png';
import amazonClone from '../assets/img/amazonClone.png';

function Projects() {
    const work = [
        {
            title: 'Fashion Shop',
            description: 'E-Commerce web app developed with React and Tailwind. The products fetched from Fake Store API',
            imgUrl: fashionShop,
            githubUrl: 'https://github.com/sanaeas/fashion-shop',
            deployUrl: 'https://fashion--shop.web.app/',
        },
        {
            title: 'Library',
            description: 'E-Commerce Bookstore developed with React, CSS3 and HTML5 best practises.',
            imgUrl: libraryProject,
            githubUrl: 'https://github.com/sanaeas/E-library-app',
            deployUrl: 'https://library-21fb0.web.app',
        },
        {
            title: 'Movies',
            description: 'A React App which uses the TMDB API to search for movies and tv shows.',
            imgUrl: moviesProject,
            githubUrl: 'https://github.com/sanaeas/movies-app',
            deployUrl: 'https://movies-app-da5f3.web.app',
        },
        
    ];

    const portfolios = [
        {
            title: 'E-Portfolio',
            description: 'Developed a responsive e-portfolio using JavaScript, CSS3 [BEM] and HTML5 best practices.',
            imgUrl: portfolioProject,
            githubUrl: 'https://github.com/sanaeas/E-portfolio',
            deployUrl: 'https://sanaeas.github.io/E-portfolio/',
        },
    ]

    const clones = [
        {
            title: 'Google Clone',
            description: "Integrated Google's API to create a search engine using React, CSS3 and HTML5 best practices.",
            imgUrl: googleClone,
            githubUrl: 'https://github.com/sanaeas/google-clone',
            deployUrl: 'https://clone-eea6e.web.app'
        },
        {
            title: 'Twitter Clone',
            description: 'Developed a social media app using React, Firebase and React Twitter Embed Component.',
            imgUrl: twitterClone,
            githubUrl: 'https://github.com/sanaeas/twitter-clone',
            deployUrl: 'https://twitter-clone-29095.web.app',
        },
        {
            title: 'Amazon Clone',
            description: 'Developed an e-commerce app using React, Firebase (Authentication and Cloud Functions) and Stripe.',
            imgUrl: amazonClone,
            githubUrl: 'https://github.com/sanaeas/amazon-clone',
            deployUrl: 'https://clone-8d036.web.app',
        },
    ]

  return (
    <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Take a look at the projects that I have developed with the best practices of HTML5, CSS3, JavaScript, and React.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Creative Work</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Portfolios</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Professional Clones</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        work.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        portfolios.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        clones.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
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
        <img className='background-image-right' src={colorSharp2} alt="" />
    </section>
  )
}

export default Projects