import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import D from '../assets/D.png'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" style={{zIndex: 2}}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={D} alt='D' style={{width: '40px', height: '40px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={100}>
              <Nav.Link>About</Nav.Link>
            </Link>

            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={100}>
              <Nav.Link>Skills</Nav.Link>
            </Link>

            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={100}>
              <Nav.Link>projects</Nav.Link>
            </Link>

            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={100}>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
