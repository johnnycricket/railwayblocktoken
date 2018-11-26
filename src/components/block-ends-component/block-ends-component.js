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
                <svg viewBox="0 0 118 218" width="100" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M78.56522 173.98055h14.7826V209H55.08697c-8.16435 0-14.78261-5.92296-14.78261-13.22957v-62.25681H23.7826C15.61826 133.51362 9 127.59066 9 120.28405v-77.0428c0-7.30662 6.61826-13.22958 14.7826-13.22958h16.52175v-7.7821C40.30435 14.92296 46.9226 9 55.08695 9h8.69566c8.16435 0 14.7826 5.92296 14.7826 13.22957v7.7821H94.2174c8.16435 0 14.78261 5.92296 14.78261 13.22958v77.0428c0 7.30661-6.61826 13.22957-14.7826 13.22957H78.56521v40.46693z" fill="#F4F4F4" stroke="#979797" strokeWidth="18" fillRule="evenodd"/>
                </svg>
                <button className="block-end" onClick={this.checkOut}>Token Available</button>
            </div>
        } else {
            return <button className="block-end" disabled>No Token</button>
        }
    }
}