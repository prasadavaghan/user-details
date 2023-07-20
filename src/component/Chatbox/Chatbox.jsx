import React, { useState } from "react";
import "./Chatbox.css";

function Chatbox({ users }) {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleChatToggle = () => {
        setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen);
    };

    return (
        <div className={`chatbox-container ${isChatOpen ? "open" : ""}`}>
            <div className="chatbox-toggle" onClick={handleChatToggle}>
                <h3 className="chatbox-title">
                    Chat <span className="arrow-icon">{isChatOpen ? "▼" : "▲"}</span>
                </h3>
            </div>
            {isChatOpen && (
                <div className="chatbox-content">
                    <div className="chatbox-header">Online Users</div>
                    <div className="user-list">
                        {users.slice(0, 4).map((user) => (
                            <div className="user-item" key={user.id}>
                                <img src={user.profilepicture} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="view-all-link">
                        <a href="/">View All</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbox;
