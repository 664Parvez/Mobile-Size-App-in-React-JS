import React from "react";
import HeadBack from "./head_back";

const Forget_password_email = () => {
    return (
        <>
           <div className="mobile_size" id="forget_pass_email">
                <HeadBack />

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