import React from 'react';
import ReactDom from 'react-dom';
import appClasses from './index.css'
import RouteService from './service/route-service';
import Block from './components/block-component/block-component'

const routeService = RouteService;

class App extends React.Component {
    constructor(props) {
        super(props),
        this.routeState = this.routeState.bind(this),
        this.state = {
            route: {},
            routeName: '',
            routekey: 'shr' //make dynamic later
        }
    }

    componentDidMount() {
        this.routeState();
    }

    routeState() {
        routeService.db.ref(`route/${this.state.routekey}`).on('value', function(snapshot) {
            console.log(snapshot);
            this.setState({routeName: snapshot.key});
        })
        
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