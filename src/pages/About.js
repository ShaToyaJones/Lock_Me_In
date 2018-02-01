import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import locs1 from "../images/locs1.jpg";
import locs2 from "../images/locs2.jpg";
import locs3 from "../images/locs3.jpg";
import locs4 from "../images/locs4.jpg";
import locs5 from "../images/locs5.jpg";
import locs6 from "../images/locs6.jpg";
import locs7 from "../images/locs7.jpg";
import locs9 from "../images/locs9.jpg";
import locs10 from "../images/locs10.jpg";
import locs11 from "../images/locs11.jpg";
import locs12 from "../images/locs12.jpg";

import "./About.css";


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

<div class="row">
  <div class="column">
    <img src={locs1} alt="locs1" />
    <img src={locs2} alt="locs2" />
    <img src={locs3} alt="locs3" />
    <img src={locs4} alt="locs4" />
  </div>
  <div class="column">
    <img src={locs4} alt="locs4" />
    <img src={locs5} alt="locs5" />
    <img src={locs6} alt="locs6" />
    <img src={locs7} alt="locs7" />
  </div>
  <div class="column">
    <img src={locs7} alt="locs7" />
    <img src={locs9} alt="locs9" />
    <img src={locs10} alt="locs10" />
    <img src={locs11} alt="locs11" />
  </div>
  <div class="column">
    <img src={locs11} alt="locs11" />
    <img src={locs12} alt="locs12" />
    <img src={locs5} alt="locs3" />
    <img src={locs6} alt="locs4" />
  </div>
</div>  
    </Container>
  </div>;

export default About;
