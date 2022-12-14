import React from "react";
import { Link } from "react-router-dom";
import User from "../img/user.png"

const Refer_friend = () => {

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

                <h4>Refer & Earn</h4>

                


                {/* <code>F53C60</code> */}
            </div>
        </>
    )
}

export default Refer_friend