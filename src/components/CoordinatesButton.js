// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
    
    constructor(props){
        super(props)
        this.coordinateClick = this.coordinateClick.bind(this)
    }

    coordinateClick = (e) => {
        let arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }
    
    render() {
        return (
            <div>
                <button
                onClick={this.coordinateClick}>LOG COORDINATES BUTTON</button>
            </div>
        );
    }
}

export default CoordinatesButton;
