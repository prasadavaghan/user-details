import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const selectedUser = JSON.parse(sessionStorage.getItem("selectedUser"));
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="nav-links">
                <NavLink to={`/details/${selectedUser.id}`} activeClassName="active">
                    Profile
                </NavLink>
                <NavLink to="/details/posts" activeClassName="active">
                    Posts
                </NavLink>
                <NavLink to="/details/gallery" activeClassName="active">
                    Gallery
                </NavLink>
                <NavLink to="/details/todo" activeClassName="active">
                    ToDo
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
