import React from 'react';
import ReactDom from 'react-dom';
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
                <p>In {this.props.block}</p>
                <button onClick={this.arrival}>Arrive - Turn in Staff</button>
            </div>
        } else if (this.props.staff && !this.state.name) {
            return <TrainSetup onNewTrain={this.newTrain}></TrainSetup>
        } else {
            return null
        }
    }
}