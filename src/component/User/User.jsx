import React from "react";
import './User.css';

function User({ user }) {
    const { name, username, email, phone, website, company, profilepicture, address } = user;
    const { name: companyName, catchPhrase, bs } = company;
    const { street, suite, city, zipcode, geo } = address;
    const { lat, lng } = geo;

    return (
        <div className="user-container">
            <div className="user-profile">
                <div className="profile-picture">
                    <img src={profilepicture} alt={name} />
                </div>
                <div className="user-data-section">
                    <h2>{name}</h2>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    <h3>Company</h3>
                    <p>Name: {companyName}</p>
                    <p>Catchphrase: {catchPhrase}</p>
                    <p>BS: {bs}</p>
                </div>
            </div>
            <div className="address-section">
                <h3>Address</h3>
                <p>Street: {street}</p>
                <p>Suite: {suite}</p>
                <p>City: {city}</p>
                <p>Zipcode: {zipcode}</p>
                <div className="map">
                    <iframe
                        title="Location Map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                    />
                </div>
            </div>
        </div>
    );
}

export default User;
