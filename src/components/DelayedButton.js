// Code DelayedButton Component Here
import React, {Component} from 'react'
import CoordinatesButton from './CoordinatesButton'

class DelayedButton extends Component {

  constructor(props) {
    super(props)

  }

  clickEvent = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.clickEvent}>Delayed</button>
    )
  }
}

export default DelayedButton;

//two props: onDelayedClick (a function), and delay (a number).

//will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
