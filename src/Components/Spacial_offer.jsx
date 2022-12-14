import React from "react";
import { Link } from "react-router-dom";
import User from "../img/user.png"

const Spacial_offer = () => {

    const back = () => {
        window.history.back()
    }

    return (
        <>
            <div className="mobile_size" id="spacial_offer">

                <div className="row">
                    <div className="col-6">
                        <Link to="/" onClick={back}><i className="page_back fa-solid fa-angle-left"></i></Link> {/* onclick="history.back()" [ It can get back to previous page ] */}
                    </div>
                    <div className="col-6 text-end">
                        <img className="user_img" src={User} alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <h4>Let's Share this code to your Friends</h4>
                    </div>
                    <div className="col-6">
                        <Link to="/refer-code" className="btn">Refer Your Friends</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spacial_offer