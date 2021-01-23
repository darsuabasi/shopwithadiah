import React from 'react';
import ReactDOM from "react-dom";
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'

const App = () => {
  return(
    <div className="shopwithAdia_app">
      <Navbar/>
        <Switch>

          <Route exact path="/">
            <Landing/>
          </Route>

        </Switch>
    </div>
  )
}

export default App;
