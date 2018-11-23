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
            route: {}
        }
    }

    componentDidMount() {
        this.routeState();
    }

    routeState() {
        const rs = routeService.getRoute();
        console.log(rs);
        this.setState(rs);
    }

    render() {
        return <div className="app">
            <h1>Railway Block App!</h1>
            <Block blockname="Found Jovial - Over Sey" upend="Found Jovial" downend="Over Sey"></Block>
        </div>;
    };
}

var mount = document.getElementById('app');
ReactDom.render(<App/>, mount);