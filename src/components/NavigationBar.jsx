import React from "react";
import '../assets/styles/NavigationBar.css'

const NavigationBar = () => {
    return (
    <nav className="navbar">
      <div className="name">Thuong Trinh Van</div>
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    );
};

export default NavigationBar;