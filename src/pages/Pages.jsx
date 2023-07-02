import React from 'react'
import Home from '../compoments/mainpage/Home'
import FlashDeals from '../compoments/flashDeals/FlashDeals'
import TopCate from '../compoments/top/TopCate'
import NewArrivals from '../compoments/newarrivals/NewArrivals'

const Pages = ({ productItems,cartItem ,addToCart}) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCate/>
      <NewArrivals/>
    </>
  )
}

export default Pages