import React from 'react'
import HeadBack from './head_back'
// import { Link } from 'react-router-dom'

const Chechout = () => {
  return (
    <>
        <div className="mobile_size" id="product_single_page">
            <HeadBack />

            <h4>Chechout</h4>

            <div className="address mt-4">
              <h5>Address</h5>
              
            </div>

            <button>Place Order</button>
        </div>
    </>
  )
}

export default Chechout