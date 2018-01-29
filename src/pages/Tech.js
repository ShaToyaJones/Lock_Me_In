import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Tech = () =>
  <div>
    <Hero backgroundImage="https://pxhere.com/en/photo/1204851">
      <h1>List of Technologies Used:</h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Lock Me In!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <ol>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
          </ol>
        </Col>
      </Row>
    </Container>
  </div>;

export default Tech;
