import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
  <div>
    <Hero backgroundImage="https://upload.wikimedia.org/wikipedia/commons/d/d7/Planet_Hair.jpg">
      <h1>Lock Me In</h1>
      <h2>Your official hair appointment app.</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Lock Me In!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
            et metus. 
          </p>
          <p>
            Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum
            porttitor. Sed malesuada molestie velit ac viverra. Quisque a.
          </p>
          <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien.
            Suspendisse massa tortor, facilisis in neque sit amet, scelerisque
            elementum tortor. Nullam eget nibh sit amet odio lobortis
            ullamcorper. 
          </p>
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
