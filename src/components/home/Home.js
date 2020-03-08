import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  document.body.style.cssText = `background: url("background.jpg") no-repeat center center fixed;background-size: cover`;

  return (
    <Container fluid={true} className="homePage">
      <Row>
        <Col>
          <h2 className="titreHome text-center">Junior Developer</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
