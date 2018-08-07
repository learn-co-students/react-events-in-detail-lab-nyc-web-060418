// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props);
  }

  handleCoords = event => {
    let y = event.clientY;
    let x = event.clientX;
    // console.log(event.clientX, event.clientY);
    return [x, y];
  };

  render() {
    return (
      <button
        onClick={click =>
          this.props.onReceiveCoordinates([click.clientX, click.clientY])
        }
      >
        Log mouse coords
      </button>
    );
  }
}
