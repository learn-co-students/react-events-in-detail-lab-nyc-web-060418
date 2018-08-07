// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <button onClick={
        (event)=>{
          event.persist()
          setTimeout(this.props.onDelayedClick, this.props.delay, event)
        }}
        >Delayed Button</button>
    )
  }
}
