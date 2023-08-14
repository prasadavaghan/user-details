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
                    <svg className="chat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 18a6.897 6.897 0 0 1-1.633-.195c-.48.3-1.04.477-1.634.477-2.523 0-4.586-2.044-4.586-4.557s2.063-4.556 4.586-4.556c1.497 0 2.852.744 3.658 1.973l1.03-1.046a.622.622 0 0 1 .464-.198.628.628 0 0 1 .447.198 8.176 8.176 0 0 1 2.768 5.78c0 4.535-3.68 8.217-8.217 8.217z" />
                    </svg>
                    Chat <span className="arrow-icon">{isChatOpen ? "▼" : "▲"}</span>
                </h3>
            </div>
            {isChatOpen && (
                <div className="chatbox-content">
                    <div className="chatbox-header">Online Users</div>
                    <div className="user-list-container">
                        <div className="user-list">
                            {users.map((user) => (
                                <div className="user-item" key={user.id}>
                                    <img src={user.profilepicture} alt={user.name} />
                                    <span>{user.name}</span>
                                </div>
                            ))}
                        </div>
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
