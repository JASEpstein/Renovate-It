import React, { Component, Fragment } from 'react';
import '@material-ui/icons';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AuthDropdown extends Component {
    
    render() {
        return(
          <Fragment>
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
          </Fragment>
            
        )
    }
}

AuthDropdown.propTypes = {
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AuthDropdown);