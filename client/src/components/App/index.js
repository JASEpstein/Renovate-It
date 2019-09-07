import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '@material-ui/core';
import '@material-ui/icons';
// import M from 'materialize-css';
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../../actions/authActions";

import Home from '../Home/index';
import Navbar from '../Navbar/index';
import Login from '../Login/index';
import Register from '../Register/index';
import PrivateRoute from "../Private-Route/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";

import { Provider } from "react-redux";
import store from "../../store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {
  //State
  
  //Functions

  //Render
  render() {
    const App = () => (
       <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
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