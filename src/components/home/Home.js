import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  document.body.style.cssText = `background: url("backgroundHome.jpg") no-repeat center center fixed;background-size: cover`;

  return (
    <Container className="homePage">
      <Row>
        <Col>
          <h2 className="titreHome text-center">Junior Developer</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
