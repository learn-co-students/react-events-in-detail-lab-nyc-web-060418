import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleClick = (event) => {
        let theX = event.clientX
        let theY = event.clientY
        let myCoordsArray = [theX, theY]
        // pass the above data in as the argument for the onReceiveCoordinates prop
        this.props.onReceiveCoordinates(myCoordsArray)
    }

    render() {
        return (
            <button onClick={this.handleClick} >Coordinates Button</button>
        );
    }
}

export default CoordinatesButton;
