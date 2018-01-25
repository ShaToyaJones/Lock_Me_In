// import React, { Component } from 'react';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';
// import logo from './logo.svg';
// import './style.css';

// class App extends Component {

//   render() {
//     const { className, ...props } = this.props;
//     return (
//       <div className={classnames('App', className)} {...props}>
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React - Fullstack!</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Link to='about'><button>Test React Router</button></Link>
//         <br />
//         <br />
//         <button onClick={this.props.actions.expressTest}>Test if Express is working</button>
//         <br />
//         <br />
//         <button onClick={this.props.actions.dbTest}>Test if Express and Sequelize are working</button>
//         <div style={{ padding: '30px' }}>{this.props.results}</div>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Appointments from "../../pages/Appointments";
import About from "./pages/About";
// import Search from "../../pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/appointments" component={Appointments} /> */}
        {/* <Route exact path="/search" component={Search} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
