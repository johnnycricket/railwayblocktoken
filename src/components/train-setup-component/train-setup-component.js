import React from 'react';
import ReactDom from 'react-dom';

class TrainSetup extends React.Component {
    constructor(props){
        super(props){
            state = {
                name: '',
                direction: ''
            }
        }
    }
    render() {
        if(!this.state.name) {
            <div>
                <input id="train-name" name="train-name" />
            </div>
        } 
    }
}