import React from 'react';
import App from './containers/AppContainer';
import About from './pages/About';
import Appointments from "./pages/Appointments";
import Client from './pages/Client';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/client" component={Client} />
      </div>
    </Router>
  )
};

export default Routes;
