import React from 'react'
import './styles.css'

const Cart = ({ cartItem, addToCart, decreaseQty, removeCart }) => {
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <section className="cart-item">
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
                        {cartItem.map((item) => {
                            const productQty = item.price * item.qty
                            return (
                                <div className="cart-list product d_flex">
                                    <div className="img">
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>Price: {item.price}$  Quantity: {item.qty}</h4>
                                        <span>Total: {productQty}$</span>
                                    </div>

                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button onClick={() => {
                                                removeCart(item)
                                            }}>
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>

                                        <div className="cartControl d_flex">
                                            <button className="incCart" onClick={() => {
                                                addToCart(item)
                                            }}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                            <button className="desCart" onClick={() => {
                                                decreaseQty(item)
                                            }}>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-items-price"></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-total product">
                        <h2>Cart Summary</h2>
                        <div className="d_flex">
                            <h4>Total Price: </h4>
                            <h3>{totalPrice}$</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart