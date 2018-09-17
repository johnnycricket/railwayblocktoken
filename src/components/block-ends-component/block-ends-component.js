import React from 'react';
import ReactDom from 'react-dom';

export default class BlockEnds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staff: true
        }
        this.state.staff = this.props.staff;
    }
    

    render() {
        if(this.state.staff){
            return <button>{this.props.end}</button>
        } else {
            return <button disabled>{this.props.end}</button>
        }
    }
}