import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event);}, this.props.delay);
  }

  render(){
    const time = this.props.delay
    return (<button onClick={this.handleClick}>Delayed</button>)
  }
}
