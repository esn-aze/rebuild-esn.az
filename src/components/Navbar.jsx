import React from "react";
import logo from "../assets/images/ESNlogo.png";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <div>
            <span>About us</span> <i class="fa-solid fa-chevron-down"></i>{" "}
          </div>
        </li>
        <li>
          <div>
            <span> The Network</span> <i class="fa-solid fa-chevron-down"></i>
          </div>
        </li>
        <li>
          <div>
            <span> Our Actions</span> <i class="fa-solid fa-chevron-down"></i>
          </div>
        </li>
        <li>
          <div>
            <span> Our Partners </span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </li>
        <li>
          <div>
            <span>Contact</span> <i class="fa-solid fa-chevron-down"></i>
          </div>
        </li>
      </ul>
      <div className="burger-menu">
        <RiMenu3Fill />
      </div>
    </div>
  );
};

export default Navbar;
