import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Bar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link className="text-decoration-none ml-5" to="/">
            HOME
          </Link>
          <Link className="text-decoration-none ml-5" to="/cv">
            My CV
          </Link>
          <Link className="text-decoration-none ml-5" to="/nasa">
            N.A.S.A
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Text className="mr-5">
        <a className="mr-2" href="https://github.com/albanSimplon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/alban-veux/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </Navbar.Text>
    </Navbar>
  );
};

export default Bar;
