import React from "react";
import "./nav.css";
import logo from "../../assets/logo.png";

const navbar = () => {
    return (
        <React.Fragment>
            <div className="nav">
                <div><img src={logo} alt="logo" className="logo" /></div>
                <div className="list">
                    <li>Search</li>
                    <li>Logout</li>
                </div>
            </div>
        </React.Fragment>
    );
}

export default navbar;