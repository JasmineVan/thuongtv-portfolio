import React from "react";
import '../assets/styles/School.css'; // Ensure the path is correct

const School = () => {
    return (
        <div className="school-container">
            <img src=".\src\assets\images\tdtu-logo.webp" alt="School Logo" className="school-logo" />
            <h2 className="school-title">Ton Duc Thang University</h2>
            <p className="school-time">2018 - 2022</p>
            <p className="school-description">
                I graduated from Ton Duc Thang University with a Bachelor of Software Engineering.
            </p>
        </div>
    );
};

export default School;
