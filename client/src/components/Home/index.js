import React, { Component, Fragment } from 'react';
import 'materialize-css';
import styled from 'styled-components';

import RenovateBtn from './RenovateBtn';
import CalculateBtn from './CalculateBtn';
import CoordinateBtn from './CoordinateBtn';

import Background from '../`Global/Background';


const FlexContainerHead = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 12rem;
  padding-top: 13rem;
`
const FlexContainerSub = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 12rem;
`
const FlexContainerBtns = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 5rem;
`

const HeroTitle = styled.h1`
  font-size: 9rem;
  color: #fff;
  align-items: center;
  justify-content: center;
`
const HeroSubHead = styled.h2`
  color: #fff;
  font-size: 3rem;
  margin-right: 1rem;
`

class Home extends Component {
  
  render() {
    return (
      <Background
        children={
        <Fragment>
          <FlexContainerHead>
            <HeroTitle>HomeTools</HeroTitle>
          </FlexContainerHead>
          <FlexContainerSub>
            <HeroSubHead>Calculate.</HeroSubHead>
            <HeroSubHead>Renovate.</HeroSubHead>
            <HeroSubHead>Coordinate.</HeroSubHead>
          </FlexContainerSub>
          <FlexContainerBtns>
            <RenovateBtn/>
            <CalculateBtn/>
            <CoordinateBtn/>
          </FlexContainerBtns>
        </Fragment>
        }/>
    );
  }
}
export default Home;

// margin: 12rem 12rem;
//   border-radius: 5px;
//   border: 1px solid #fff;
//   background-color: rgba(119, 119, 122, 0.3);