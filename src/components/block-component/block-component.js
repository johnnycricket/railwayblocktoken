import React from 'react';
import ReactDom from 'react-dom';
import BlockEnds from '../block-ends-component/block-ends-component'
import Train from '../train-component/train-component'

export default class Block extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            staff: true,
            given: false,
            trainname: '',
            blockname: '',
        }
        this.state.blockname = this.props.blockname;
    }

    giveStaff() {
        if(this.state.staff) {
            this.setState({staff: false, given: true})
        }
        if(!this.state.trainname) {
            
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
                <BlockEnds end="{this.props.upend}" staff="{this.state.staff}"/>
            </div>
            <div>
                <Train show="false" name="this.state.trainname" staff="this.state.staffOut" block="this.state.block"/>
            </div>
            <div>
                <BlockEnds end="{this.props.downend}" staff="{this.state.staff}"/>
            </div>
        </div>
    }
}