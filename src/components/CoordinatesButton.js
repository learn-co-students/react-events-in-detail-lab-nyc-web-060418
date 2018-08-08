// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    let returnArray = []
    returnArray.push(e.clientX)
    returnArray.push(e.clientY)
    this.props.onReceiveCoordinates(returnArray)
  }

  render() {
    return <button onClick={this.handleClick}/>
  }
}
