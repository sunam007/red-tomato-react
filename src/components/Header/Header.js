import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo of red tomato" />
      <nav className="navbar-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/menu">Food Menu</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
      </nav>
      <a href="/contact">
        <button>Contact</button>
      </a>
    </div>
  );
};

export default Header;
