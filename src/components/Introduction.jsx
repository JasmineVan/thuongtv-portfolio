import React from "react";
import '../assets/styles/Introduction.css'
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="holder">
            <div className="main-title">
                <TypeAnimation
                    sequence={[
                        'Xin chào',
                        1000,
                        'Hello',
                        1000,
                        'Hallo',
                        1000,
                        '你好',
                        1000,
                        'こんにちは',
                        1000,
                        'Bonjour',
                        1000,
                        'Aloha',
                        1000,
                        'Ciao',
                        1000,
                        '안녕하세요',
                        1000,
                        'Namaste',
                        1000,
                        'Ola',
                        1000,
                        'Guten Tag',
                        1000,
                        'Zdravstvuyte',
                        1000,
                        'Hola',
                        1000,
                        'Salve',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '50px', display: 'inline-block', color: 'white' }}
                    repeat={Infinity}
                />
                <div className="static-holder"></div>
                    <h2 className="title-hello">Greetings, I am</h2>
                    <h2 className="title-name">THUONG TRINH VAN</h2>
                </div>
            <div className="circle-frame">
                <img
                    className="profile-picture"
                    src="src\assets\images\profile.jpg"
                    alt="Profile"
                />
            </div>
        </div>
    );
};

export default Introduction;