import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Adiah from './components/About/Adiah';
import Explore from './components/Explore/Explore'
import GlobalStyle from './GlobalStyle/globalStyle';
import ExploreData from './components/Data/ExploreData';
// import Dropdown from './components/Dropdown/Dropdown';
// import InfoSection from './components/InfoSection/InfoSection';
import { InfoData } from './components/Data/InfoData';
// import { productData } from './components/ShopOld/Data/ProductData';
// import TypingHeader from './components/Explore/TypingHeader';
// import { typingData } from './components/Data/TypingData';
import Shop from './components/Shop/Shop';
import Commerce from '@chec/commerce.js';
import Cart from './components/Cart/Cart';
import CartItem from './components/Cart/CartItem/CartItem';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import ProductInfo from './components/Shop/ProductInfo/ProductInfo';
import Error from './components/Error/Error';
// import SingleProductDisplay from './components/Shop/ShopParts/SingleProductDisplay';
import commerce from './lib/commerce';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [singleCategories, setSingleCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');


  const fetchProducts = async () => {
    // commerce.products.list().then((product) => console.log(product));
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    // commerce.cart.retrieve().then((cart) => console.log(cart));
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleFetchSingleProduct = async (productId) => {
    // commerce.products.retrieve('prod_7RqEv5xKOoZz4j').then((product) => console.log(product.name));
    const { data } = await commerce.products.retrieve(productId);
    setProduct(data);
  }

  // const fetchCategories = async () => {
  //   // commerce.categories.list().then((category) => console.log(category.name));
  //   const categoryList = await commerce.categories.list()
  //   setAllCategories(categoryList)
  // }

  // const fetchSingleCategory = async (id, data) => {
  //   commerce.categories.retrieve('cat_7RqEv5xKOoZz4j').then((category) => console.log(category.name));
  //   const categoryList = await commerce.categories.retrieve()
  //   setAllCategories(categoryList)
  // }

  const handleAddToCart = async (productId, quantity) => {
    // commerce.cart.add('prod_R4OANwRqklvYL8', 5).then((response) => console.log(response));
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    // commerce.cart.update('item_7RyWOwmK5nEa2V', { quantity: 5 }).then(response => console.log(response));
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    // commerce.cart.remove('item_7RyWOwmK5nEa2V').then((response) => console.log(response));
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    // commerce.cart.empty().then((response) => console.log(response));
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const refreshCart = async () => {
    // commerce.cart.refresh().then((cart) => console.log(cart));
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
    // fetchSingleProduct();
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return(
    <div className="shopwithAdia_app">
    <Router>
      <Switch>
  
        {/* <Route exact path="/">
          <Landing/>
        </Route> */}

        <div className="main_app_WLA">
          <GlobalStyle/>
          <Navbar toggle={toggle} totalItems={cart.total_items}/>
          {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
            <Switch>

              {/* <Route exact path={"/adiah"}>
                <Adiah {...InfoData}/>
              </Route> */}

              <Route exact path={"/"}>
                <Adiah {...InfoData}/>
              </Route>
              
              <Route exact path={"/adiah/explore"}>
                <Explore slides={ExploreData} />
              </Route>

              <Route exact path={"/adiah/shop"}>
                <Shop products={products} /*product={product}*/  onAddToCart={handleAddToCart} handleUpdateCartQty handleFetchSingleProduct/>
              </Route>

              <Route exact path={'/adiah/shop/cart'}>
                <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>
              </Route>

              <Route path="/adiah/shop/checkout" exact>
                <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
              </Route>

              <Route path={"/adiah/shop/products/:productId"}>
                <ProductInfo products={products} onAddToCart={handleAddToCart} handleUpdateCartQty handleFetchSingleProduct/>
              </Route>

              <Route exact path={"*"}>
                <Error/>
              </Route>
              
            </Switch>
        </div>

      </Switch>
    </Router>
    </div>
  )
}

export default App;

