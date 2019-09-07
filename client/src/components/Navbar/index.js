import React, { Component } from 'react';
import M from 'materialize-css';
import '@material-ui/icons';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

// import LoginDropdown from "./LoginDropdown"
class Navbar extends Component {
  componentDidMount() {
    //Makes the dropdown go below the trigger button
    let trigger = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(trigger, {
      coverTrigger: false,
    });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
    <div id='navbar'>
      <nav className="blue accent-3">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo" style={{ marginLeft: "1rem"}}>RenovateIt!</a>
          {this.props.auth.isAuthenticated ? (
            <ul id="nav-mobile" className="right hide-on-med-and-down dropdown-trigger" data-target="auth-dropdown">
              <li className="" ><a href="#!"><i className="large material-icons">account_circle</i></a></li>
            </ul>
          ):(
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Sign Up</a></li>
            </ul>
          )}
        </div>
      </nav>

      <ul id="auth-dropdown" className="dropdown-content">
        <li><a href="/dashboard" className="blue-text text-accent-3">Dashboard</a></li>
        <li><a href="/" onClick={this.onLogoutClick} className="blue-text text-accent-3">Logout</a></li>
      </ul>
      
      


    </div>
    
    
    )
  }
    
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);