// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
    
    
    handleClick = (event) => {
      const coordinatesArray = [event.clientX, event.clientY]
      this.props.onReceiveCoordinates(coordinatesArray)

    }
    
    render() {

        return (
            <button onClick={this.handleClick}>Coordinates Button</button>
        );
    }
}

export default CoordinatesButton;
