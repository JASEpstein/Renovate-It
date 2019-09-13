import React, { Component, Fragment } from 'react';
import '@material-ui/icons';
import M from 'materialize-css';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

class AuthDropdown extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    //Makes the dropdown go below the trigger button
    let trigger = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(trigger, {
      coverTrigger: false,
    });
  }

  render() {
      return(
        <Fragment>
          {this.props.auth.isAuthenticated ? (
            <Fragment>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="#!" className="dropdown-trigger" data-target="auth-dropdown"><i className="large material-icons">account_circle</i></a></li>
              </ul>

              <ul id="auth-dropdown" className="dropdown-content">
                <li><a href="/dashboard" className="blue-text text-accent-3"><i className="large material-icons">person</i>Account</a></li>
                <li><a href="/" onClick={this.onLogoutClick} className="blue-text text-accent-3"><i className="large material-icons">exit_to_app</i>Logout</a></li>
              </ul>
            </Fragment>
          ):(
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Sign Up</a></li>
            </ul>
          )}
        </Fragment>
          
      )
    }
}

AuthDropdown.propTypes = {
  logoutUser: PropTypes.func.isRequired,  
  auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(AuthDropdown);