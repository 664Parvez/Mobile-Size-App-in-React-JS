import React from "react"
import { Link } from "react-router-dom";
import HeadBack from "./head_back";

const Signup = () => {

    return (
        <>
            <div className="mobile_size" id="signup">
                <HeadBack />

                <h4 className="text-center mt-3">Getting Started</h4>
                <p className="text-center mb-0">Create account to continue !</p>

                <form action="">
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" placeholder="Username" id="username" />
                        </div>
                        <div className="col-6 mt-3">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" className="form-control" placeholder="First name" id="firstname" />
                        </div>
                        <div className="col-6 mt-3">
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" className="form-control" placeholder="Last name" id="lastname" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="Email" id="email" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Password" id="password" />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn mt-4">Continue</button>
                        </div>
                    </div>
                </form>

                <p className="mt-4 text-center term_condition">By continuing, you agree to the <Link to="/term-of-services"><b>Terms of Services</b></Link> & <Link to="/privacy-policy"><b>Privacy Policy</b></Link></p>

                <p className="text-center mb-0 have_account">Already have an account ? <Link to="/signin"><b> Sign in</b></Link></p>
            </div>
        </>
    )
}

export default Signup