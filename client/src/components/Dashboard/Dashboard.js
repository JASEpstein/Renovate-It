import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  render() {
    const { user } = this.props.auth;
    
    return (
        <div>
            {console.log(this.props)}
            <ul id="slide-out" className="sidenav sidenav-fixed" style={{ marginTop: "4.29rem"}}>
                <li>
                    <div className="user-view">
                        <img className="circle responsive-img" src="../../img/Spock.jpg" alt=""/>
                        <a href="#name"><span className="black-text name">{user.name.split(" ")[0]}</span></a>
                        <a href="#email"><span className="black-text email">livelongandprosper@starfleet.com</span></a>
                    </div>
                </li>
                <li><div className="divider"></div></li>
                <li><a className="waves-effect" href="#!"><i className="material-icons">format_paint</i>Renovation Calculator</a></li>
                <div className="divider"></div>
                <li><a className="waves-effect" href="#!"><i className="material-icons">attach_money</i>Amortization Schedule</a></li>
                <li><div className="divider"></div></li>
                <li><a className="waves-effect" href="#!"><i className="material-icons">local_library</i>Learning Center</a></li>
            </ul>
            {/* <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
        </div>
          );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
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
