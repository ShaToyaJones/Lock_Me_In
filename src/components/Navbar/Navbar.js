import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Lock Me In
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>
        <li
          className={window.location.pathname === "/appointments" ? "active" : ""}
        >
          <Link to="/appointments">Appointments</Link>
        </li>
        <li className={window.location.pathname === "/clients" ? "active" : ""}>
          <Link to="/clients">Clients</Link>
        </li>
        <li className={window.location.pathname === "/tech" ? "active" : ""}>
          <Link to="/tech">Tech</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
