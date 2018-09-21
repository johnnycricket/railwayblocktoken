import React from 'react';
import ReactDom from 'react-dom';
import appClasses from './index.css'
import Block from './components/block-component/block-component'

class App extends React.Component {
    render() {
        return <div className="app">
            <h1>Railway Block App!</h1>
            <Block blockname="Found Jovial - Over Sey" upend="Found Jovial" downend="Over Sey"></Block>
        </div>;
    };
}

var mount = document.getElementById('app');
ReactDom.render(<App/>, mount);