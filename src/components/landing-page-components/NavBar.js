import React from "react";
import "./NavBar.css";
// import logo from "../assets/images/logo.svg";
const NavBar = () => {
  return (
    <header>
      {/* <img className="logo" src={logo} alt="logo" /> */}
      <img className="logo" src="assets/images/logo.svg" alt="logo" />
      <nav>
        <ul className="nav_links">
          <li>
            <a href="#">Audit Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>
      <div>
        <a href="#">
          <button className="primary-btn">Request an Audit</button>
        </a>
        <a href="#">
          <button className="primary-btn">Portfolio</button>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
