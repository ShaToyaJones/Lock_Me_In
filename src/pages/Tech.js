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
          <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>React-Bootstrap</li>
              <li>Git</li>
              <li>Github</li>
              <li>Heroku</li>
              <li>Node.js</li>
              <li>API's</li>
              <li>MySQL</li>
              <li>React</li>
              <li>MVC Controller</li>
              <li>React</li>
              <li>Assana</li>
              <li>React</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>;

export default Tech;
