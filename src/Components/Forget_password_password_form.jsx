import React from "react";
import { Link } from "react-router-dom";
import User from "../img/user.png"

const Forget_password_email = () => {
    return (
        <>
            <div className="mobile_size" id="change_pass">
                <div className="row">
                    <div className="col-6">
                        <Link to="/" onClick="history.back()"><i class="page_back fa-solid fa-angle-left"></i></Link> {/* onclick="history.back()" [ It can get back to previous page ] */}
                    </div>
                    <div className="col-6 text-end">
                        <img className="user_img" src={User} alt="" />
                    </div>
                </div>

                <h4 className="text-center mt-5">New Password</h4>

                <form action="">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <label htmlFor="new-password">New Password</label>
                            <input type="password" className="form-control" placeholder="New Password" id="new-password" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" id="confirm-password" />
                        </div>
                        
                        <div className="col-12">
                        <button type="submit" className="btn mt-4">Change Password</button>
                        </div>
                    </div>
                </form>

            </div>  
        </>
    )
}

export default Forget_password_email