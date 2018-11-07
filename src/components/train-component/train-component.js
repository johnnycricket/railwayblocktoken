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
                <svg viewBox="0 0 118 218" width="100" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M78.56522 173.98055h14.7826V209H55.08697c-8.16435 0-14.78261-5.92296-14.78261-13.22957v-62.25681H23.7826C15.61826 133.51362 9 127.59066 9 120.28405v-77.0428c0-7.30662 6.61826-13.22958 14.7826-13.22958h16.52175v-7.7821C40.30435 14.92296 46.9226 9 55.08695 9h8.69566c8.16435 0 14.7826 5.92296 14.7826 13.22957v7.7821H94.2174c8.16435 0 14.78261 5.92296 14.78261 13.22958v77.0428c0 7.30661-6.61826 13.22957-14.7826 13.22957H78.56521v40.46693z" fill="#F4F4F4" stroke="#979797" stroke-width="18" fill-rule="evenodd"/>
                </svg>
                <button class="arrive" onClick={this.arrival}>Service Arrival - Turn in Staff</button>
            </div>
        } else if (this.props.staff && !this.state.name) {
            return <TrainSetup onNewTrain={this.newTrain}></TrainSetup>
        } else {
            return null
        }
    }
}