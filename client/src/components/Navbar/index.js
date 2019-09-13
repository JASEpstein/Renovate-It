import React from 'react';

import AuthDropdown from "./AuthDropdown"

export default function Navbar() {
    return (
    <div id='navbar'>
      <nav className="blue accent-3">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo" style={{ marginLeft: "1rem"}}><i className="large material-icons">format_paint</i>HT</a>
          <AuthDropdown/>
        </div>
      </nav>
    </div>
    )   
}
