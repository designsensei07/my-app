import React from "react";
import Dropdown from "./Drop.js";
import './navbar.css';

const Navbar=()=>{
    return (
        <nav className="navbar">
            <Dropdown />
        </nav>
    );
};

export default Navbar;