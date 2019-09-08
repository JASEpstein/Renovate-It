import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import 'materialize-css/dist/css/materialize.min.css';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  render() {
    const { user } = this.props.auth;
    
    return (
        <div>
            <ul id="slide-out" className="sidenav sidenav-fixed" style={{ marginTop: "4.3rem"}}>
                <li>
                    <div className="user-view">
                        <img className="circle responsive-img" src={require("../../img/Spock.jpg")} alt=""/>
                        <span className="black-text name">{user.name}</span>
                        <span className="black-text email">{user.email}</span>
                    </div>
                </li>
                <li><div className="divider"></div></li>
                <li><a data-target="slide-out" className="waves-effect sidenav-trigger" href="#!"><i className="material-icons">person</i>Account Details</a></li>
                <li><a data-target="slide-out" className="waves-effect sidenav-trigger" href="#!"><i className="material-icons">format_paint</i>Saved Renovations</a></li>
                <li><a data-target="slide-out" className="waves-effect sidenav-trigger" href="#!"><i className="material-icons">attach_money</i>Amortization Schedule</a></li>
                <li><a data-target="slide-out" className="waves-effect sidenav-trigger" href="#!"><i className="material-icons">local_library</i>Learning Center</a></li>
            </ul>
        </div>
          );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Dashboard);

{/* <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div> */}
