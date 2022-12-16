import React from "react";
import { Link } from "react-router-dom";

import HeadBack from "./head_back";

const Spacial_offer = () => {

    return (
        <>
            <div className="mobile_size" id="spacial_offer">

                <HeadBack />

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