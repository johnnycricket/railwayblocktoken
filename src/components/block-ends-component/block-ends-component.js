import React from 'react';
import ReactDom from 'react-dom';

class BlockEnds extends ReactDom {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        if(this.state.staff){
            <button onclick="">{this.props.name}</button>
        } else {
            <button disabled>{this.props.name}</button>
        }
        
    }
}