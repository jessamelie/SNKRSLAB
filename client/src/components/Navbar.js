import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <li>
          <h1>SNKRS LAB</h1>
        </li>
      </div>
      <nav>
        <ul className="navList">
          <li className="navItem">
            <NavLink to="/homepage" activeClassName="nav-active">
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/actualites" activeClassName="nav-active">
              Actu
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/blog" activeClassName="nav-active">
              Blog
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/shop" activeClassName="nav-active">
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
