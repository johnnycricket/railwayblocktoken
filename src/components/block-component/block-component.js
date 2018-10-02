import React from 'react';
import ReactDom from 'react-dom';
import blockClasses from './block-component.css'
import BlockEnds from '../block-ends-component/block-ends-component'
import Train from '../train-component/train-component'

export default class Block extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            staff: true,
            given: false,
        }
        this.exchangeStaff = this.exchangeStaff.bind(this);
    }

    exchangeStaff(value) {
        //pass in true: train takes the staff.
        //pass in false: train returns staff.
        if(value) {
            this.setState({staff: false, given: true})
        } else {
            this.setState({staff: true, given: false})
        }
    }

    render() {
        return <div className="block">
            <h2>{this.props.blockname}</h2>
            <BlockEnds end="block-up" a={this.props.upend} staff={this.state.staff} toExchangeStaff={this.exchangeStaff}  />  
            <Train staff={this.state.given} block={this.props.blockname} toExchangeStaff={this.exchangeStaff} />
            <BlockEnds end="block-down" a={this.props.downend} staff={this.state.staff} toExchangeStaff={this.exchangeStaff} />
        </div>
    }
}