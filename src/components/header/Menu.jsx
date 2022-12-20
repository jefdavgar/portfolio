import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3"
          id="NavBar-nav"
          sticky="top"
        >
          <Container className="d.flex justify-content-start">
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="justify-content-start"
            >

            </Navbar.Toggle>
            <Navbar.Offcanvas
              className="offcanvas-navbar"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Body show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Nav>
                    <Nav.Link href="#Inicio">HOME</Nav.Link>
                    <Nav.Link href="#Inicio">SOBRE MI</Nav.Link>
                    <Nav.Link href="#Inicio">PROYECTOS</Nav.Link>
                    <Nav.Link href="#Inicio">CONTACTO</Nav.Link>
                </Nav>
              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
export default Example;
