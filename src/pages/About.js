import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import locs1 from "../images/locs1.jpg";
import locs2 from "../images/locs2.jpg";
import locs3 from "../images/locs3.jpg";
import locs4 from "../images/locs4.jpg";

const About = () =>
  <div>
    <Hero backgroundImage="https://upload.wikimedia.org/wikipedia/commons/d/d7/Planet_Hair.jpg">
      <h1>Lock Me In</h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
        <center>
          <h1>Welcome To Lock Me In</h1>
          <h2>Your official hair appointment app!</h2>
          </center>
        </Col>
      </Row>
      <Row>
      
      <div id="images">
        <Col size="sm-6">
          <div className="locs1">
            <img src={locs1} alt="locs1" />
          </div>
        </Col>
        <Col size="sm-6">
          <div className="locs2">
            <img src={locs2} alt="locs2" />
            </div>
        </Col>
        <Col size="sm-6">
          <div className="locs3">
            <img src={locs3} alt="locs3" />
            </div>
        </Col>
        <Col size="sm-6">
          <div className="locs4">
            <img src={locs4} alt="locs4" />
            </div>
        </Col>
        </div>
      </Row>
    </Container>
  </div>;

export default About;
