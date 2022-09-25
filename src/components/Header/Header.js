import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-bar">
        <div className="nav-elements">
          <ul>
            <li className="header-logo">
              <img src={logo} alt="" />
            </li>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="menu">Menu</a>
            </li>
            <li>
              <a href="blogs">Blogs</a>
            </li>
            <li>
              <a href="reservation">Reservation</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
