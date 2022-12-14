import React from "react";
import { Link } from "react-router-dom";

const Fixed_footer = () => {
    return (
        <>
            <div className="fixed_footer_bar fixed-bottom">

                <ul>
                    <li><Link to="/my-cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                    <li><Link to="/favorites"><i className="fa-solid fa-heart"></i></Link></li>
                    <li><Link to="/spacial-offer"><i className="fa-solid fa-gift"></i></Link></li>
                    <li><Link to="/signup"><i className="fa-solid fa-user-plus"></i></Link></li>
                </ul>
                
            </div>
        </>
    )
}

export default Fixed_footer