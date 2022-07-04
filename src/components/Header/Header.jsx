import React from 'react';
import "./header.scss"
import logo from "../../assets/lodo.svg"

const Header = () => {
    return (
        <div>
            <div className="top-header"></div>
            <div  className="down-header">
                <div className="container">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    );
};

export default Header;