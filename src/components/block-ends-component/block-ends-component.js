import React from 'react';
import ReactDom from 'react-dom';

export default class BlockEnds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staff: true
        }
    }

    render() {
        if(this.state.staff){
            return <button onClick="">{this.props.name}</button>
        } else {
            return <button disabled>{this.props.name}</button>
        }
    }
}