import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Fixed_footer";

import FirstFood from "../api/first_food.json"
import SecondFood from "../api/second_food.json"

const Home = () => {

    const [ firstItems, setFirstItems ] = useState(FirstFood)
    const [ secondFood, setSecondFood ] = useState(SecondFood)

    return (
        <>
            <Navbar/>
                <div className="mobile_size">
                    <div id="home_page">
                        <h5>Good Day! <span>Parvez Rabbi</span> </h5>
                        <h2>Grab your <span><br />delicious meal!</span></h2>

                        <div className="first_food mt-4">
                            <h6>All Categories</h6>
                            <div className="slider">
                                {
                                    firstItems.map((items) => {
                                        return(
                                            <div className="slide">
                                                <img src={items.food} alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="second_food mt-4">
                            <h6>Popular Food</h6>
                            <div className="row">
                                {
                                    secondFood.map((items) => {
                                        return(
                                            <div className="col-6 back_color">
                                                <div className="food_div">
                                                    <img src={items.img} alt="" />
                                                </div>
                                                <div className="food_content">
                                                    <h6 className="mb-0">{items.name}</h6>
                                                    <p>${items.price}</p>
                                                </div>
                                            </div> 
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Home 