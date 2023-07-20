import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Posts.css"; // Import the CSS file for the Posts component
import Chatbox from "../../Chatbox/Chatbox";
import { useNavigate } from "react-router-dom";

function Posts() {
    const users = JSON.parse(sessionStorage.getItem("user"));
    const selectedUser = JSON.parse(sessionStorage.getItem("selectedUser"));
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear the sessionStorage data and navigate to the home route
        sessionStorage.removeItem("selectedUser");
        navigate("/");
    };
    return (
        <div className="coming-container">
            <Navbar />
            <div className="content">
                <h1 className="title">Posts</h1>
                <div className="profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={selectedUser.profilepicture} alt={selectedUser.name} />
                    <span>{selectedUser.name}</span>
                    {isDropdownOpen && (
                        <div className="dropdown">
                            <span onClick={handleLogout}>Logout</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="coming-soon">
                <h1 className="coming-soon-title">Coming Soon</h1>
            </div>
            <Chatbox users={users} />
        </div>
    );
}

export default Posts;