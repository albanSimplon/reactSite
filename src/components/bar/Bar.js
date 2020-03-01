import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Bar.css";

const Bar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/cv">
            My CV
          </Link>

          <NavDropdown
            className="nav-item"
            title="Project"
            id="basic-nav-dropdown"
          >
            <Link to="/nasa">N.A.S.A</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Bar;
