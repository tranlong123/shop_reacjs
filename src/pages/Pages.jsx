import React from 'react'
import Home from '../compoments/mainpage/Home'
import FlashDeals from '../compoments/flashDeals/FlashDeals'
import TopCate from '../compoments/top/TopCate'

const Pages = ({ productItems,cartItem ,addToCart}) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCate/>
    </>
  )
}

export default Pages