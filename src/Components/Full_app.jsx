import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Fixed_footer";

const Full_app = () => {
    return(
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
                <Footer />
            </Router>
            {/* <Navbar />
                <Home />
            <Footer /> */}
        </>
    )
}

export default Full_app
