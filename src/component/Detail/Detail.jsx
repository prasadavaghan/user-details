import React, { useState } from "react";
import "./Detail.css";
import Navbar from "../Navbar/Navbar";
import User from "../User/User";
import Chatbox from "../Chatbox/Chatbox";
import { useNavigate } from "react-router-dom";

function Detail() {
    const user = JSON.parse(sessionStorage.getItem("selectedUser"));
    const users = JSON.parse(sessionStorage.getItem("user"));
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear the sessionStorage data and navigate to the home route
        sessionStorage.removeItem("selectedUser");
        navigate("/");
    };
    return (
        <div className="details-container">
            <Navbar />
            <div className="content">
                <h1 className="title">Profile</h1>
                <div className="profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={user.profilepicture} alt={user.name} />
                    <span>{user.name}</span>
                    {isDropdownOpen && (
                        <div className="dropdown">
                            <span onClick={handleLogout}>Logout</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="details-content">
                <User user={user} />
            </div>
            <Chatbox users={users} />
        </div>
    );
}

export default Detail;
