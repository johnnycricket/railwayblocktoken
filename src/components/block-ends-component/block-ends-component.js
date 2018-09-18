import React from 'react';
import ReactDom from 'react-dom';
const component = this;
export default class BlockEnds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staff: this.props.staff
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({staff: false})
        this.props.toExchangeStaff(true);
    }

    render() {
        if(this.state.staff){
            return <button onClick={this.handleClick}>{this.props.end}</button>
        } else {
            return <button disabled>{this.props.end}</button>
        }
    }
}