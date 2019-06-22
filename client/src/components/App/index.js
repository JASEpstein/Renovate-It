import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '@material-ui/core';
import '@material-ui/icons';
import M from 'materialize-css';
//import Navbar from '../Navbar/index';
//import List from '../List/index';
import Home from '../Home/index';
import Navbar from '../Navbar/index';
//import HouseImg from '../Home/HouseImg';
import Login from '../Login/index';
import Register from '../Register/index';

import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  //State
  
  //Functions
  componentDidMount() {
    M.AutoInit();
  }
  //Render
  render() {
    const App = () => (
       <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
       </div>
    )
    
    return (
      <Provider store={store}>
        <Switch>
          <App />
        </Switch>
      </Provider>
    )
  }
}

export default App;