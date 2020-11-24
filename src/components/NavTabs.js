import React from "react";
import {NavLink} from 'react-router-dom';

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/home"
          onClick={() => props.handlePageChange("Home")}
          activeClassName="nav-link active"
          className={"nav-link"}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about"
          onClick={() => props.handlePageChange("About")}
          activeClassName="nav-link active"
          className={"nav-link"}
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/projects"
          onClick={() => props.handlePageChange("Projects")}
          activeClassName="nav-link active"
          className={"nav-link"}
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          onClick={() => props.handlePageChange("Contact")}
          activeClassName="nav-link active"
          className={"nav-link"}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}


export default NavTabs;
