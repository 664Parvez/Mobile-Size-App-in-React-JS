import React from 'react'
import HeadBack from './head_back'
import {Link} from 'react-router-dom'

import FavJson from '../api/favorite.json'

const Favorite = () => {
  return (
    <>
        <div className="mobile_size" id="favorite_page">
            <HeadBack/>

            <h3>Favorite</h3>

            <div className="row mt-5">
              
            {
              FavJson.map((items) => {
                return (
                  <>
                    <div className="col-3">
                      <img className='favImg' src={items.img} alt="" />
                    </div>
                    <div className="col-6">
                      <h5 className='mt-4'>{items.name}</h5>
                    </div>
                    <div className="col-3">
                      <h5 className='mt-4'>{items.price}</h5>
                    </div>
                  <hr />
                  </>
                )
              })
            }

              
            </div>

            <div className="text-center mt-5">
              <Link to="/cart" className='btn btn-lg'>Cart</Link>
            </div>
            
        </div>
    </>
  )
}

export default Favorite