import React, { useState } from 'react';
// import ReactDOM from "react-dom";
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
import Shop from './components/Shop/Shop.js';
import SingleProductDisplay from './components/Shop/ShopParts/SingleProductDisplay'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return(
    <div className="shopwithAdia_app">
    <Router>
      <Switch>
        {/* <TypingHeader changingHeaders={typingData} /> */}
        <Route exact path="/">
          <Landing/>
        </Route>

        <div className="main_app_WLA">
          <GlobalStyle/>
          <Navbar toggle={toggle} />
          {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
            <Switch>
              <Route exact path={"/adiah/explore"}>
                <Explore slides={ExploreData} />
              </Route>

              <Route exact path={"/adiah/explore"}>
                <InfoSection {...InfoData} />
              </Route>

              <Route exact path={"/adiah/shop"}>
                <Shop />
              </Route>

              <Route exact path={"/adiah/shop/products/:id"}>
                <SingleProductDisplay {...productData} />
              </Route>
              

              


            </Switch>
        </div>

      </Switch>
    </Router>
    </div>
  )
}

export default App;
