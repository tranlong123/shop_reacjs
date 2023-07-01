import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from './pages/Pages';
import Data from './compoments/flashDeals/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';

function App() {

  const { productItems } = Data
  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (
        item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item
      )))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => 
      (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const removeCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
      setCartItem(cartItem.filter((item) => item.id !== product.id))
  }

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} cartItem={cartItem} addToCart={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeCart={removeCart}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
