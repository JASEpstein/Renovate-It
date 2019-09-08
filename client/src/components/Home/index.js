import React, { Component, Fragment } from 'react';
import 'materialize-css';
import styled from 'styled-components';

const HeroBackground = styled.div`
  margin-top: 2rem;
  height: 95vh;
  width: 0 auto;
  background-image: url(require('../../img/tools.jpg'));
  background-size: cover;
`
class Home extends Component {
  
  
  render() {
    return (
      <Fragment>
        <HeroBackground/>
      </Fragment>
    );
  }
}
export default Home;
