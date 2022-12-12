import React from "react";
import User from "../img/user.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="fixed-top" id="navbar">
                <div className="row">
                    <div className="col-6">
                        <Link to="/"><i class="page_back fa-solid fa-angle-left"></i></Link>
                    </div>
                    <div className="col-6 text-end">
                        <img className="user_img" src={User} alt="" />
                    </div>
                    <div className="col-12">
                        <h5>Home</h5>
                        <input type="text" placeholder="Search your food . . . ." className="form-control mt-2 form-control-sm" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar