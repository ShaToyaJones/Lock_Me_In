import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Appointments from "./pages/Appointments";
import About from "./pages/About";
// import Search from "./pages/Client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/appointments" component={Appointments} />
        {/* <Route exact path="/client" component={Client} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
