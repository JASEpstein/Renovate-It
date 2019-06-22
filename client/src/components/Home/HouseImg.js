import React, { Component } from 'react';
import M from 'materialize-css';

class HouseImg extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return(
            <img className="materialboxed" width="650" alt="house" src="../../../public/assets/icons/house.png" />
        )
    }
}

export default HouseImg;