import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeadBack from './head_back'

import cartApi from "../api/cart_api.json"

const Cart = () => {

  const [ listItems, setListItem ] = useState(cartApi)

  return (
    <>
        <div className="mobile_size" id="cart_page">
            <HeadBack />

            <h3 className='mt-4'> <b>My</b> <br />Cart List</h3>

            <div className="product_cart_list mt-5">
              <div className="row">

              {
                listItems.map((items) => {
                  return (
                    <>
                      <div className="col-3">
                        <img src={items.img} alt="" />
                      </div>
                      <div className="col-7">
                        <h5>{items.name}</h5>
                        <h6>${items.price}</h6>
                      </div>
                      <div className="col-2 text-center">
                        <h4 className='mb-0'>+</h4>
                        <h4 className='mb-0'>0</h4>
                        <h4 className='mb-0'>-</h4>
                      </div>
                      <hr />
                    </>
                  )
                })
              }

              </div>

              <div className="row mt-4">
                <div className="col-8">
                  <h5>Subtotal</h5>
                </div>
                <div className="col-4">
                  <h5>$57.25</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <h5>Vat</h5>
                </div>
                <div className="col-4">
                  <h5>$3</h5>
                </div>
              </div>
            </div>

            <hr />

            <div className="row">
                <div className="col-8">
                  <h5>Total</h5>
                </div>
                <div className="col-4">
                  <h5>$60.25</h5>
                </div>
              </div>

            <div className='text-center my-4'>
              <Link to="/chechout" className='btn btn-lg'>Chechout</Link>
            </div>
        </div>
    </>
  )
}

export default Cart