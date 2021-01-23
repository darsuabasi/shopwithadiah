import React from 'react';
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'

const App = () => {
  return(
    <div className="shopwithAdia_app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>

        <div className="main_app_WLA">
          <Navbar/>
            <Switch>

            </Switch>
        </div>

      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
