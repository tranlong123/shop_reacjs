import React, { useState } from 'react'

const ShopCart = ({ addToCart, shopItems }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {
        shopItems.map((val, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{val.discount}% Off</span>
                  <img src={val.cover} alt="" height={200} />

                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="far fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{val.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{val.price}$</h4>
                    <button onClick={() => addToCart(val)} >
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ShopCart