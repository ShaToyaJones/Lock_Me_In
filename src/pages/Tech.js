import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Tech = () =>
  <div>
    <Hero backgroundImage="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg">
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Technologies Used:</h1>
        </Col>
      </Row>
      <Col size="md-12">
      </Col>
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
