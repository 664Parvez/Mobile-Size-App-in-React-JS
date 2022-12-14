import React from "react";
import { Link } from "react-router-dom";
import User from "../img/user.png"

const Forget_password_email = () => {
    const back = () => {
        window.history.back()
    }
    return (
        <>
           <div className="mobile_size" id="forget_pass_email">
                <div className="row">
                    <div className="col-6">
                        <Link to="/" onClick={back}><i className="page_back fa-solid fa-angle-left"></i></Link> {/* onclick="history.back()" [ It can get back to previous page ] */}
                    </div>
                    <div className="col-6 text-end">
                        <img className="user_img" src={User} alt="" />
                    </div>
                </div>

                <h4 className="text-center mt-5">Forget Password</h4>
                <p className="text-center">Enter your email address</p>

                <form action="">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <label htmlFor="email">Enter Your Email</label>
                            <input type="email" className="form-control" placeholder="Email" id="email" />
                        </div>
                        
                        <div className="col-12">
                        <button type="submit" className="btn mt-4">Continue</button>
                        </div>
                    </div>
                </form>
            </div> 
        </>
    )
}

export default Forget_password_email