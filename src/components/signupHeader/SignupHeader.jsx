import React from 'react';
import './SignupHeader.css';

const Signup = () =>{
    return (
        <header>
            <img className="logo-repeco" src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000" height="80px" alt="logo-repeco" />
            <h1 className="signup-title">
                REGISTRO A REPECO
            </h1>
            <p className="line"></p>
        </header>
    );
};

export default Signup;