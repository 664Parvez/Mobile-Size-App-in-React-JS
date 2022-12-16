import React from "react"
import { Link } from "react-router-dom"

import User from "../img/user.png"

const HeadBack = () => {

    const back = () => {
        window.history.back()
    }

    return(
        <>
            <div className="row">
                <div className="col-6">
                    <Link to="/" onClick={back}><i className="page_back fa-solid fa-angle-left"></i></Link> {/* onclick="history.back()" [ It can get back to previous page ] */}
                </div>
                <div className="col-6 text-end">
                    <img className="user_img" src={User} alt="" />
                </div>
            </div>
        </>
    )
}

export default HeadBack