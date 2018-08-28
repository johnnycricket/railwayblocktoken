import React from 'react';
import ReactDom from 'react-dom';

class Block extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            staff: true,
            trainname: '',
        }
    }

    giveStaff() {

    }

    getStaff() {

    }

    nameService() {

    }

    render() {
        return <div>
            <div>
                <button>{this.props.upend}</button>
            </div>
            <div>
                <Train show="false" name="this.state.trainname" staff="" block="this.state.block"/>
            </div>
            <div>
                <button>{this.props.downend}</button>
            </div>
        </div>

    }
}