// Code CoordinatesButton Component Here
import React, {Component} from 'react'
export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    let result = []
    result.push(event.clientX)
    result.push(event.clientY)
    this.props.onReceiveCoordinates(result)
  }

  render () {
    return <button onClick = {this.handleClick} />
  }
}
