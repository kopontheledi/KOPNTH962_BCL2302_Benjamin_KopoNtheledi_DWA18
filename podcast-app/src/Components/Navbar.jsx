import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src="./Images/itunes.png" alt="logo" width="100px" />
        <div className="title">
          <h1 className="navbar-brand">KopoStream</h1>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link">Home</button>
            </li>
            <li className="nav-item">
              <img src="./Images/search-engine.png" alt="search" width="50px" />
            </li>
            <li className="nav-item">
              <button className="nav-link">Favorites</button>
            </li>
            <li>
              
            </li>

            {/* <li></li>
            <li></li>
            <li></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
