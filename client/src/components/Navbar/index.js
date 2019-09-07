import React, { Component } from 'react';
import M from 'materialize-css';
import '@material-ui/icons';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
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
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#!"><i className="large material-icons dropdown-trigger" data-target="auth-dropdown">account_circle</i></a></li>
          </ul>
        </div>
      </nav>

      {this.props.auth.isAuthenticated ? (
        <ul id="auth-dropdown" className="dropdown-content">
          <li><a href="/dashboard" className="blue-text text-accent-3">Account</a></li>
          <li><a href="/" onClick={this.onLogoutClick} className="blue-text text-accent-3">Logout</a></li>
        </ul>
      ) : (
        <ul id="auth-dropdown" className="dropdown-content">
          <li><a href="/login" className="blue-text text-accent-3">Sign In</a></li>
          <li><a href="/register" className="blue-text text-accent-3">Register</a></li>
        </ul>
      )}
      


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