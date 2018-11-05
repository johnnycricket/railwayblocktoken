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
            return <div>
                <button class="block-end" onClick={this.checkOut}>Token Available</button>
                <svg width="133" height="275" xmlns="http://www.w3.org/2000/svg">
                    <path d="M89 221h17v45H62c-9.389 0-17-7.611-17-17v-80H26c-9.389 0-17-7.611-17-17V53c0-9.389 7.611-17 17-17h19V26c0-9.389 7.611-17 17-17h10c9.389 0 17 7.611 17 17v10h18c9.389 0 17 7.611 17 17v99c0 9.389-7.611 17-17 17H89v52z" stroke="#979797" stroke-width="18" fill="#F4F4F4" fill-rule="evenodd"/>
                </svg>
            </div>
        } else {
            return <button class="block-end" disabled>No Token</button>
        }
    }
}