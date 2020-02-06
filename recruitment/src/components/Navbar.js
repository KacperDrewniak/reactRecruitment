import React from 'react';

import houseOfAngular from '../assets/images/HouseofAngular.svg'
import iconHamburger from '../assets/images/icon_hamburger.svg'

const Navbar = () => 
(  <nav>
    <ul>
            <li>Strona główna</li>
            <li>Baza wiedzy</li>
            <li>Open source</li>
            <li>Blog</li>
            <li className="active">Hire Us</li>
            <ul className="copy">
                <img src={houseOfAngular} alt="HouseofAngular"/>
                    <button class="btn">Login</button>
            </ul>
            </ul>
            <ul className="copy mobile">
            <img src={houseOfAngular} alt=""/>
                 <img src={iconHamburger} alt=""/>
        </ul>

    </nav >
 )

export default Navbar;