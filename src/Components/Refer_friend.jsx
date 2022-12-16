import React from "react";

import ReferImage from "../img/refer-page.webp"
import HeadBack from "./head_back";


const Refer_friend = () => {

    return (
        <>
            <div className="mobile_size" id="refer_friends">
            <HeadBack />

                <h4>Refer & Earn</h4>

                <div className="refer_page text-center">
                    <div className="text-center">
                        <img src={ReferImage} alt="" />
                    </div>

                    <h4 className="mt-3">Refer a Friend</h4>
                    <p>Share your promo code with your friends and you both get $20</p>

                    <h3>
                        <code>F53C604</code>
                    </h3>
                </div>

            </div>
        </>
    )
}

export default Refer_friend