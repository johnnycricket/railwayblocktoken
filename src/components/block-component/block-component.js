import React from 'react';
import ReactDom from 'react-dom';

class Block extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            staff: true,
            given: false,
            trainname: '',
            blockname: '',
        }
    }

    giveStaff() {
        if(this.state.staff) {
            this.setState({staff: false, given: true})
        }
    }

    getStaff() {
        if(!this.state.staff) {
            this.setState({staff: true, given: false});
        }
    }

    nameService(name) {
        this.state.name = name;
    }

    render() {
        return <div>
            <div>
                <button disabled="{!this.state.staff}" onclick="giveStaff(this.props.upend)">{this.props.upend}</button>
            </div>
            <div>
                <Train show="false" name="this.state.trainname" staff="this.state.staffOut" block="this.state.block"/>
            </div>
            <div>
                <button disabled="{!this.state.staff}" onclick="giveStaff(this.props.downend)">{this.props.downend}</button>
            </div>
        </div>

    }
}