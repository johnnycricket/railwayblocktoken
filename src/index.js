import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render() {
        return <div>Hello app.</div>;
    };
}

var mount = document.getElementById('app');
ReactDom.render(<App/>, mount);