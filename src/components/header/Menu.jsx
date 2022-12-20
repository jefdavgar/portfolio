import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { CloseButton } from "react-bootstrap";

function Example() {
  const [style, setStyle] = useState("offcanvas_1")
  const changeStyle = () => {
    console.log("you just clicked");
  
    setStyle("offcanvas_2");
  };
  const changeStyleTwo = (e) => {
    console.log("you just clicked");
    setStyle("offcanvas_1");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      {["xl"].map((expand) => (
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
              onClick={changeStyle}
            >

            </Navbar.Toggle>
            <Navbar.Offcanvas
              className="offcanvas-navbar"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Body show={show} onHide={handleClose} className={style}>
                <Offcanvas.Header 
              >
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  <Offcanvas.Header className="btn-close" closeButton onClick={changeStyleTwo}></Offcanvas.Header>
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
