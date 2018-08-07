// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
    constructor(props) {
       super(props)
    }

    handleClick = (event) => {
        event.persist()
        setTimeout( () => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleClick} >
                Button2
            </button>
        );
    }
}

export default DelayedButton;
