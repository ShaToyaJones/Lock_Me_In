import React from 'react';
import App from './containers/AppContainer';
import About from './pages/About';
import Appointments from "./pages/Appointments";
import Clients from './pages/Clients';
import Tech from './pages/Tech';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/tech" component={Tech} />
      </div>
    </Router>
  )
};

export default Routes;
