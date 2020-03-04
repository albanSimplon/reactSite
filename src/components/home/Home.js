import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    document.body.style.cssText = `background: url("../../background.jpg") no-repeat center center fixed;background-size: cover`;
  });

  return (
    <Container fluid={true} className="homePage">
      <Row>
        <Col md={12}>
          <h2 className="text-center">Junior Developer</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
