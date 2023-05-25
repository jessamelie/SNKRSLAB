import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
          <h1>SNKRS LAB </h1>
      </div>
      <nav>
        <ul className="navList">
          <li className="navItem">
            <NavLink to="/homepage" activeClassName="nav-active" style={{textDecoration: 'none'}}>
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/actualites" activeClassName="nav-active" style={{textDecoration: 'none'}}>
              Actu
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/blog" activeClassName="nav-active" style={{textDecoration: 'none'}}>
              Blog
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/shop" activeClassName="nav-active" style={{textDecoration: 'none'}}>
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
