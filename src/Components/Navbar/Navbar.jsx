// import './Navbar.css';
import {NavLink, Link} from "react-router-dom";
import React from "react";
import "./Navbar.css";

export const Navbar = () => {
    return <nav>
        <Link to="/" className="title">Website</Link>
        <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>;
}