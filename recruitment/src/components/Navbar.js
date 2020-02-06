import React from "react";

import houseOfAngular from "../assets/images/HouseofAngular.svg";
import iconHamburger from "../assets/images/icon_hamburger.svg";

const Navbar = () => (
  <nav>
    <ul>
      <li>Strona główna</li>
      <li>Baza wiedzy</li>
      <li>Open source</li>
      <li>Blog</li>
      <li className="active">Hire Us</li>
      <ul className="copy">
        <img src={houseOfAngular} alt="House of Angular" />
        <button className="btn">Login</button>
      </ul>
    </ul>
    <ul className="copy mobile">
      <img src={houseOfAngular} alt="House of angular" />
      <img src={iconHamburger} alt="hamburger icon" />
    </ul>
  </nav>
);

export default Navbar;
