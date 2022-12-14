import React from "react"
import { NavLink } from "react-router-dom"
import IntroLogo from "../img/intro-logo.png"

const Intro = () => {
    return(
        <>
            <div className="mobile_size" id="intro_page">
                <div className="logo">
                    <img src={IntroLogo} alt="" />
                </div> 
                <NavLink to="/home" className="btn btn-light my-4">Get Started</NavLink>
            </div>
            
        </>
    )
}

export default Intro