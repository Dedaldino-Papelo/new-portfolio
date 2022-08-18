import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Dedaldino</Navbar.Brand>
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
          <Nav className='ms-auto'>
            <Nav.Link className='btn-download' target='_blank' href={process.env.PUBLIC_URL + "/meu curriculo EN.pdf"}>
                Download CV
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
