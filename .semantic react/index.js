import React, { Component } from 'react';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Navbar from "../Navbar/index";


class App extends Component {
  //State
  state = {
    activeItem: "home"
  }
  //Functions
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //Render
  render() {
    return (
      <Navbar active={this.activeItem} />
    )
  }
}

export default App;