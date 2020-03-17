import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid={true} className="footer">
      <Row>
        <Col>
          <p className="text-center">blabla</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
