import React, {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"
import HeadBack from "./head_back"

import BurgerFood from "../img/11.webp"

const ProductSinglePage = () => {

    const [ number, setNumber ] = useState(0)

    const add = () => {
        let addNum = number + 1
       setNumber(addNum) 
    }

    const mun = () => {
        let munNum = number - 1
        setNumber(munNum)
    }


    return(
        <>
            <div className="mobile_size" id="product_single_page">

                <HeadBack />

                <h3>Details</h3>

                <div className="product">
                    <h4>Food Name</h4>

                    <img src={BurgerFood} alt="" />

                    <div className="price text-center">
                        <h4>$45.64</h4>
                        <h4><button className="m-1 btn" onClick={mun}>-</button><span className="m-1 count">{number}</span><button className="m-1 btn" onClick={add}>+</button></h4>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore est culpa quaerat tempora rerum corporis</p>
                
                <div className="row text-center">
                    <div className="col-6">
                        <Link to="/cart" className="btn btn-lg btn-outline-dark">Add to Cart</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/chechout" className="btn btn-lg btn-dark">Buy Now</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductSinglePage