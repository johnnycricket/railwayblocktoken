import React from 'react';
import ReactDom from 'react-dom';

class TrainSetup extends React.Component {
    constructor(props){
        super(props)
        state = {
            name: '',
            direction: '',
            show: false
        }
        this.state.show = this.props.show;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);
    }

    handleSubmit() {
        this.props.onNewTrain({name: this.state.name, direction: this.state.direction})
        event.preventDefault()
    }

    render() {
        if(!this.state.name && this.state.show) {
            <div>
                <label for="service-name">Service Name:</label>
                <input type="text" id="service" name="service-name" value={this.state.name} />
                <label for="direction">Direction:</label>
                <select id="direction" name="direction" value={this.state.direction} >
                    <option value="up">Up</option>
                    <option value="down">Down</option>
                </select>
                <input type="submit">Add Service</input>>
            </div>
        } 
    }
}