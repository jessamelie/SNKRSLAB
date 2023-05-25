import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <NavLink to="/homepage" activeClassName="nav-active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/actualites" activeClassName="nav-active">
              Actu
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="nav-active">
              Blog
            </NavLink>
          </li>
          <li>
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
