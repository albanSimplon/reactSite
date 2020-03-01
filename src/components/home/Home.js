import React from "react";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col md={6}>
        <p>1 paragraphe</p>
      </Col>

      <Col md={6}>
        <p>2 paragraphe</p>
      </Col>
    </Row>
  );
};

export default Home;
