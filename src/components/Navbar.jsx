import React from "react";
import leftImgLogo from "../images/navbar-left-logo.png"
import "../css/Navbar.css"
import Button from "../components/Button"

function Navbar() {
    return(
        <div>
            <div id="navbar-div">

                    <div className="left-logo-txt-div">
                        <img className="left-logo" src={leftImgLogo}/>
                        <p className="left-logo-txt"> Positivus </p>
                    </div>

                    <div className="navbar-mid-section-div">
                        <div className="navbar-mid-element-div">
                            <p className="navbar-mid-element">About us</p>
                        </div>

                        <div className="navbar-mid-element-div">
                            <p className="navbar-mid-element">Services</p>
                        </div>

                        <div className="navbar-mid-element-div">
                            <p className="navbar-mid-element">Use cases</p>
                        </div>

                        <div className="navbar-mid-element-div">
                            <p className="navbar-mid-element">Princing</p>
                        </div>

                        <div className="navbar-mid-element-div">
                            <p className="navbar-mid-element">Blog</p>
                        </div>

                        <Button 
                            bgColor="white"
                            borderColor="black"
                            txtColor="black"
                            btnTxt="Request a quote"
                        />

                    </div>
            </div>
        </div>
    )
}

export default Navbar;