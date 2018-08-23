import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render() {
        return <div>
            <h1>Railway Block App!</h1>
            </div>;
    };
}

var mount = document.getElementById('app');
ReactDom.render(<App/>, mount);