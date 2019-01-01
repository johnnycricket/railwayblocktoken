import React from 'react';
import ReactDom from 'react-dom';
import appClasses from './index.css'
import RouteService from './service/route-service';
import Block from './components/block-component/block-component'

let ref = RouteService.db.ref(`routes/shr`);

class App extends React.Component {
    constructor(props) {
        super(props),
        this.routeState = this.routeState.bind(this),
        this.state = {
            route: {},
            routeName: 'shr',
            routekey: 'shr' //make dynamic later
        }
    }

    componentDidMount() {
        this.routeState().then(s => {
            this.setState({route: s});
            console.log(this.state)
        })
    }

    routeState() {
       return ref.once('value')
        .then(function(snapshot) {
            let routeArray = [];
            snapshot.forEach(function(childSnap){
                routeArray.push(childSnap.val());
            });
            return routeArray;
        });
    }

    listBlocks() {
        // const blocks = routeService.db.ref()
    }

    render() {
        return <div className="app">
            <h1>Railway Block App!</h1>
            <Block blockname="???"></Block>
        </div>;
    };
}

var mount = document.getElementById('app');
ReactDom.render(<App/>, mount);