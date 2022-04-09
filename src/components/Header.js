import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

const Header = () => {
  return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="info">
          <Container>
            <Navbar.Brand href="/" className='fs-2'>DEMO Streaming</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#log-in">
                    <Button variant="info" className='text-light'>Log in</Button>
                </Nav.Link>
                <Nav.Link href="#stream-trial">
                    <Button variant="dark" className='text-light'>Start your free trial</Button>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
  )
}

export default Header