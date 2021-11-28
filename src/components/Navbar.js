import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" to="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
            {/* <button className = "mode mx-1 first" itemID = "first" onClick ={()=>{props.handleMode('rgb(255, 255, 255)')}} ></button>
              <button className = "mode mx-1 second" itemID = "second" onClick ={()=>{props.handleMode('rgb(32, 68, 68)')}}></button>
              <button className = "mode mx-1 third" itemID = "third" onClick ={()=>{props.handleMode('rgb(16, 14, 91)')}}></button>
              <button className = "mode mx-1 forth" itemID = "forth" onClick ={()=>{props.handleMode('rgb(184, 218, 210)')}}></button>
               */}
              <input className="form-check-input" type="checkbox" onClick = {props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Change Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = { title: PropTypes.string.isRequired, aboutText: PropTypes.string };
Navbar.defaultProps = {title: "Title here", aboutText: "About us here"}; 