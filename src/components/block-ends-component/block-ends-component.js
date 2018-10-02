import React from 'react';
import ReactDom from 'react-dom';
import blockEndClasses from './block-ends-component.css'

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
            return <button className={this.props.end} onClick={this.checkOut}>{this.props.a}</button>
        } else {
            return <button className={this.props.end} disabled>{this.props.a}</button>
        }
    }
}