import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <h1>SNKRS LAB</h1>
      </div>
      <ul className="navList">
        <li className="navItem">
          <NavLink to="/homepage" activeClassName="nav-active">
            Home
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/news" activeClassName="nav-active">
            News
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
      <div className="searchBar">
        <input
          className="searchInput"
          placeholder="Rechercher sur le site"
        ></input>
        <SearchIcon />
      </div>
      <div className="accountIcons">
        <PersonOutlineOutlinedIcon
          fontSize="large"
          style={{ marginRight: "12px" }}
        />
        <FavoriteBorderIcon fontSize="large" style={{ marginRight: "12px" }} />
        <ShoppingCartOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Navbar;
