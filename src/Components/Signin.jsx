import React from "react"
import { Link } from "react-router-dom"
import User from "../img/user.png"

const Signin = () => {

    const back = () => {
        window.history.back()
    }

    return (
        <>
            <div className="mobile_size" id="signin">
                <div className="row">
                    <div className="col-6">
                        <Link to="/" onClick={back}><i class="page_back fa-solid fa-angle-left"></i></Link> {/* onclick="history.back()" [ It can get back to previous page ] */}
                    </div>
                    <div className="col-6 text-end">
                        <img className="user_img" src={User} alt="" />
                    </div>
                </div>

                <h4 className="text-center mt-5">Let's Get Something</h4>
                <p className="text-center">Good to see you back</p>

                <form action="">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="Email" id="email" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Password" id="password" />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn mt-4">Signin</button>
                        </div>
                    </div>
                </form>

                <p className="text-center pt-5 mb-0 have_account">Don't have an account ? <Link to="/signup"><b>Signup</b></Link></p>

                <p className="text-center pt-4 mb-0 have_account"><Link to="/forget-password">forget your password ?</Link></p>

            </div>
        </>
    )
}

export default Signin