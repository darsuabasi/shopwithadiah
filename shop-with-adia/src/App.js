import React, { useState } from 'react';
// import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Explore from './components/Explore/Explore'
import GlobalStyle from './GlobalStyle/globalStyle';
import ExploreData from './components/Data/ExploreData';
// import Dropdown from './components/Dropdown/Dropdown';
import InfoSection from './components/InfoSection/InfoSection';
import { InfoData } from './components/Data/InfoData';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return(
    <div className="shopwithAdia_app">
    <BrowserRouter>
      <Switch>
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


            </Switch>
        </div>

      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
