import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Explore from './components/Explore/Explore'
import GlobalStyle from './GlobalStyle/globalStyle';
import ExploreData from './components/Data/ExploreData';
// import Dropdown from './components/Dropdown/Dropdown';
import InfoSection from './components/InfoSection/InfoSection';
import { InfoData } from './components/Data/InfoData';
import { productData } from './components/Shop/Data/ProductData';
import TypingHeader from './components/Explore/TypingHeader';
import { typingData } from './components/Data/TypingData';
// import Shop from './components/Shop/Shop.js';
// import Cart from './components/Shop/ShopParts/Cart';

import ProductsHome from './components/ProductsHome/ProductsHome';
import Commerce from '@chec/commerce.js';
import Cart from './components/Cart/Cart';
import CartItem from './components/Cart/CartItem/CartItem';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import SingleProductDisplay from './components/Shop/ShopParts/SingleProductDisplay';
// import { commerce } from './lib/commerce'

const commerce = new Commerce(
  'pk_test_2254642a04a3be9d806eaf9f793dadd08058c50fa1016'
);


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   commerce.products.list().then((product) => console.log(product));
  //   setProducts(data);
  // };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart)


  const toggle = () => {
    setIsOpen(!isOpen)
  }



  return(
    <div className="shopwithAdia_app">
    <Router>
      <Switch>
        {/* <TypingHeader changingHeaders={typingData} /> */}
        {/* <Route exact path="/">
          <Landing/>
        </Route> */}

        <div className="main_app_WLA">
          <GlobalStyle/>
          <Navbar toggle={toggle} totalItems={cart.total_items}/>
          {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
            <Switch>
              <Route exact path={"/adiah/explore"}>
                <Explore slides={ExploreData} />
              </Route>

              <Route exact path={"/adiah/explore"}>
                <InfoSection {...InfoData} />
              </Route>

              {/* <Route exact path={"/adiah/shop"}>
                <Shop {...productData} />
              </Route> */}

              <Route exact path={"/adiah/shop"}>
                <ProductsHome products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
              </Route>

              <Route exact path={'/adiah/shop/cart'}>
                <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>
              </Route>

              {/* <Route path="/adiah/shop/checkout" exact>
                <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
              </Route> */}

              {/* <Route exact path={'/adiah/shop/cart/items'}>
                <CartItem />
              </Route> */}

              {/* <Route exact path={"/adiah/shop/:id"}>
                <SingleProductDisplay {...productData} />
              </Route> */}

              <Route exact path={"/adiah/shop/:id"}>
                <SingleProductDisplay products={products} /*onAddToCart={handleAddToCart} handleUpdateCartQty*/ />
              </Route>
              
              

              


            </Switch>
        </div>

      </Switch>
    </Router>
    </div>
  )
}

export default App;

