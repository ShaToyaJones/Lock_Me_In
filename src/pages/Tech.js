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
              <li>React-Bootstrap</li>
              <li>React</li>
              <li>MySQL</li>
              <li>ORM(Sequelize)</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>API's</li>
              <li>Heroku</li>
              <li>Github</li>
              <li>Git</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Assana</li>
              <li>React</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>;

export default Tech;
