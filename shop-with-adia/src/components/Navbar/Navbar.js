import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css'


const Navbar = () => {
    return (
        <div class="sidebar" className="main_navbar_container">

            <ul className="navbar_ui">
                <li class="navbar_li">
                    <NavLink className="navigation-links" to={"/"}> Home </NavLink>
                </li>

                <li class="navbar_li">
                    <NavLink className="navigation-links" to={"/adiah"}> Adiah </NavLink>
                </li>

                <li class="navbar_li">
                    <NavLink className="navigation-links" to={"/adiah/explore"}> Explore </NavLink>
                </li>


                <li class="navbar_li">
                    <NavLink className="navigation-links" to={"/adiah/shop"}> Shop </NavLink>
                </li>

                {/* <li class="navbar_li">
                    <NavLink className="navigation-links" to={"adiah/explore"}> Explore </NavLink>
                </li> */}
            </ul>
        </div> 
    )
}

export default  Navbar;