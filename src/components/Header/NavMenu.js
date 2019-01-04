import React from 'react';
import { Link } from "react-router-dom";

const NavMenu = props => {
    return (
            <nav className='navMenu'>
               <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/portafolio">Portafolio</Link>
            </li>
        </ul>
            </nav>
    );
};



export default NavMenu;