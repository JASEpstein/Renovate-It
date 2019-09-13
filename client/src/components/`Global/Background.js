import React from 'react';
import styled from 'styled-components';

import heroImg from '../../img/tools.jpg';


const HeroBackground = styled.div`
  margin-top: -5rem;
  height: 70rem;
  width: 0 auto;
  background-image: linear-gradient(
    to right bottom, 
    rgba(252, 0, 255, 0.8), 
    rgba(0, 219, 222, 0.8)),
    url(${heroImg});
  background-size: cover;
  background-position: 70% 50%;
`

const Background = (props) => {
    return ( 
        <HeroBackground>
            {props.children}
        </HeroBackground>
     );
}
 
export default Background;
