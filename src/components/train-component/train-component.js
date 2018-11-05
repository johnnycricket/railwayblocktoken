import React from 'react';
import ReactDom from 'react-dom';
import trainClasses from './train-component.css';
import TrainSetup from '../train-setup-component/train-setup-component'

export default class Train extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            direction: ''
        }
        this.arrival = this.arrival.bind(this);
        this.newTrain = this.newTrain.bind(this);
    }

    newTrain(values){
        console.log(values)
        this.setState({name: values.name, direction: values.direction})
    }

    arrival() {
        console.log('arrival pressed');
        event.preventDefault();
        //arrive and remove the staff token from the train.
        this.setState({
            name: undefined,
            direction: undefined
        });
        this.props.toExchangeStaff(false);
    }

    render() {
        if (this.props.staff && this.state.name) {
            return <div className="train">
                <h3>Service {this.state.name}</h3>
                <svg width="133" height="275" xmlns="http://www.w3.org/2000/svg">
                    <path d="M89 221h17v45H62c-9.389 0-17-7.611-17-17v-80H26c-9.389 0-17-7.611-17-17V53c0-9.389 7.611-17 17-17h19V26c0-9.389 7.611-17 17-17h10c9.389 0 17 7.611 17 17v10h18c9.389 0 17 7.611 17 17v99c0 9.389-7.611 17-17 17H89v52z" stroke="#979797" stroke-width="18" fill="#F4F4F4" fill-rule="evenodd"/>
                </svg>
                <button onClick={this.arrival}>Arrive - Turn in Staff</button>
            </div>
        } else if (this.props.staff && !this.state.name) {
            return <TrainSetup onNewTrain={this.newTrain}></TrainSetup>
        } else {
            return null
        }
    }
}