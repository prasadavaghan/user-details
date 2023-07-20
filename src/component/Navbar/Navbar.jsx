import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const selectedUser = JSON.parse(sessionStorage.getItem("selectedUser"));
    return (
        <div className="navbar">
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
    );
}

export default Navbar;
