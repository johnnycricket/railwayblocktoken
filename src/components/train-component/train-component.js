import React from 'react';
import ReactDom from 'react-dom';

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
    }

    arrival() {
        //arrive and remove the staff token from the train.
        this.state.show = false;
        this.state.staff = '';
    }

    render() {
        if (this.state.show) {
            return <div>
                <h3>Service {this.props.name}</h3>
                <p>Staff: {this.props.staff}</p>
                <p>In {this.props.block}</p>
                <button onClick={this.arrival}>Arrive - Turn in Staff</button>
            </div>
        } else {
            return <div></div>
        } 
    }
}