// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {


  actionForMouseClick = (event) => {
    const cArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(cArray)
  }

  render(){
    return (
      <button onClick={this.actionForMouseClick}>Click</button>
    )
  }
}
