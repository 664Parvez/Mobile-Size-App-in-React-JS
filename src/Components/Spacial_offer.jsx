import React from "react";
import { Link } from "react-router-dom";

import HeadBack from "./head_back";
import OfferImg from "../img/offer.png"

const Spacial_offer = () => {

    return (
        <>
            <div className="mobile_size" id="spacial_offer">

                <HeadBack />

                <h3 className="mt-3 mb-4 text-center">Spacial Offer</h3>

                <img className="offer_img mb-3" src={OfferImg} alt="" />

                <p className="text-center">20% Offer on Every Product of Food</p>

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