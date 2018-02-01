import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Appointments from "./pages/Appointments";
import Tech from "./pages/Tech";
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
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/tech" component={Tech} />
        </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
