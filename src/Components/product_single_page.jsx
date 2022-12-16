import React from "react"
import { Link } from "react-router-dom"
import HeadBack from "./head_back"

const ProductSinglePage = () => {
    return(
        <>
            <div className="mobile_size" id="product_single_page">

                <HeadBack />
                
                <div className="row text-center">
                    <div className="col-6">
                        <Link to="/cart" className="btn btn-lg">Add to Cart</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/chechout" className="btn btn-lg">Buy Now</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductSinglePage