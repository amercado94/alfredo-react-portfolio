import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Nav.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar id="basic-navbar-nav">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/alfredo-react-portfolio/about" className="navLinks">About Me</Nav.Link>
                  <Nav.Link as={Link} to="/alfredo-react-portfolio/portfolio" className="navLinks">Portfolio</Nav.Link>
                  <Nav.Link as={Link} to="/alfredo-react-portfolio/contact" className="navLinks">Contact</Nav.Link>
                  <Nav.Link as={Link} to="/alfredo-react-portfolio/resume" className="navLinks">Resume</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
          </Container>
        </Navbar>
    );
};

export default Navigation;