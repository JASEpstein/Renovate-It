import React, { Component, Fragment } from 'react';
import 'materialize-css';
import styled from 'styled-components';

import heroImg from '../../img/tools.jpg';

const HeroBackground = styled.div`
  margin-top: -5rem;
  height: 800px;
  width: 0 auto;
  color: red;
  background-image: linear-gradient(
    to right bottom, 
    rgba(252, 0, 255, 0.8), 
    rgba(0, 219, 222, 0.8))
    ,url(${heroImg});

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
