import React from 'react';
import ReactDom from 'react-dom';
import TrainSetup from '../train-setup-component/train-setup-component'

export default class Train extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            staff: ''
        }
        this.state.show = this.props.show;
        this.state.staff = this.props.staff;
        this.arrival = this.arrival.bind(this);
        this.newTrain = this.arrival.bind(this)
    }

    newTrain(values){
        this.setState({name: values.name, direction: values.direction})
    }

    arrival() {
        //arrive and remove the staff token from the train.
        this.state.show = false;
        this.state.staff = false;
        this.props.toExchangeStaff(false);
    }

    render() {
        if (this.state.show && this.state.name) {
            return <div>
                <h3>Service {this.state.name}</h3>
                <p>Staff: {this.state.staff}</p>
                <p>In {this.props.block}</p>
                <button onClick={this.arrival}>Arrive - Turn in Staff</button>
            </div>
        } else if (this.state.show && !this.state.name) {
            return <TrainSetup onNewTrain={this.newTrain}></TrainSetup>
        } else {
            return <div></div>
        }
    }
}