import React from "react";

// Icons
import houseOfAngular from "../assets/images/HouseofAngular.svg";
import iconFB from "../assets/images/facebook-logo.svg";
import iconInsta from "../assets/images/github-sign.svg";

const Footer = () => (
  <footer>
    <ul>
      <img src={houseOfAngular} alt="houseOfAngular" />
      <li>Baza wiedzy</li>
      <li>Open source</li>
      <li>Blog</li>
      <li>Hire Us</li>
      <li>Privacy Policy</li>
      <li>
        <img src={iconFB} alt="facebook icon" />
        <img src={iconInsta} alt="instagram icon" />
      </li>
    </ul>
    <h4>Copyright &copy; 2013-2019 ValueAdd, All right reserved.</h4>
  </footer>
);

export default Footer;
