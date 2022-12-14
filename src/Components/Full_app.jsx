import React from "react";

import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import ForgetPasswordEmail from "./Forget_password_email";
import ChangePassword from "./Forget_password_password_form"
import SpacialOffer from "./Spacial_offer"
import ReferFriends from "./Refer_friend"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Intro from "./Intro_page";


const Full_app = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Intro />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/signin" element={<Signin/>}></Route>
                    <Route path="/spacial-offer" element={<SpacialOffer/>}></Route>
                    <Route path="/refer-code" element={<ReferFriends/>}></Route>
                    <Route path="/forget-password" element={<ForgetPasswordEmail/>}></Route>
                    <Route path="/change-password" element={<ChangePassword/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default Full_app
