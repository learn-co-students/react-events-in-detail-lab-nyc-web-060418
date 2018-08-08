// Code CoordinatesButton Component Here

import React, { Component } from 'react'
import DelayedButton from './DelayedButton'

class CoordinatesButton extends Component {

  constructor(props) {
    super(props)

  }

  arrayCreate = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.arrayCreate}>Coords</button>
    )
  }
}

export default CoordinatesButton;

//props: onReceiveCoordinates. This prop is a function passed down from index.js. This function is currently just logging whatever is passed into it.

// create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
