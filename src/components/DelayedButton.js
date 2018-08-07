// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
   
    
    delayClick = (e) => {
        e.persist()
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay);  
    }

    render() {
        return (
            <div>
                <button
                onClick={this.delayClick}>DELAY</button>
            </div>
        );
    }
}

export default DelayedButton;



