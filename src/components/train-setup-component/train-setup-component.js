import React from 'react';
import ReactDom from 'react-dom';
import trainSetupClasses from './train-setup-component.css';

export default class TrainSetup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            direction: 'up'
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDirectionChange = this.handleDirectionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handleDirectionChange(event) {
        this.setState({direction: event.target.value})
    }

    handleSubmit() {
        event.preventDefault();
        this.props.onNewTrain({name: this.state.name, direction: this.state.direction})
    }

    render() {
        return <div className="train-name">
            <h3>Service Name and Direction</h3>
            <div class="input-group">
                <label htmlFor="service-name">Service Name:</label>
                <input type="text" name="service-name" value={this.state.name} onChange={this.handleNameChange}/>
            </div>
            <div class="input-group">
                <label htmlFor="direction">Direction:</label>
                <select name="direction" value={this.state.direction} onChange={this.handleDirectionChange}>
                    <option value="up">Up</option>
                    <option value="down">Down</option>
                </select>
            </div>
            <button class="submit-service" onClick={this.handleSubmit}>Add Service</button>  
        </div>
    }
}