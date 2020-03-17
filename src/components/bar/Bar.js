import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "./Bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Bar = () => {
  return (
    <Container fluid className="">
      <Row>
        <Col xs={10} className="p-0">
          <Navbar expand="lg">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="btn btn-light active"
            />
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav"
            >
              <Nav>
                <Col>
                  <Link className="text-decoration-none ml-3 ml-md-5" to="/">
                    HOME
                  </Link>
                  <Link className="text-decoration-none ml-3 ml-md-5" to="/cv">
                    My CV
                  </Link>
                  <Link
                    className="text-decoration-none ml-3 ml-md-5"
                    to="/nasa"
                  >
                    N.A.S.A
                  </Link>
                </Col>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col xs={2} className="icone m-auto text-center p-0">
          <a className="mr-1" href="https://github.com/albanSimplon">
            <FontAwesomeIcon icon={faGithub} size="2x" inverse />
          </a>
          <a className="mr-1" href="https://www.linkedin.com/in/alban-veux/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" inverse />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Bar;
