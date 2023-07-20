import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [hoveredUserId, setHoveredUserId] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://panorbit.in/api/users.json");
                const data = await response.json();
                setUsers(data.users);
                sessionStorage.setItem("user", JSON.stringify(data.users))
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleUserClick = (user) => {
        sessionStorage.setItem("selectedUser", JSON.stringify(user))
        navigate(`/details/${user.id}`);
    };

    const handleUserHover = (userId) => {
        setHoveredUserId(userId);
    };

    const handleUserLeave = () => {
        setHoveredUserId(null);
    };

    return (
        <div className="home-container">
            <div className="list-container">
                <h2>Select an account</h2>
                <ul>
                    {users.map((user) => (
                        <li
                            key={user.id}
                            onClick={() => handleUserClick(user)}
                            onMouseEnter={() => handleUserHover(user.id)}
                            onMouseLeave={handleUserLeave}
                            style={{
                                backgroundColor: hoveredUserId === user.id ? "#ECECEC" : "transparent",
                            }}
                        >
                            <div className="user-info">
                                <div className="user-avatar">
                                    <img src={user.profilepicture} alt={user.name} />
                                </div>
                                <span className="user-name">{user.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
