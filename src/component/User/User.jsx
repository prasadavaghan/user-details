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
                    <p>Username: <span>{username}</span></p>
                    <p>Email: <span>{email}</span></p>
                    <p>Phone: <span>{phone}</span></p>
                    <p>Website: <span>{website}</span></p>
                    <h3>Company</h3>
                    <p>Name: <span>{companyName}</span></p>
                    <p>Catchphrase: <span>{catchPhrase}</span></p>
                    <p>BS: <span>{bs}</span></p>
                </div>
            </div>
            <div className="address-section">
                <h3>Address :</h3>
                <p>Street: <b>{street}</b></p>
                <p>Suite: <b>{suite}</b></p>
                <p>City: <b>{city}</b></p>
                <p>Zipcode: <b>{zipcode}</b></p>
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
