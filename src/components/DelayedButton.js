import React, { Component } from 'react';

class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist()
        // when clicked passes the even in to the onDelayedClick prop
        // this is within a setTimeOut function
        setTimeout( () => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return (
            <button onClick= {this.handleClick} >Delay Button</button>
        );
    }
}

export default DelayedButton;
