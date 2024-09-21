import React from 'react';
import '../assets/styles/Delimiter.css'; // Make sure to create this CSS file

const Delimiter = ({ title }) => {
    return (
        <div className="delimiter-container">
            <h2 className="delimiter-title">{title}</h2>
            <div className="delimiter" />
        </div>
    );
};

export default Delimiter;
