import React from 'react';
import ReactDom from 'react-dom';

class Train extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.arrival = this.arrival.bind(this);
    }

    arrival() {
        //arrive and remove the staff token from the train.
        //can hide the train component for now.
    }

    render() {
        return <div>
            <i></i><h1>Service</h1><i></i>
            <p>{this.props.name}</p>
            <p>Staff: {this.props.staff}</p>
            <p>In {this.props.block}</p>
            <button onclick={this.arrival}>Arrive - Turn in Staff</button>
        </div>
    }
}