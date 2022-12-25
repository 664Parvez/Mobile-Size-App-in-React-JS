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

              <div className="home_add_div">
                <div className="row">
                  <div className="col-10">
                    <h6>Home</h6>
                    <p className='mb-0'>H #10, R #20, Main St. 300 Post Street 12335</p>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>

              <div className="office_add_div">
                <div className="row">
                  <div className="col-10">
                    <h6>Office</h6>
                    <p className='mb-0'>H #3, R #5, Main St. 245 Post Street 1265</p>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
              
            </div>


            <div className="address mt-4">
              <h5>Payment Method</h5>

              <div className="card_pay_div">
                <div className="row">
                  <div className="col-10">
                    <h6>Master Card</h6>
                    <p className='mb-0'>Card No: . . . . 12335</p>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>

              <div className="cash_pay_div">
                <div className="row">
                  <div className="col-10">
                    <h6>Cash on Delivery</h6>
                    <p className='mb-0'>$60.00 ( with delivery charge )</p>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
              
            </div>

            <div className="row mt-5">
              <div className="col-6">
                <h4><b>Total</b></h4>
                <h3>$56.44</h3>
              </div>
              <div className="col-6 text-end">
                <button className='btn btn-dark btn-lg'>Place Order</button>
              </div>
            </div>
            
        </div>
    </>
  )
}

export default Chechout