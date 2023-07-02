import React from 'react'
import Home from '../compoments/mainpage/Home'
import FlashDeals from '../compoments/flashDeals/FlashDeals'
import TopCate from '../compoments/top/TopCate'
import NewArrivals from '../compoments/newarrivals/NewArrivals'
import Discount from '../compoments/discount/Discount'
import Shop from '../compoments/shop/Shop'
import Wrapper from '../compoments/wrapper/Wrapper'

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop  shopItems={shopItems} addToCart={addToCart} />
      <Wrapper/>
    </>
  )
}

export default Pages