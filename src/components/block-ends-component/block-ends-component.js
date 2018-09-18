import React from 'react';
import ReactDom from 'react-dom';
const component = this;
export default class BlockEnds extends React.Component {
    constructor(props) {
        super(props);
        this.checkOut = this.checkOut.bind(this);
    }
    
    checkOut() {
        this.props.toExchangeStaff(true);
    }

    render() {
        if(this.props.staff){
            return <button onClick={this.checkOut}>{this.props.end}</button>
        } else {
            return <button disabled>{this.props.end}</button>
        }
    }
}